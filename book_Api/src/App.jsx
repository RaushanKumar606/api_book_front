


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './component/User/Login'
import { Register } from './component/User/Register'
import { Contact } from './component/Home/Contact'
import { Footer } from './component/Footer'
import { NavBar } from './component/Navbar/Navbar'
import { Book } from './component/Books/Book';
import { Author } from './component/Authors/Author';
import { Subject } from './component/Subject/Subject';
import { Home } from './component/Home/Home';
import { CreateBook } from './component/Books/CreateBook';
import { BookDetails } from './component/Books/BookDetails'
import { BooksQuery } from './component/Books/BooksQuery'
function App() {
  

  return (
    <>
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<Book/>} />
        <Route path="/query" element={<BooksQuery />} />
        <Route path="/authors" element={<Author />} />
        <Route path="/subjects" element={<Subject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create" element={<CreateBook />} />
        <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
        <Footer/>
        </BrowserRouter>

    </>
  )
}

export default App
