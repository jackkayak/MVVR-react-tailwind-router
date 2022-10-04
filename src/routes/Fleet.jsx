import React from 'react'
import HeroStill from '../components/HeroStill'
import NavBar from '../components/NavBar'
import Models from '../components/Models'

const Fleet = () => {
  return (
    <div>
        <NavBar />
        <HeroStill heading='Our Fleet' text='Find the perfect car for your occasion.'/>
        <Models />  
    </div>
  )
}

export default Fleet