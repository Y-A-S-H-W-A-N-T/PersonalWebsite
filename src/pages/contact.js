import React from 'react'
import { Link } from 'react-router-dom'
import './stylesheet/contact.css'
import { motion } from "framer-motion"


function contact() {
  return (
    <motion.div className='github'
    initial={{ x: 300, y: 300, opacity: 0, transition: '1000ms'}}
    animate={{ x: 0, y: 0, opacity: 1, transition: '1000ms' }}
    exit={{ x: -300, y: 300,  opacity: 0, transition: '1000ms' }}
    >
      <Link to='https://github.com/Y-A-S-H-W-A-N-T' className='github'><img src='./images/github.png' alt='github'/></Link>
    </motion.div>
  )
}

export default contact