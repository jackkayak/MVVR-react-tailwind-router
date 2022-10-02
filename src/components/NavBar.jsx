import React from 'react'
import Logo from '../assets/logowhite.png'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='w-full h-[90px] bg-transparent fixed'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>

            <div>
                <img src={Logo} style={{width: '50px'}} alt='logo' />
            </div>

            <div className='hidden md:flex'>
                <ul className='flex text-white text-xl font-medium items-center justify-center'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/fleet'>Fleet</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                </ul>
                </div>
                
                <div className='hidden md:flex text-xl text-white font-medium'>
                    <button className='bg-[#D90429] py-2 px-3 rounded-lg'>Request Ride</button>
                </div>
            
        </div>

    </div>
  )
}

export default NavBar