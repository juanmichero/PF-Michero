import { createContext, useContext, useState } from "react"
import Swal from 'sweetalert2'

export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    totalQuantity: 0,
    total: 0
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart);

    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
      } else {
        Swal.fire({
            icon: "warning",
            title: productToAdd.name + " is already in the cart",
            showConfirmButton: false,
            timer: 1500
        });
      }
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }
  
    const removeItem = (id) => {
      const cartUpdated = cart.filter(prod => prod.id === id)
      setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        let acc = 0

        cart.forEach(prod => {
            acc += prod.quantity
        })

        return acc
    }

    const totalQuantity = getTotalQuantity()

    // const getTotal = () => {
        
    // } total $$$

    const clearCart = () => {
        setCart([])
    } // AÑADIR BOTON CLEAR CART

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}