import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore';
import { dataBase } from '../../services/firebase/firebase-service';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        const collectionRef = categoryId ? query(collection(dataBase, 'products'), where('category', '==', categoryId)) : collection(dataBase, 'products')

        getDocs(collectionRef).then(res => {
            const productsAdapted = res.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })

            setProducts(productsAdapted)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if(loading && true) {
        return <h1>Espere unos instantes...</h1>
    }

    return (
        <div>
            <h2>{`${greeting} ${categoryId || ''}`}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer