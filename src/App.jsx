import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import AddClients from './Pages/AddClients'
import ManageClients from './Pages/ManageClients'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} exact path="/"></Route>
          <Route element={<AddClients />} path="/add-clients"></Route>
          <Route element={<ManageClients />} path="/manage-clients"></Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
