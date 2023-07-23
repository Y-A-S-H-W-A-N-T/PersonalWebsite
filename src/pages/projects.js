import React from 'react'
import { motion } from "framer-motion"


function Projects() {
  return (
    <motion.div
    initial={{ x: 300, y: 300, opacity: 0, transition: '1000ms'}}
    animate={{ x: 0, y: 0, opacity: 1, transition: '1000ms' }}
    exit={{ x: -300, y: 300,  opacity: 0, transition: '1000ms' }}
    >
      Projects
    </motion.div>
  )
}

export default Projects