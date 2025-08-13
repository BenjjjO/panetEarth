import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white'>
        <section className='max-w-[1200px] mx-auto text-white'>
            <div className='grid md:grid-cols-3 py-5'>
                <div>
                    <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3'>Be ready to grow</h1>
                    <p>Get Exclusive <span className='font-bold'>Update</span>straight to your inbox. </p><br />
                    <div className='flex item-center h-10'>
                        <input type="text" className='py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2' placeholder='Email' />
                        <button>Send</button>
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div className='py-8 px-4'>
<h1 className='text-xl font-bold mb-3'>Quick Links</h1>
  <ul className='flex flex-col gap-3'>
    <li>
        <a href="#">Home</a>
    </li>
     <li>
        <a href="#">About</a>
    </li>
     <li>
        <a href="#">services</a>
    </li>
     <li>
        <a href="#">Login</a>
    </li>
  </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer