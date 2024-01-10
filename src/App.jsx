// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <NavBar />
      {/* categorias: teclados, switches, keycaps, etc */}
      <ItemListContainer greeting="Custom Mechanical Keyboards" />
    </>
  )
}

export default App