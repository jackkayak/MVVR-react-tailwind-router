import React from 'react'
import About from '../components/About.jsx'
import Details from '../components/Details.jsx'
import Hero from '../components/Hero.jsx'
import NavBar from '../components/NavBar.jsx'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <About />
        <Details />
        
    </div>
  )
}

export default Home