import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { projects } from '../data/data'

export default function ProjectList() {

    const projectList = projects.map((project) =>
    <div className='project-card'>
        <Card sx={{ maxWidth: 300, height: 250 }}> 
                <CardMedia
                    component="img"
                    height="100"
                    image={project.image}
                    alt={project.name}
                />
                <CardContent>
                    <h4>{project.name}</h4>
                    <h6>{project.description}</h6>
                </CardContent>
        </Card>
    </div>
    );

    return (<ul>{projectList}</ul>)
}
