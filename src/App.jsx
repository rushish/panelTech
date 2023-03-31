import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Home from './Pages/Home'
import AddClients from './Pages/AddClients'
import ManageClients from './Pages/ManageClients'


function App() {

  return (
    <>
      <Navbar />
      <ManageClients />
      {/* <Slider />
      <AddClients /> */}
    </>

  )
}

export default App
