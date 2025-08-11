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
            </div>
        </div>
    </div>
  )
}

export default Banner