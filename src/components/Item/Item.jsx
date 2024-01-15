import classes from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {
    return (
        <div className={classes.card}>
            <h1 className={classes.h1}>{name}</h1>
            <img src={img} className={classes.img}/>
            <div className={classes.div}>
                <h3 className={classes.h3}>${price}</h3>
                <Link to={`/product/${id}`} className={classes.button}>Details</Link>
            </div>
        </div>
    )
}

export default Item