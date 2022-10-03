import React, { useState } from 'react'
import Modal from './Modal'

const ReqButton = () => {

const [openModal, setOpenModal] =useState(false)

  return (
    <div>
    <div className='hidden md:flex text-xl text-white font-medium'>
                    <button onClick={() => {
                        setOpenModal(true);
                    }} 
                    
                    className='bg-[#D90429] hover:bg-red-700 py-2 px-3 rounded-lg'>Request Ride</button>
                    
                </div>
               {openModal && <Modal closeModal={setOpenModal} />}
                </div>
  )
}

export default ReqButton