import { Link } from 'react-router-dom'

const Item = ({ id, name, description, img, price }) => {
    return (
        <div className='productCard'>
            <h1>{name}</h1>
            <h2>${price}</h2>
            <img src={img} alt={description}></img>
            <Link to={`/item/${id}`} style={{textDecoration:'none', color:'black', fontWeight:'bold', backgroundColor:'darkgray', padding:'5px', border:'solid 1px'}}>Ver Detalle</Link>
        </div>
    )
}

export default Item