import React from 'react'
import { motion } from "framer-motion"


function Resume() {
  return (
    <motion.div
      initial={{ x: 300, y: 300, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{ x: -300, y: 300,  opacity: 0 }}
    >
      Resume
    </motion.div>
  )
}

export default Resume