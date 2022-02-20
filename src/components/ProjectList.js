import React from 'react';
import { projects } from '../data/data';
import '../App.css';

export default function ProjectList() {

    const projectList = projects.map((project) =>
        <li className='card'>
            <img src={project.image} alt={project.name}/>
            <div className='card-content'>
                <h2>{project.name}</h2>
            </div>
        </li>
    );

    return (<ul className='card-list'>{projectList}</ul>)
}
