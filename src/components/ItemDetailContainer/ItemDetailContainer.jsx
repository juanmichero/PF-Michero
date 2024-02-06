import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { getProductById } from '../../services/firebase/firestore/products'
import Swal from 'sweetalert2'

const ItemDetailContainer = () => {
    const { id } = useParams()

    useEffect(() => {
        if(product) document.title = product.name
        
        return () => {
            document.title = 'Custom Mechanical Keyboard Store'
        }
    })

    const asyncFunction = () => getProductById(id)

    const { data: product, error, loading } = useAsync(asyncFunction, [id])

    if(loading) {
        return <h1 className='d-flex justify-content-center mt-5'>Loading product...</h1>
    }

    if(!product) {
        return <h1 className='d-flex justify-content-center mt-5'>no product available</h1>
    }

    if(error) {
        Swal.fire({
            icon: 'warning',
            title: `ERROR: ${error}`,
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div className='d-flex justify-content-center'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer