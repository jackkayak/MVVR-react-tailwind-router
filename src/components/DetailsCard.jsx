import React from 'react'

const DetailsCard = (props) => {
  return (
    <div className='flex flex-col bg-hero-gradient text-left rounded-2xl py-12 px-8'>
        <div>
            <div className='bg-white text-gray-800 inline-flex p-2 rounded-full'>
                {props.icon}
            </div>
            <h3 className='text-xl font-bold py-4'>{props.heading}</h3>
            <p>
            {props.text}
            </p>
        </div>                
    </div>
  )
}

export default DetailsCard