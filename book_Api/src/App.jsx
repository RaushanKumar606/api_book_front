
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './component/User/Login'
import { Register } from './component/User/Register'
import { Contact } from './component/Home/Contact'
import { Footer } from './component/Footer'
import { NavBar } from './component/Navbar/Navbar'

function App() {
  

  return (
    <>
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
        </BrowserRouter>

    </>
  )
}

export default App
