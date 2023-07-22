import React from 'react'
import './stylesheet/about.css'
import { motion } from "framer-motion"


function About() {
  return (
    <motion.div className='about'
      initial={{ x: 300, y: 300, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{ x: -300, y: 300,  opacity: 0 }}
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
    </motion.div>
  )
}

export default About