import React from 'react'
import DetailsCard from './DetailsCard'
import { IoSpeedometerOutline, IoPerson } from 'react-icons/io5'
import { GiQueenCrown } from 'react-icons/gi'





const Details = () => {
    return (
  <div className='w-full bg-black text-white text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-12 '>
  
          <div>
              <h1 className='py-1 text-4xl font-medium italic inline border-b-4 border-[#D90429]'>The Most Modern Option</h1>
              <p className='py-12 text-xl px-8 text-gray-300' >Ditch the minivans. Arrive feeling like a VIP, MVVR will take care of you from the moment you enter our vehicle till the moment you arrive to your destination.</p>
  
              <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 '>
                  
              <DetailsCard icon={<IoSpeedometerOutline size={40} />} 
              heading='Reliable and Quick' 
              text='Why wait on an unprofessional driver when you can arrive to your event with a highly-rated chaueffuer'/>
                  
              <DetailsCard icon={<GiQueenCrown size={40} />}
              heading='Luxurious Options'
              text='Sit back relax and enjoy complimentary beverages and snacks. MVVR is the airline standard in land transportation. Smooth and well-driven.' />
  
              <DetailsCard icon={<IoPerson size={40} />}
              heading='Single Occupant Transport'
              text='Arriving by yourself? Check out our more special options to break everyones necks (not literally...)' />
  
  
              </div>
          </div>
  
      </div>
  </div>
    )
  }
  
  export default Details