import classes from "./Item.module.css"
import ItemCount from './ItemCount/ItemCount'
import { Link } from "react-router-dom"

const Item = ({ id, name, img, price, stock }) => {
    return (
        <div className={classes.card}>
            <h1 className={classes.h1}>{name}</h1>
            <img src={img} className={classes.img}/>
            <div className={classes.div}>
                <h3 className={classes.h3}>${price}</h3>
                <Link to={`/product/${id}`} className={classes.button}>Details</Link>
            </div>
            <ItemCount stock={stock} onAdd={(quantity) => console.log("Se agregaron", quantity,"unidades de", name)}/>
        </div>
    )
}

export default Item