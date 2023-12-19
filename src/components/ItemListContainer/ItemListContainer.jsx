import classes from './ItemListContainer.module.css'

const ItemListContainer = (props) => {

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className={classes.h1}>{props.name}</h1>
            <img src={props.img} className={classes.img}/>
        </div>
    )
}

export default ItemListContainer