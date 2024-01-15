import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)

    const [products, setProducts] = useState([])

    const { category } = useParams()

    useEffect(() => {
        if(category) document.title = category

        return () => {
            document.title = 'Custom Mechanical Keyboard Store'
        }
    })

    useEffect(() => {
        setLoading(true)

        const asyncFunction = category ? getProductsByCategory : getProducts

        asyncFunction(category)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [category])

    if(loading) {
        return <h1 className="d-flex justify-content-center mt-5">loading products...</h1>
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="font-monospace fw-semibold">{greeting + (category ?? '')}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer