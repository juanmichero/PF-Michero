import { createContext, useContext, useState } from "react"
import Swal from 'sweetalert2'

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

    console.log(cart);

    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
        Swal.fire({
          icon: "success",
          title: `${productToAdd.name} has been added to the cart`,
          showConfirmButton: false,
          timer: 1500
      })
      } else {
        Swal.fire({
            icon: "warning",
            title: `${productToAdd.name} is already in the cart`,
            showConfirmButton: false,
            timer: 1500
        })
      }
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }
  
    const removeItem = (id) => {
      const cartUpdated = cart.filter(prod => prod.id !== id)
      setCart(cartUpdated)
      Swal.fire({
        icon: "success",
        title: `The product has been succesfully removed`,
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

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, clearCart, total }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}