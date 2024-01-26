import cartsvg from './assets/shopping-cart.svg'
import { useCart } from '../../context/CartContext'
import classes from './CartWidget.module.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <div className={classes.widget}>
            <Link to='/cart'><img className={classes.cart} src={cartsvg} alt="cart"/></Link>
            <p className="fs-3">{totalQuantity}</p>
        </div>
    )
}

export default CartWidget