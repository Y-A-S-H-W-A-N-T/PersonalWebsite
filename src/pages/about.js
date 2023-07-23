import React from 'react'
import './stylesheet/about.css'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'


function About() {
  return (
    <motion.div className='about'
    initial={{ x: 300, y: 300, opacity: 0, transition: '1000ms'}}
    animate={{ x: 0, y: 0, opacity: 1, transition: '1000ms' }}
    exit={{ x: -300, y: 300,  opacity: 0, transition: '1000ms' }}
    >
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
      <div  className='github'>
        <Link to='https://github.com/Y-A-S-H-W-A-N-T'><img src='./images/github.png' alt='github'/></Link>
        <Link to='https://github.com/Y-A-S-H-W-A-N-T'><img src='./images/github.png' alt='github'/></Link>
        <Link to='https://github.com/Y-A-S-H-W-A-N-T'><img src='./images/github.png' alt='github'/></Link>
      </div>
    </motion.div>
  )
}

export default About