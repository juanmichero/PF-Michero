import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
// import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase/firebaseConfig"
import { getDoc, doc } from "firebase/firestore"

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

        const productDocument = doc(db, 'products', id)

        getDoc(productDocument)
            .then(queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const productAdapted = { id: queryDocumentSnapshot.id, ...fields }
                setProduct(productAdapted)
            })
            .catch(error => {
                Swal.fire({
                    icon: "warning",
                    title: `ERROR: ${error}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    if(loading) {
        return <h1 className="d-flex justify-content-center mt-5">Loading product...</h1>
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