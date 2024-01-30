import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from "firebase/firestore"
import { useCart } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import Swal from "sweetalert2"
import { useState } from "react"
import classes from './Checkout.module.css'
import OrderForm from "../OrderForm/OrderForm"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const { cart, total, clearCart } = useCart()

    const createOrder = async (userData) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: userData,
                items: cart,
                total
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot
            
            docs.forEach(doc => {
                const fields = doc.data()
                const stockDb = fields.stock
    
                const productsInCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsInCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...fields })
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, objOrder)   
                
                setOrderId(id)

                clearCart()
            } else {
                Swal.fire({
                    icon: "warning",
                    title: `There are products out of stock.`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } catch (error) {
            Swal.fire({
                icon: "warning",
                title: `There was an error while processing the order. ${error}`,
                showConfirmButton: false,
                timer: 2000
            })
        } finally {
            setLoading(false)
        }

        
    }

    if(loading) {
        return (
            <h1 className={classes.processing}>Processing order, please wait.</h1>
        )
    }
    
    if(orderId) {
        return (
            <h1 className={classes.orderid}>Your order ID is {orderId}. Thanks for your purchase!</h1>
        )
    }


    return (
        <>
            <OrderForm />
            <h1>form (name, adress, email, phone)</h1>
            <button onClick={createOrder} className={classes.button}>Place order</button>
        </>
    )
}

export default Checkout