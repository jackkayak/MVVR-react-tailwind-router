import React from 'react'
import Bentley from '../assets/interior.jpg'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className='w-full bg-black text-white justify-center'>
        <div className='max-w-[1240px] mx-auto px-4 py-12 md:flex justify-center'>
            <div className=' text-center md:text-left justify-center'>
                <h1 className='py-1 text-4xl font-medium italic '>Pick from a Range of Cars</h1>
                <p className='py-12 text-xl text-gray-300'>All of our fleet is completely sanatized after ever rider. Cars are cleaned daily and are stocked with complimentary snacks and beverages.</p>
                <button className='bg-hero-gradient py-3 px-8 rounded-md hvr-shadow tracking-wider'><Link to='/fleet'>View Fleet</Link></button>
            </div>
            <div className='pt-8 '>
                <img className='hidden sm:flex md:ml-8 max-w-[400px]' src={Bentley} alt="interior of Bentley" />
            </div>
        </div>
    </div>
  )
}

export default About