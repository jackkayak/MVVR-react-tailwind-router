import React from 'react'
import HeroCar from '../assets/HeroCar.mp4'
import ReqButton from './ReqButton'

const Hero = () => {
  return (
  <div className='w-full h-screen'>
        <video className='object-cover h-full absolute -z-10'
        src={HeroCar} autoPlay loop muted />
        <div className='object-cover absolute bg-gray-900 -z-9'></div>
        
        
            <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center text-center h-[90%]'>
              <div className='px-12'>
            <h1 className='text-white font-extrabold italic text-4xl sm:text-6xl  uppercase'>Travel with MVVR</h1>
            <p className='text-gray-100 font-medium text-xl sm:text-3xl pt-8'>Ditch the standard methods of arrival. Arrive at your destination with confidence and prestige. </p>
              <div className='flex justify-center '>
                <ReqButton />
                <button className='border-2 border-white text-xl hover:border-[#D90429] hover:bg-[#D90429] mt-12 py-2 px-3 rounded-lg text-white'>View Our Fleet</button>
            </div>
            </div>
            </div>
        
        
        

  </div>
  )
}

export default Hero