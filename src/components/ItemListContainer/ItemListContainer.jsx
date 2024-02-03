import ItemList from '../ItemList/ItemList'
import Swal from 'sweetalert2'
import { getProducts } from '../../services/firebase/firestore/products'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'


const ItemListContainer = ({ greeting }) => {
    const { category } = useParams()

    useEffect(() => {
        if(category) document.title = category

        return () => {
            document.title = 'Custom Mechanical Keyboard Store'
        }
    }, [category])

    const asyncFunction = () => getProducts(category)

    const { data: products, error, loading } = useAsync(asyncFunction, [category])

    if(loading) {
        return <h1 className="d-flex justify-content-center mt-5">Loading products...</h1>
    }

    if(error) {
        return <h1>error</h1>
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="font-monospace fw-semibold text-center">{greeting + (category ?? '')}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer