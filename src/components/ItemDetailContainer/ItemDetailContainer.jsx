import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams, Link } from "react-router-dom"
import classes from './ItemDetailContainer.module.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { id } = useParams()

    useEffect(() => {
        getProductById(id)
            .then(response => {
                setProduct(response)
            })
    }, [id])

    if(!product) {
        return <h1>ERROR</h1>
    }

    return (
        <div className="d-flex justify-content-center">
            <div className={classes.card}>
                <h1 className={classes.h1}>{product.name}</h1>
                <img src={product.img} className={classes.img}/>
                    <h3 className={classes.h3}>${product.price}</h3>
                    <h4 className={classes.h4}>{product.description}</h4>
                    {/* <Link to={`/product/${id}`} className={classes.button}>Details</Link> */}
                    {/* <ItemCount stock={stock} onAdd={(quantity) => console.log("Se agregaron", quantity,"unidades de", name)}/> */}
            </div>
        </div>
    )
}

export default ItemDetailContainer