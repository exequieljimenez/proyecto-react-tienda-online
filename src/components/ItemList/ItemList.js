import './ItemList.css'
import { memo } from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <div className="estiloProductos">
            {products.map(product => <Item key={product.id} {...product}/>)}
        </div>
    )
}

export default memo(ItemList)