import React from 'react'
import Skills from '../components/Skills'
import { hero } from '../data/data'

export default function Home() {
  return (
    <div>
        <div className='py-12 bg-white h-auto flex flex-row flex-wrap justify-evenly'>
            <div class="mb-4">
                <img src="./photos/me.jpg" class="max-w-sm h-auto rounded-lg" alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <h3>Hello!</h3>
                <h1 className='font-black'>{hero.name}</h1>
                <h2>{hero.title}</h2>
                <h3>{hero.mission}</h3>
            </div>
        </div>
        <div className='bg-red-600'>
            <div>
                <h1>Skills</h1>
                <div>
                    <Skills />
                </div>
            </div>
        </div>
        <div>
            <h1>About me!</h1>
        </div>
        <div>
            <h1>Let's Get Coffee!</h1>
        </div>
    </div>
  )
}
