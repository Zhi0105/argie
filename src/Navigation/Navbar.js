import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar_menu flex gap-x-4 text-sm md:hidden sm:hidden'>
    <Link to="/" className='hover:text-[#F69E90]'>
        Home
    </Link>
    <Link to="/about" className='hover:text-[#F69E90]'>
        About
    </Link>
    <Link to="/skills" className='hover:text-[#F69E90]'>
        Skills
    </Link>
    <Link to="/projects" className='hover:text-[#F69E90]'>
        Projects
    </Link>
    <Link to="/contacts" className='hover:text-[#F69E90]'>
        Contact
    </Link>
  </div>  
  )
}
