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
      <div className="d-flex justify-content-evenly">
        <ItemListContainer name="QK65" img="https://cdn.store-assets.com/s/402514/i/40737790.png"/>
        <ItemListContainer name="Cycle7" img="https://cdn.store-assets.com/s/402514/f/11242244.png"/>
        <ItemListContainer name="Tokyo60" img="https://massdrop-s3.imgix.net/img_thread/1594055336283.227222350460560649040042-i1wderntzsk11.jpg?auto=format&fm=jpg&fit=min&w=796&dpr=1&chromasub=444&q=70"/>
      </div>
    </>
  )
}

export default App
