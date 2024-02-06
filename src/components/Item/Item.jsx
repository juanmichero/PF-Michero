import classes from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {
    return (
        <div className={classes.card}>
            <h1 className={classes.name}>{name}</h1>
            <img src={img} className={classes.img}/>
            <div className={classes.div}>
                <h3 className={classes.price}>${price}</h3>
                <Link to={`/product/${id}`} className={classes.details}>Details</Link>
            </div>
        </div>
    )
}

export default Item