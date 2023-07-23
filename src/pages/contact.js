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
      
    </motion.div>
  )
}

export default contact