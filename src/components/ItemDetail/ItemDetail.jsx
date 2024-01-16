import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'

const ItemDetail = ({ name, img, price, description, stock }) => {

    return (
        <div className={classes.card}>
                <h1 className={classes.h1}>{name}</h1>
                <img src={img} className={classes.img}/>
                    <h3 className={classes.h3}>${price}</h3>
                    <h4 className={classes.h4}>{description}</h4>
                    <ItemCount stock={stock} onAdd={(quantity) => console.log("Se agregaron", quantity,"unidades de", name)}/>
            </div>
    )
}

export default ItemDetail