import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'
import { useCart } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, price, description, stock }) => {
    const { addItem, getProductQuantity } = useCart()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        addItem(objProductToAdd)

    }

    const productQuantity = getProductQuantity(id)

    return (
        <div className={classes.card}>
                <h1 className={classes.h1}>{name}</h1>
                <img src={img} className={classes.img}/>
                <h3 className={classes.h3}>${price}</h3>
                <h4 className={classes.h4}>{description}</h4>
                <ItemCount stock={stock} onAdd={handleOnAdd} initial={productQuantity}/>
            </div>
    )
}

export default ItemDetail