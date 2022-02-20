import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactMe() {
  return (
    <div className="container centered">
        <h2 className='highlight'>Contact Me!</h2>
        <div className="contact-buttons">
            <a className='link' href='https://github.com/StanleyCooper'><GitHubIcon fontSize="large" /></a>
            <a className='link'><LinkedInIcon fontSize="large"/></a>
            <a className='link'><EmailIcon fontSize="large"/></a>
        </div>
    </div>
  )
}
