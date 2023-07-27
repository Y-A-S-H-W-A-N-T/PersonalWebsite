import React from 'react'
import { motion } from "framer-motion"


function Projects() {
  return (
    <motion.div
    initial={{ y: -300, opacity: 0, transition: '1000ms'}}
    animate={{ y: 0, opacity: 1, transition: '1000ms' }}
    exit={{ y: 300,  opacity: 0, transition: '1000ms' }}
    >
      Projects
    </motion.div>
  )
}

export default Projects