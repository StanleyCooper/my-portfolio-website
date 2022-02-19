import React from 'react'
import ProjectList from './ProjectList'

export default function Projects() {
  return (
    <div className='container'>
        <h2 className="highlight">Projects</h2>
        <div className="project-list">
            <ProjectList />
        </div>
    </div>
  )
}
