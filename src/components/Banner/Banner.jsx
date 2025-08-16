import React from 'react';
import sateliteImg from "../../assets/satellite.jpeg";

const Banner = () => {
  return (
    <div className="bg-black text-white py-8 relative z-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          
          {/* Image */}
          <div className="flex justify-center">
            <img
              data-aos="zoom-in"
              src={sateliteImg}
              alt="Satellite"
              className="w-full sm:w-[80%] h-auto rounded-lg shadow-lg object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-4 xl:pr-20 p-4 border-r-2 border-b-2 border-sky-800">
            <p
              data-aos="fade-up"
              className="text-sky-800 uppercase text-lg font-semibold tracking-widest"
            >
              Our Mission
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="uppercase text-4xl sm:text-5xl font-bold"
            >
              Rapidcast
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-gray-300 leading-relaxed"
            >
              A satellite is a human-made object in orbit, built for communication, navigation, 
              weather tracking, and scientific research. Operating in low, medium, or geostationary 
              orbits, satellites connect the world, guide navigation, and monitor Earth’s climate. 
              Powered mainly by solar energy, they work silently above, shaping modern life from 
              hundreds of kilometers away.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="px-6 py-2 border-2 border-sky-800 rounded-md hover:bg-sky-800 hover:text-white transition"
            >
              Learn More
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
