import './Checkout.css'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext/CartContext"
import { getDocs, addDoc, collection, where, query, documentId, writeBatch} from 'firebase/firestore'
import { dataBase } from "../../services/firebase/firebase-service"
import CartItem from "../CartItem/CartItem"

const Checkout = ({userName, userEmail1, userPhone}) => {
    const[loading, setLoading] = useState(false)
    const[orderNumber, setOrderNumber] = useState("")
    const[purchaseFinished, setPurchaseFinished] = useState(false)
    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name: userName,
                    phone: userPhone,
                    email: userEmail1
                },
                items: cart,
                total
            }

            const ids = cart.map(product => product.id)
            const productsRef = collection(dataBase, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore

            const batch = writeBatch(dataBase)
            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const productAmount = productAddedToCart?.amount

                if(stockDb >= productAmount) {
                    batch.update(doc.ref, {stock: stockDb - productAmount})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {

                await batch.commit()

                const orderRef = collection(dataBase, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderNumber(orderAdded.id)

                clearCart()
            } else {
                console.log("Hay productos fuera de stock")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
            setPurchaseFinished(true)
        }
    }

    if(loading) {
        return <h1>Su orden se está procesando...</h1>
    }

    if(purchaseFinished) {
        return <h1>Compra finalizada, su número de orden es {orderNumber}</h1>
    }

    return (
        <div>
            <h1>Su pedido consta de:</h1>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Suma un total de ${total}</h3>
            <button onClick={createOrder} className='purchaseButton'>Confirmación final de orden</button>
        </div>
    )
}

export default Checkout