import React from 'react'
import HeroStill from '../components/HeroStill'
import NavBar from '../components/NavBar'

const Contact = () => {
  return (
    <div>
        <NavBar />
        <HeroStill heading='Have a question?' text='Take a look at our Frequently Asked Questions below, if that does not solve your problem feel free to send our team a message!' />
    </div>
  )
}

export default Contact