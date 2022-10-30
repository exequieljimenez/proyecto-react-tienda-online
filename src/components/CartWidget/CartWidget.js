import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext/CartContext'

const CartWidget = () => {

    const { getTotalAmount } = useContext(CartContext)

    const totalAmount = getTotalAmount()
    
    return (
        <Link to='cart' style={{display: 'flex', flexDirection: 'column', alignItems:'center'}} className='shoppingCart'>
            <img src="/images/cart3.svg" alt="carrito de compras"/>
            Producto(s) en carrito: {totalAmount}
        </Link>
    )
}

export default CartWidget