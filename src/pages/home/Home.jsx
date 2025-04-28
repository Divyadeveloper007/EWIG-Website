import React, { useEffect } from 'react'
import Slider from './Slider'
import About from '../about/About'
import WhyEMIG from '../whyEWIG/WhyEMIG'
import ServicesCards from '../services/ServicesCards'
import SolarRooftop from './SolarRooftop'
import OurTeam from '../teams/OurTeam'
import Contact from '../contact/Contact'
import Projects from '../projects/projects'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", ""); // eg: #about => about
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });

        // Optional - Add green border highlight
        element.classList.add("ring", "ring-green-400", "ring-offset-2");
        setTimeout(() => {
          element.classList.remove("ring", "ring-green-400", "ring-offset-2");
        }, 2000);
      }
    }
  }, [location]);

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