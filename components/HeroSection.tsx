import React from 'react'

const HeroSection = () => {
  return (
    <div className=' px-20'>
        <div className='flex justify-between items-center gap-20 h-[100vh]'>
           <div className="text flex  flex-col gap-10">
            <h1 className='text-7xl font-semibold'> <span className='text-[#B1B1B1]'> UI/UX Design </span> & <br /> Development Services.</h1>
            <p className='capitalize font-semibold text-[#A5A1A9]'>graphic design, UI/UX design,  poster design, logo design, mobile app <br /> design, mobile app development, web development, </p>

            <div className='flex gap-10'>
            <button className='rounded-full rounded-bl-none bg-sky-500 py-2 px-6 text-white tracking-wide'>Contact Us</button>
            <button className='rounded-full rounded-br-none bg-gray-700 py-2 px-6 text-white tracking-wide'>Send Message </button>
           
            </div>
           </div>
        </div>

      
    </div>
  )
}

export default HeroSection
