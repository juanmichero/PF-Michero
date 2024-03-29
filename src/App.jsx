import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import classes from './App.module.css'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Custom Mechanical Keyboard Store" />} />
            <Route path='/category/:category' element={<ItemListContainer greeting="" />} />
            <Route path='/product/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1 className={classes.error}>ERROR 404</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App