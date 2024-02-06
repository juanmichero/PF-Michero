import classes from './CartItem.module.css'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useCart()

    const handleRemoveItem = (click) => {
        click.stopPropagation()
        removeItem(id, name)
    }

    return (
        <div className={classes.div}>
            <div>
                <h1 className={classes.name}>{name}</h1>
                <h3 className={classes.price}>${price} x{quantity}</h3>
            </div>
            <div>
                <Link to={`/product/${id}`} className={classes.details}>Details</Link>
                <button className={classes.remove} onClick={handleRemoveItem}>Remove</button>
            </div>
        </div>
    )
}

export default CartItem