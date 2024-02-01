import CartItem from "../CartItem/CartItem"
import classes from './Cart.module.css'
import { CartContext } from "../../context/CartContext"
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, totalQuantity, clearCartWithValidation, total } = useContext(CartContext)

    useEffect(() => {
        document.title = 'Cart'
    })

    if(totalQuantity === 0) {
        return (
            <div className="d-flex align-items-center flex-column">
                <h1 className={classes.h1}>No products in cart</h1>
                <Link to='/' className={classes.products}>Products</Link>
            </div>
        )
    }

    return (
        <div className={classes.div}>
            <div className={classes.div1}>
                { cart.map(prod => <CartItem key={prod.id} {...prod}/>) }
            </div>
            <div className={classes.div2}>
                <h3 className={classes.total}>Total: ${total}</h3>
                <div className="d-flex mt-4">
                    <button onClick={() => clearCartWithValidation()} className={classes.clear}>Clear cart</button>
                    <Link to='/checkout' className={classes.checkout}>Checkout</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart