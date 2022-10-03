import React from 'react'

function Modal({closeModal}) {
  return (
    <div className='fixed z-10 inset-x-20 top-20'>
    <div className='flex bg-hero-gradient py-12 px-12 absolute items-center text-white rounded-md'>
        <div>
            <div className='py-4'>
                <h1 className='text-2xl font-semibold'>Order your vehicle</h1>
            </div>
            <div className='py-8'>
                <p className='text-left py-1'>Enter Your Name</p>
                <input placeholder='John Smith' className='pl-3'></input>
                <p className='text-left py-1'>Enter Your Email</p>
                <input placeholder='MVVR@mvvr.io' className='pl-3'></input>
                <p className='text-left py-1'>Input City</p>
                <input placeholder='Seattle' className='pl-3'></input>
            </div>
            <div className=''>
                <button className='py-3 px-4 mx-4 hover:border-b-2 hover:border-[#D90429]' onClick={() => closeModal(false)}>Cancel</button>
                <button className='bg-[#D90429] hover:bg-red-700 py-2 px-3 rounded-lg'>Continue</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Modal