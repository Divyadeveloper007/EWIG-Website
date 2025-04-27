import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { projects } from "./ProjectData";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [fade, setFade] = useState(true);

  // Function to handle previous arrow click
  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setFade(true); 
    }, 300); 
  };

  // Function to handle next arrow click
  const handleNext = () => {
    setFade(false); 
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1)); 
      setFade(true); 
    }, 300);
  };

  const project = projects[currentIndex]; 

  return (
    <div id="projects" className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-3 mt-5">
      {/* Heading */}
      <div className="text-center mb-10">
        <h6 className="text-[#0A9642] text-lg font-bold">Our Projects</h6>
        <h2 className="text-3xl pb-5 font-bold text-[#101828] leading-snug">
          Showcasing Our Commitment to a Greener Tomorrow
        </h2>
      </div>

      <div className="relative w-full max-w-5xl pb-12 overflow-hidden">
        {/* Mobile layout container */}
        <div className="flex flex-col md:flex-row items-center md:ml-10 relative">
          {/* Image first in mobile */}
          <div className="w-full md:w-1/2">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-[300px] object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

         {/* Card second in mobile */}
<div className="w-full lg:absolute lg:top-[20%] lg:left-[45%] lg:w-[50%] z-10">
  <div className="relative before:content-[''] before:absolute before:-right-3 before:-bottom-3 before:bg-[#0A9642] before:w-full before:h-full before:rounded-lg before:z-[-1] before:rounded-tr-none before:rounded-br-lg before:rounded-tl-lg">
    <div className={`p-6 shadow-xl rounded-lg bg-white leading-loose transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="mb-2 text-[#0A9642] text-lg font-bold flex items-center gap-2">
        <MapPin className="text-[#0A9642] w-5 h-5" />
        {project.title}
      </h2>
      <p className="text-gray-700 font-bold text-sm mb-4 leading-relaxed">{project.description}</p>
      <h2 className="text-2xl font-bold text-[#101828] leading-snug">{project.summary}</h2>
    </div>
  </div>
</div>

</div>
        {/* Navigation arrows: show bottom on mobile, top-right on desktop */}
        <div className="flex justify-center mt-6 md:absolute md:top-[2%] md:right-44 md:transform md:-translate-y-1/2 md:z-10 gap-4">
        <button
            className={`bg-[#0A9642] p-1 rounded-full shadow-md hover:shadow-lg ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="text-white font-bold" />
          </button>

          <span className="text-black font-bold text-xl md:text-2xl">
            {currentIndex + 1} / {projects.length}
          </span>

          <button
            className={`bg-[#0A9642] p-1 rounded-full shadow-md hover:shadow-lg ${currentIndex === projects.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleNext}
            disabled={currentIndex === projects.length - 1}
          >
            <ChevronRight className="text-white font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
