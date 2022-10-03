import React from 'react'

function Modal({closeModal}) {
  return (
    <div className='flex w-[100vw] h-[100vh] r- bg-hero-gradient absolute justify-center items-center'>
        <div>
            <button onClick={() => closeModal(false)} className='text-white'> X </button>
            <div>
                <h1>Order your vehicle</h1>
            </div>
            <div>
                <p>order order order order</p>
            </div>
            <div>
                <button onClick={() => closeModal(false)}>Cancel</button>
                <button>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Modal