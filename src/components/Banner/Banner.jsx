import React from 'react'
import sateliteImg from "../../assets/satellite.jpeg"
const Banner = () => {
  return (
    <div className='bg-black text-white pb-'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
                <div>
                    <img src={sateliteImg} alt="" />
                </div>
                <div>
                    <p>Our Mission</p>
                    <h1>Rapidcast</h1>
                    <p>A satellite is a human-made object in orbit, built for communication, navigation, weather tracking, and scientific research. Operating in low, medium, or geostationary orbits, satellites connect the world, guide navigation, and monitor Earth’s climate. Powered mainly by solar energy, they work silently above, shaping modern life from hundreds of kilometers away.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner