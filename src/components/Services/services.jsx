import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import Wave from "../../assets/voice wave.gif";

const Services = () => {
  const ServiceData = [
    {
      title: "HST",
      content: "300-150km",
      description: "Used for astronomical observations, capturing stunning images of the universe.",
      icon: <FaReact className="text-7xl" />,
      aosDelay: "300",
    },
    {
      title: "ISS",
      content: "500-1500km",
      description: "A habitable artificial satellite orbiting Earth that serves as a space environment research laboratory.",
      icon: <FaShuttleSpace className="text-7xl" />,
      aosDelay: "500",
    },
    {
      title: "GPS",
      content: "300-1500km",
      description: "Part of the Global Positioning System (GPS) used for navigation.",
      icon: <FaSpaceAwesome className="text-7xl" />,
      aosDelay: "700",
    }
  ];

  return (
    <div className='bg-black text-white py-10 relative overflow-hidden'>
      <div className="container mx-auto">
        <div className='min-h-[400px] relative z-10'>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ServiceData.map((data, index) => (
              <div
                key={index}
                className="min-h-[180px] flex flex-col justify-center items-center bg-sky-900/60 rounded-xl backdrop-blur-sm text-center py-8 px-3 w-full lg:w-[300px] mx-auto"
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
              >
                {data.icon}
                <h1 className="text-2xl font-bold mt-4">{data.title}</h1>
                <p className="mt-2">{data.content}</p>
                <p className="text-sm text-gray-400 mt-1">{data.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wave background under cards */}
        <img
          src={Wave}
          alt="wave"
          className='h-[200px] w-full object-cover mix-blend-screen absolute bottom-0 left-0 z-0'
        />
      </div>
    </div>
  );
};

export default Services;
