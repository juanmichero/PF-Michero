import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { category } = useParams()

    useEffect(() => {
        const asyncFunction = category ? getProductsByCategory : getProducts

        asyncFunction(category)
            .then(response => {
                setProducts(response)
            })
            // .catch(error => {
            //     console.error(error);
            // })
    }, [category])

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="font-monospace fw-semibold">{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer