import React, { useEffect } from 'react'
import ServiceSlider from './ServiceSlider'
import ServicesDetailes from './ServicesDetailes'
import { useLocation } from 'react-router-dom';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
        <ServiceSlider/>
        <ServicesDetailes/>
    </div>
  )
}

export default Services