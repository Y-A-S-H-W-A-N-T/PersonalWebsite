import React from 'react'
import './stylesheet/about.css'

function About() {
  return (
    <div className='about'>
      <div className='intro_name'>
        <p className='name'>
          I'm <span>Yashwant</span>
        </p>
      </div>
      <div>
        <p className='det'>Student at Veltech University</p>
      </div>
      <div className='skill'>
        <p><span> Web </span> /<span> App </span>/<span> Game </span></p>
      </div>
    </div>
  )
}

export default About