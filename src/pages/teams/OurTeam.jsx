import React, { useState } from 'react';
import img1 from '../../assets/team1.png';
import img2 from '../../assets/team2.png';

const teamMember = [
    { img: img1, name: "Sivasubramoniam M", position: "Director" },
    { img: img2, name: "Venkateswaran G", position: "Director" },
    { img: img1, name: "Jayabalan", position: "Senior Manager - Business Development" },
    { img: img2, name: "Haribabu", position: "Executive - Marketing" }
];

const OurTeam = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="px-4 md:px-10 lg:px-20 py-10 space-y-10">
            {/* Heading */}
            <div className='flex flex-col justify-center items-center text-center pb-8'>
                <h6 className="text-[#0A9642] text-lg font-bold">Our Core Team</h6>
                <h2 className="text-3xl font-bold text-[#101828] leading-snug">Meet the Minds Behind the Mission</h2>
            </div>

            {/* Mobile View Carousel */}
            <div className="block lg:hidden">
                <div className="flex overflow-hidden">
                    {teamMember.map((member, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-full transform transition-all duration-500 ${index === currentIndex ? "block" : "hidden"
                                }`}
                        >
                            <div className="flex flex-col items-center justify-center space-y-2 text-center">
                            <img
                            src={member.img}
                            alt={member.name}
                            className="w-32 h-32 object-cover rounded-full hover:shadow-lg mx-auto transition-transform duration-700 ease-in-out hover:animate-rotate-x"
                        />

                                <h4 className="text-lg font-medium text-[#052049]">{member.name}</h4>
                                <p className="text-md text-[#475467]">{member.position}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center space-x-2 mt-4">
                    {teamMember.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-[#0A9642]" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Large Screen Grid View */}
            <div className="hidden lg:grid grid-cols-4 gap-8">
                {teamMember.map((member, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center space-y-2 text-center"
                    >
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-32 h-32 object-cover rounded-full hover:shadow-lg mx-auto transition-transform duration-700 ease-in-out hover:animate-rotate-x"
                        />


                        <h4 className="text-lg font-medium text-[#052049]">{member.name}</h4>
                        <p className="text-md text-[#475467]">{member.position}</p>
                    </div>
                ))}
            </div>

            {/* Carousel Indicators for large screen too (optional) */}
            <div className="hidden lg:flex justify-center space-x-2 mt-4">
                {teamMember.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-[#0A9642]" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurTeam;
