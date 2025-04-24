import React from 'react'
import Slider from './Slider'
import About from '../about/About'
import WhyEMIG from '../whyEWIG/WhyEMIG'
import ServicesCards from '../services/ServicesCards'
import SolarRooftop from './SolarRooftop'
import OurTeam from '../teams/OurTeam'
import Contact from '../contact/Contact'
import Projects from '../projects/projects'

const Home = () => {
  return (
    <div id='home'>
        <Slider/>
        <About/>
        <WhyEMIG/>
        <ServicesCards/>
        <SolarRooftop/>
        <Projects/>
        <OurTeam/>
        <Contact/>
    </div>
  )
}

export default Home