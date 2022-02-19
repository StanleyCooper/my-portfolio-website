import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className = 'flex justify-center items-center sticky top-0 h-14 bg-white text-black relative shadow-sm font-mono' 
    role='navigation'>
        <div className='pr-8.md:block text'>
            <Link className='p-8 hover:text-slate-400' to='/'>Home</Link>
            <Link className='p-8 hover:text-slate-400' to='/Projects'>Projects</Link>
            <Link className='p-8 hover:text-slate-400' to='/Resume'>Resume</Link>
            <Link className='p-8 hover:text-slate-400' to='/Contact'>Contact</Link>
        </div>
    </nav>
  )
}
