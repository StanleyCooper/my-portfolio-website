import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul className='nav-list'>
            <li className='nav-item'>
              <Link className='link' to="/">Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='link' to="/projects">Projects</Link>
            </li>
            <li className='nav-item'>
              <Link className='link' to="/Contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}
