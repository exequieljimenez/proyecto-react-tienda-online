import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { dataBase } from '../../services/firebase/firebase-service'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({ setCart }) => {
    
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        
        const docRef = doc(dataBase, 'products', productId)

        getDoc(docRef).then(doc => {
            const data = doc.data()

            const productAdapted = { id: doc.id, ...data}

            setProduct(productAdapted)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Espere unos instantes...</h1>
    }

    return (
        <div>
            <ItemDetail {...product}/>
        </div>

    )
}

export default ItemDetailContainer