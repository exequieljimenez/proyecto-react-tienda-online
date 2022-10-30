import './ItemDetail.css'
import { useState, useContext } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext/CartContext"
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [amountToAdd, setAmountToAdd] = useState(0)

    const { addItem, getProductAmount } = useContext(CartContext)

    const handleOnAdd = (amount) => {
        setAmountToAdd(amount)

        const productToAdd = {id, name, price, amount}

        addItem(productToAdd)
    }

    const productAddedAmount = getProductAmount(id)

    return (
        <div>
            <h1>Detalle del producto</h1>
            <h2>El precio de los fiambres es por 100 gramos</h2>
            <div className='productCard'>
                <article>
                    <h1>{name}</h1>
                    <h2>${price}</h2>
                    <img src={img} alt={description}></img>
                </article>
                <section>
                    {amountToAdd === 0 ? (<ItemQuantitySelector onAdd={handleOnAdd} stock={stock} initial={productAddedAmount}/>) : (<Link to='/cart' style={{textDecoration:'none', color:'black', fontWeight:'bold', backgroundColor:'darkgray', padding:'5px', border:'solid 1px,', marginTop:'20px'}}>Finalizar compra</Link>)}
                </section>
            </div>
        </div>
    )
}

export default ItemDetail