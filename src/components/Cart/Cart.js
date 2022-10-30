import { useContext } from 'react'
import { CartContext } from '../../context/CartContext/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const {cart, clearCart, totalAmount, total} = useContext(CartContext)

    if(totalAmount === 0) {
        return (
            <h2>No hay items en el carrito</h2>
        )
    }

    return (
        <div>
            <h1>Carrito de compras</h1>
            <h2>El precio de los fiambres es por 100 gramos</h2>
            {cart.map(product => <CartItem key={product.id} {...product}/>)}
            <h3>El total es: ${total}</h3>
            <div style={{display:'flex', flexDirection:'column', maxWidth:'200px', justifyItems:'center', margin:'auto'}}>
                <button onClick={() => clearCart()}>Vaciar Carrito</button>
                <Link to='/checkoutform' style={{textDecoration:'none', color:'black', fontWeight:'bold', backgroundColor:'darkgray', padding:'5px', border:'solid 1px,', marginTop:'20px'}}>Checkout</Link>
            </div>
        </div>
    )
}

export default Cart