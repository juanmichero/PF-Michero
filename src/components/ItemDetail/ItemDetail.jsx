import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './ItemDetail.module.css'

const ItemDetail = ({ id, name, img, price, description, stock }) => {
    const [quantity, setQuantity] = useState(0)
    
    const { addItem } = useCart()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        addItem(objProductToAdd)

        setQuantity(quantity)
    }

    return (
        <div className={classes.card}>
                <h1 className={classes.h1}>{name}</h1>
                <img src={img} className={classes.img}/>
                <h3 className={classes.h3}>${price}</h3>
                <h4 className={classes.h4}>{description}</h4>
                    {
                        quantity === 0 ? (
                            <ItemCount stock={stock} onAdd={handleOnAdd}/>
                        ) : (
                            <Link to='/cart' className={classes.cart}>View cart</Link>
                        )
                    }
                    
            </div>
    )
}

export default ItemDetail