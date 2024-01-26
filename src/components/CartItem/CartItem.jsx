import { useCart } from "../../context/CartContext"
import classes from './CartItem.module.css'

const CartItem = ({ id, name, quantity, price, img }) => {
    const { removeItem } = useCart()

    const handleRemoveItem = (click) => {
        click.stopPropagation()
        removeItem(id)
    }

    return (
        <div className={classes.div}>
            <div>
                <h1 className={classes.h1}>{name}</h1>
                <h3 className={classes.h3}>${price} x{quantity}</h3>
            </div>
            {/* <img src={img} className={classes.img}/> */}
            <button className={classes.remove} onClick={handleRemoveItem}>Remove</button>
        </div>
    )
}

export default CartItem