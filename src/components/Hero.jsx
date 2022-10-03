import React from 'react'
import HeroCar from '../assets/HeroCar.mp4'
import ReqButton from './ReqButton'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
  <div className='w-full h-screen'>
        <video className='object-cover h-full absolute -z-10'
        src={HeroCar} autoPlay loop muted />
        <div className='object-cover absolute bg-gray-900 -z-9'></div>
        
        
            <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center text-center h-[90%]'>
              <div className='px-12'>
            <h1 className='text-white font-extrabold italic text-5xl sm:text-6xl  uppercase'>Travel with MVVR</h1>
            <p className='text-gray-100 font-medium text-xl sm:text-3xl pt-8'>Ditch the standard methods of arrival. Arrive at your destination with confidence and prestige. </p>
              <div className='flex justify-center mt-12 '>
                <ReqButton />
                <button className='border-2 ml-4 border-white text-xl hover:border-[#D90429] hover:bg-[#D90429]  py-2 px-3 rounded-lg text-white'><Link to='/fleet'>View Our Fleet</Link></button>
            </div>
            </div>
            </div>
        
        
        

  </div>
  )
}

export default Hero