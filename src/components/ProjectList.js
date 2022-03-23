import React from 'react';
import { projects } from '../data/data';
import '../App.css';

export default function ProjectList() {

    const projectList = projects.map((project) =>
        <a href="https://github.com/StanleyCooper/estimating-app" className='card'>
            <li>
                <div className='card-content'>
                    <img src={project.image}/>
                    <h2>{project.name}</h2>
                </div>
            </li>
        </a>
    );

    return (<ul className='card-list'>{projectList}</ul>)
}
