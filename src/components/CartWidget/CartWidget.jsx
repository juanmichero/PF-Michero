import cart from './assets/shopping-cart.svg'

const CartWidget = () => {

    return (
        <div className="m-3">
            <img src={cart} alt="cart"/>
            0
        </div>
    )

}

export default CartWidget