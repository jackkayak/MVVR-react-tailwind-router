import React, {useState} from 'react'
import Logo from '../assets/logowhite.png'
import {Link} from 'react-router-dom'
import ReqButton from './ReqButton'
import {HiMenu, HiMenuAlt3 } from 'react-icons/hi'

const NavBar = () => {
  // mobile nav and exiting nav
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

 

 

  return (
    <div className='w-full h-[90px] bg-black bg-opacity-70 bg-clip-padding blur-backdrop-filter shadow-sm fixed' >
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>

            <div>
                <img src={Logo} style={{width: '50px'}} alt='logo' />
            </div>

            
                <ul className='hidden md:flex text-white text-xl font-medium items-center justify-center'>
                        <li className='hover:text-[#D90429]'><Link to='/'>Home</Link></li>
                        <li className='hover:text-[#D90429]'><Link to='/fleet'>Fleet</Link></li>
                        <li className='hover:text-[#D90429]'><Link to='/contact'>Contact</Link></li>
                </ul>
           
                <div className='hidden md:flex'>
                <ReqButton />
                </div>

                <div onClick={handleClick} className='md:hidden z-10 text-white'>
                  {!nav ? <HiMenu /> : <HiMenuAlt3 />}
                </div>

                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 bg-clip-padding blur-backdrop-filter  text-white flex flex-col justify-center items-center'}>
                  <li className='py-6 text-4xl'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='py-6 text-4xl'>
                    <Link to='/fleet'>Fleet</Link>
                  </li>
                  <li className='py-6 text-4xl'>
                    <Link to='/contact'>Contact</Link>
                  </li>
                </ul>
        </div>

    </div>
  )
}

export default NavBar