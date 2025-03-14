import { useState } from 'react'
import Home from './pages/Home'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Auction from './pages/Auction'
import Login from './pages/Login'
import MyBids from './pages/MyBids'
import Register from './pages/Register'
import Nopage from './pages/Nopage'
import Terms from './pages/Terms'
import Profile from './pages/Profile'
import SellerDashboard from './pages/SellerDashboard'
import AdminDashboard from './pages/AdminDashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="auction" element={<Auction/>} />
          <Route path="terms" element={<Terms/>} />
          <Route path="my-bids" element={<MyBids/>} />
          <Route path="login" element={<Login/>} /> 
          <Route path="profile" element={<Profile/>} />
          <Route path="register" element={<Register/>} />
          <Route path="*" element={<Nopage/>} />
          <Route path="seller" element={<SellerDashboard/>} />
          <Route path="admin" element={<AdminDashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>      
  )
}

export default App

