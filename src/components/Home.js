import React from 'react'
import { hero } from '../data/data'
import { useHistory } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {

  let history = useHistory();

  function clickHandler() {
    history.push('/clicked');
  }

  return (
    <div className='container'>
      <div className='title'>
        <h1>Hello, I'm <span className='highlight'>{hero.name}</span></h1>
      </div>
      <div>
        <h2>{hero.title}</h2>
      </div>
      <div className="contact-buttons">
        <button className='btn' onClick={() => clickHandler()}>
            Click me!
        </button>
        <a className='link'><GitHubIcon fontSize="large" /></a>
        <a className='link'><LinkedInIcon fontSize="large"/></a>
      </div>
    </div>
  )
}
