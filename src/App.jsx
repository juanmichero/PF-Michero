// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import classes from './App.module.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Custom Mechanical Keyboard Store" />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/product/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<h1 className={classes.error}>ERROR</h1>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App