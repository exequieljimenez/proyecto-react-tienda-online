import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext/CartContext'

const CartItem = ({id, name, amount, price}) => {
    const {removeItem} = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div>
            <section>
                <div className='cartData'>
                    <p>{amount}</p>
                    <p>{name}</p>
                    <p>por un precio de ${price}</p>
                    <p>Subtotal: ${price * amount}</p>
                    <button onClick={() => handleRemove(id)}>Quitar del carrito</button>
                </div>
            </section>
        </div>
    )
}

export default CartItem