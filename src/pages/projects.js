import React from 'react'
import { motion } from "framer-motion"


function Projects() {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      Projects
    </motion.div>
  )
}

export default Projects