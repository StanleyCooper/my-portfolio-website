import React from 'react'
import { hero } from '../data/data'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
  return (
    <div className='container'>
      <div className='title'>
        <h1>Hello, I'm <span className='highlight'>{hero.name}</span></h1>
      </div>
      <div>
        <h2>{hero.title}</h2>
      </div>
      <div className="contact-buttons">
        <a className='link' href='https://github.com/StanleyCooper'><GitHubIcon fontSize="large" /></a>
        <a className='link'><LinkedInIcon fontSize="large"/></a>
        <a className='link'><EmailIcon fontSize="large"/></a>
      </div>
    </div>
  )
}
