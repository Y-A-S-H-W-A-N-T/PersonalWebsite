import React from 'react'
import { motion } from "framer-motion"
import '../stylesheet/resume.css'
import PDF from '../stylesheet/CV.pdf'


function Resume() {
  return (
    <motion.div
    initial={{ y: -300, opacity: 0, transition: '1000ms'}}
    animate={{ y: 0, opacity: 1, transition: '1000ms' }}
    exit={{ y: 300,  opacity: 0, transition: '1000ms' }}
    >
      <div className='resume'>
        <a className='pdf' href={PDF} target='_blank' rel="noreferrer">
          <h1>Davuluri <span>Yashwant</span> Rao</h1>
          <p>Intern</p>
        </a>
      </div>
    </motion.div>
  )
}

export default Resume