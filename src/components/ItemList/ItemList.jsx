import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className="d-flex flex-wrap">
        {
            products.map(prod => {
                return (
                        <Item key={prod.id} {...prod}/>
                )
            })
        }
        </div>
    )
}

export default ItemList