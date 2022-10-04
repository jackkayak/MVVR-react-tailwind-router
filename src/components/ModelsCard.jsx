import React from 'react'

const ModelsCard = ({image, make}) => {
  return (
    <div className='card-style'>
        <img className='card-image' src={image} alt="/" />
        <p className='px-2 py-2 font-semibold'>{make}</p>
    </div>
  )
}

export default ModelsCard