import React from 'react'
import ProjectList from './ProjectList'
import '../App.css';

export default function Projects() {
  return (
    <div>
        <div className='container'>
        <h2 className="highlight">Projects</h2>
          <ProjectList />
        </div>
    </div>
  )
}
