import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
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