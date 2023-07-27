import React from 'react'
import './stylesheet/contact.css'
import { motion } from "framer-motion"


function contact() {
  return (
    <motion.div className='github'
    initial={{ y: -300, opacity: 0, transition: '1000ms'}}
    animate={{ y: 0, opacity: 1, transition: '1000ms' }}
    exit={{ y: 300,  opacity: 0, transition: '1000ms' }}
    >
      
    </motion.div>
  )
}

export default contact