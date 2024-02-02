import Swal from 'sweetalert2'
import { createContext, useContext, useState } from "react"

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {}
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
      } else {
        const cartUpdated = cart.map(prod => {
          if(prod.id === productToAdd.id) {
            return {
              ...prod,
              quantity: productToAdd.quantity
            }
          } else {
            return prod
          }
        })

        setCart(cartUpdated)
      }
      Swal.fire({
        icon: "success",
        title: `${productToAdd.quantity} units of ${productToAdd.name} have been added to the cart`,
        showConfirmButton: false,
        timer: 1500
    })
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }
  
    const removeItem = (id, name) => {
      const cartUpdated = cart.filter(prod => prod.id !== id)
      setCart(cartUpdated)
      Swal.fire({
        icon: "success",
        title: `${name} has been succesfully removed from the cart`,
        showConfirmButton: false,
        timer: 1500
    })
    } 

    const getTotalQuantity = () => {
        let acc = 0

        cart.forEach(prod => {
            acc += prod.quantity
        })

        return acc
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let acc = 0

        cart.forEach(prod => {
          acc += prod.price * prod.quantity
        })

        return acc
    } 

    const total = getTotal()

    const clearCart = () => {
      setCart([])
    } 

    const clearCartWithValidation = () => {
        Swal.fire({
          title: "Are you sure you want to remove all products from the cart?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#23ce6b",
          cancelButtonColor: "#d33",
          confirmButtonText: "Clear cart",
          cancelButtonText: "Cancel"
        }).then((result) => {
          if (result.isConfirmed) {
            setCart([])
            Swal.fire({
              title: "All products have been removed from the cart.",
              text: "",
              icon: "success",
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }

    const getProductQuantity = (productId) => {
      const product = cart.find(prod => prod.id === productId)
      return product?.quantity
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, clearCart, clearCartWithValidation, total, getProductQuantity }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}