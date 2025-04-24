import React from 'react';
import GroupImg from '../../assets/solar-rooftop.png';

const SolarRooftop = () => {
  return (
<div className='px-4 sm:px-6 md:px-10 lg:px-20 py-10 space-y-20'>
  <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
    {/* Image Section */}
    <div className='relative w-full lg:w-5/6 flex justify-center'>
      {/* Green Background Box with controlled visibility */}
      <div className='w-full h-64 sm:h-80 md:h-[450px] lg:h-[600px] relative'>
        {/* Green on the left side with half the height */}
        <div className='absolute bottom-0 left-0 h-1/2 w-1/2 bg-[#0A9642] rounded-3xl z-0' />
        
        {/* Green at the bottom */}
        <div className='absolute bottom-0 left-0 h-1/2 w-full bg-[#0A9642] rounded-3xl z-0' />
        
        {/* Image Card with more padding */}
        <div className="absolute bottom-4 left-4 right-0 py-6 top-0 bg-white rounded-3xl shadow-2xl z-10 overflow-hidden">
          <img
            src={GroupImg}
            alt="about"
            className='w-full h-full object-contain rounded-lg'
          />
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default SolarRooftop;
