import React from 'react'
import { projects } from '../data/data'
import '../App.css';

export default function ProjectList() {

    const projectList = projects.map((project) =>
        <li className='card'>
            <img src={project.image} alt={project.name}/>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <h4>{project.technology}</h4>
        </li>
    );

    return (<ul className='card-list'>{projectList}</ul>)
}
