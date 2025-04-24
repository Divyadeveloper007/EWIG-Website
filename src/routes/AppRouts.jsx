import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../pages/services/Services'
import ProjectsPage from '../pages/projects/ProjectsPage'
import ContactPage from '../pages/contact/ContactPage'
import AboutPage from '../pages/about/AboutPage'
import WhyEMIGpage from '../pages/whyEWIG/WhyEMIGpage'

const AppRouts = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/why-ewig' element={<WhyEMIGpage/>}/>
            <Route path='/projects' element={<ProjectsPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default AppRouts