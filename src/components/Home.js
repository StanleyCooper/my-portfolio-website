import React from 'react'
import { hero } from '../data/data'

export default function Home() {
  return (
    <div className='header-container'>
      <div className='title'>
        <h1>Hello, I'm <span className='highlight'>{hero.name}</span></h1>
      </div>
      <div>
        <h2>{hero.title}</h2>
      </div>
    </div>
  )
}
