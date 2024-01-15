import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'

const ItemDetail = ({ id, name, img, price, description, stock }) => {
    // const [quantity, setQuantity] = useState(0)

    // const handleOnAdd = (quantity) => {
    //     const objProductToAdd = {
    //         id, name, price, quantity
    //     }
    //     console.log(objProductToAdd)

    //     setQuantity(quantity)
    // }

    return (
        <div className={classes.card}>
                <h1 className={classes.h1}>{name}</h1>
                <img src={img} className={classes.img}/>
                    <h3 className={classes.h3}>${price}</h3>
                    <h4 className={classes.h4}>{description}</h4>
                    <ItemCount stock={stock} onAdd={(quantity) => console.log("Se agregaron", quantity,"unidades de", name)}/>
            </div>
    )
}

export default ItemDetail