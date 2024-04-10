import React from 'react'
import '../stylesheet/about.css'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import Github from '../stylesheet/logos/github.png'
import Sketchfab from '../stylesheet/logos/sketchfab.png'
import Hackerrank from '../stylesheet/logos/hackerrank.png'


function About() {
  return (
    <motion.div className='about'
    initial={{ y: -300, opacity: 0, transition: '1000ms'}}
    animate={{ y: 0, opacity: 1, transition: '1000ms' }}
    exit={{ y: 300,  opacity: 0, transition: '1000ms' }}
    >
      <div className='intro_name'>
        <p className='name'>
          I'm <span className='yashwant'>Yashwant.</span>
        </p>
      </div>
      <div>
        <p className='det'>Student and a self taught programmer.</p>
      </div>
      <div className='skill'>
        <p><span> Web </span> /<span> Android & iOS Apps</span>/<span> 3D Modeling </span></p>
      </div>
      <div  className='logos'>
        <Link to='https://github.com/Y-A-S-H-W-A-N-T' target='_blank' className='logo github'><img src={Github} alt='github'/></Link>
        <Link to='https://sketchfab.com/Y_ashwant' target='_blank' className='logo codecheff'><img src={Sketchfab} alt='codecheff'/></Link>
        <Link to='https://www.hackerrank.com/_YASHWANT_?hr_r=1' target='_blank' className='logo hackerrank'><img src={Hackerrank} alt='hackerrank'/></Link>
      </div>
    </motion.div>
  )
}

export default About