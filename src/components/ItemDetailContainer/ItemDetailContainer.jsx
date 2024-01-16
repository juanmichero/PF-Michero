import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)

    const [product, setProduct] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        if(product) document.title = product.name 

        return () => {
            document.title = "Custom Mechanical Keyboard Store"
        }
    })

    useEffect(() => {
        setLoading(true)

        getProductById(id)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    if(loading) {
        return <h1 className="d-flex justify-content-center mt-5">loading product...</h1>
    }

    if(!product) {
        return <h1 className="d-flex justify-content-center mt-5">no product available</h1>
    }

    return (
        <div className="d-flex justify-content-center">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer