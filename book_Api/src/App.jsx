
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './component/User/Login'
import { Register } from './component/User/Register'
import { Contact } from './component/Home/Contact'
import { Footer } from './component/Footer'

function App() {
  

  return (
    <>
        <BrowserRouter>
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
