import cart from './assets/shopping-cart.svg'
import classes from './CartWidget.module.css'

const CartWidget = () => {

    return (
        <div className={classes.widget}>
            <img className={classes.cart} src={cart} alt="cart"/>
            <p className="fs-3">0</p>
        </div>
    )
}

export default CartWidget