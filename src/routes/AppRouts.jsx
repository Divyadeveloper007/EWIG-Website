import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../pages/services/Services'
import About from '../pages/about/About'

const AppRouts = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default AppRouts