import { createContext, useContext, useState } from "react"

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
        console.log('product already in cart')
        // SWEET ALERT !!!!!!!!!!
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
        
    // }

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