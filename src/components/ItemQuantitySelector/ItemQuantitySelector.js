import './ItemQuantitySelector.css'
import { useState } from 'react'

const ItemQuantitySelector = ({stock = 0, initial = 1, onAdd}) => {
    const [amount, setAmount] = useState(initial)

    const addAmount = () => {
        if(amount < stock) {
            setAmount(amount + 1)
        }
    }

    const subtractAmount = () => {
        if(amount > 1) {
            setAmount(amount - 1)
        }
    }

    return (
        <div className='selector'>
            <section className='addAndSubtract'>
                <button onClick={subtractAmount}>-</button>
                <p>{amount}</p>
                <button onClick={addAmount}>+</button>
            </section>
            <section>
                <button onClick={() => onAdd(amount)}>Agregar producto</button>
            </section>
        </div>
    )
}

export default ItemQuantitySelector