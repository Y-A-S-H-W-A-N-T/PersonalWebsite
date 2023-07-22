import React from 'react'
import { Link } from 'react-router-dom'
import './stylesheet/contact.css'
import { motion } from "framer-motion"


function contact() {
  return (
    <motion.div className='github'
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <Link to='https://github.com/Y-A-S-H-W-A-N-T'><img src='./images/github.png' alt='github'/></Link>
    </motion.div>
  )
}

export default contact