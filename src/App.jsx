import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Inquire from './pages/Inquire'
import About from './pages/About'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/inquire" element={<Inquire />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App