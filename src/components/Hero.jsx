import React from 'react'
import HeroCar from '../assets/HeroCar.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <video className='object-cover h-full absolute -z-10'
        src={HeroCar} autoPlay loop muted />

    </div>
  )
}

export default Hero