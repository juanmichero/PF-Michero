import cartsvg from './assets/shopping-cart.svg'
import { useCart } from '../../context/CartContext'
import classes from './CartWidget.module.css'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <div className={classes.widget}>
            <img className={classes.cart} src={cartsvg} alt="cart"/>
            <p className="fs-3">{totalQuantity}</p>
        </div>
    )
}

export default CartWidget