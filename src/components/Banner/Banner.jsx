import React from 'react'
import sateliteImg from "../../assets/satellite.jpeg"
const Banner = () => {
  return (
    <div className='bg-black text-white pb-1 relative z-50'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
                <div>
                    <img data-aos="zoom-in" src={sateliteImg} alt="" className='w-full sm:w-[80%] mx-auto max-h-[350px] object-cover'  />

                </div>
                <div className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800'>
                    <p data-aos="fade-up"className='tetx-sky-800 uppercase text-5xl'>Our Mission</p>
                    <h1 data-aos="fade-up" 
                    data-aos-delay="300"
                    className='uppercase text-5xl'>Rapidcast</h1>
                    <p data-aos="fade-up" data-aos-delay="500">A satellite is a human-made object in orbit, built for communication, navigation, weather tracking, and scientific research. Operating in low, medium, or geostationary orbits, satellites connect the world, guide navigation, and monitor Earth’s climate. Powered mainly by solar energy, they work silently above, shaping modern life from hundreds of kilometers away.</p>
<button data-aos="fade-up" data-aos-delay="700" className='space-y-3 xl:pr-36 p-4 border-r-2 border-r-sky-800 border-b-sky-800'>
  Learn More
</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner