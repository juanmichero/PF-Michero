import { useState } from "react";
import classes from './ItemCount.module.css';

const ItemCount = ({stock, onAdd}) => {

    const [quantity, setQuantity] = useState(1);
    
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex m-2 justify-content-center mt-4">
                <button className={classes.button} onClick={decrement}>-</button>
                <h3 className={classes.h3}>{quantity}</h3>
                <button className={classes.button} onClick={increment}>+</button>
            </div>
            <div>
                <button className={classes.addToCart} onClick={() => onAdd(quantity)} disabled={!stock}>Add to cart</button>
            </div>
        </div>
    )
}

export default ItemCount 