import React from 'react'
import icon from '../../assets/solar-icon.png'
import groupImg from '../../assets/about-group-img.png'

const features = [
  { icon: <img src={icon} alt="Solar Icon" className="w-5 h-5" />, text: 'End-to-End Solutions' },
  { icon: <img src={icon} alt="Solar Icon" className="w-5 h-5" />, text: 'Expert Engineering Team' },
  { icon: <img src={icon} alt="Solar Icon" className="w-5 h-5" />, text: 'Custom Design Approach' },
  { icon: <img src={icon} alt="Solar Icon" className="w-5 h-5" />, text: 'Long-Term Savings' },
]

const About = () => {
  return (
    <div id='about' className="flex flex-col lg:flex-row justify-between items-center gap-8 px-6 lg:px-20 py-12 w-full">
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-6">
        <h6 className="text-[#0A9642] text-lg font-bold">About Us</h6>
        <h2 className="text-3xl font-bold text-[#101828] leading-snug">
          Powering a Sustainable Future, One Rooftop at a Time
        </h2>
        <p className="text-[#475467] text-sm leading-relaxed">
          At EWIG, we believe in a future powered by clean, renewable energy.
          As a trusted provider of rooftop solar solutions, our mission is to make solar energy accessible, affordable,
          and reliable for homes, businesses, and industries across the region. We specialize in end-to-end solar services —
          from consultation and design to installation and maintenance — ensuring a hassle-free transition to solar for our
          customers. With a strong focus on quality, innovation, and customer satisfaction, we tailor every solution to meet
          unique energy needs and roof spaces.
        </p>
        <ul className="space-y-3">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-sm text-[#101828]">
              {item.icon}
              <span className='text-[#101828] text-lg font-bold'>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Group Image Section */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          src={groupImg}
          alt="Group"
          className="w-full max-w-[500px] h-auto object-contain"
        />
      </div>
    </div>
  )
}

export default About
