import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className = 'flex justify-center items-center h-14 bg-white text-black relative shadow-sm font-mono' 
    role='navigation'>
        <div className='pr-8.md:block'>
            <Link className='p-8' to='/'>Home</Link>
            <Link className='p-8' to='/Projects'>Projects</Link>
            <Link className='p-8' to='/Resume'>Resume</Link>
            <Link className='p-8' to='/Contact'>Contact</Link>
        </div>
    </nav>
  )
}
