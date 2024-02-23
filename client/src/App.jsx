import React from 'react'
import Navbar from './Components/Nav'
import Awareness from './Pages/Awareness'
import Complaints from './Pages/Complaints'
import Home from './Pages/Home'
import News from './Pages/News'
import Signin from './Pages/Signin'
import MyFooter from './Components/Footer'
import Signup from './Pages/signup';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/awareness' element={<Awareness />} />
        <Route path='/complaints' element={<Complaints />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
      <MyFooter />
    </Router>
  )
}
