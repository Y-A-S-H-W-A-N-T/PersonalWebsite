import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import '../stylesheet/projects.css'
import ShopCard from '../stylesheet/logos/shopping.jpeg'
{/* ALSO ADD 3D MODELS */}
{/* ADD HOSTED WEB LINKS & MOBILE APPS & AND GITHUB LINKS */}

function Projects() {

  const selected = ({ isActive })=>{
    return{
      fontFamily: isActive? 'comics': 'comic_fill',
    }
}

  return (
    <motion.div
    initial={{ y: -300, opacity: 0, transition: '1000ms'}}
    animate={{ y: 0, opacity: 1, transition: '1000ms' }}
    exit={{ y: 300,  opacity: 0, transition: '1000ms' }}
    >
      <div className='proj'>
        <div class="proj-titles">
            <p>TRANSLATOR</p>
            <p>COGNIZANCE</p>
            <p>XCHANGE</p>
            <p>WELLING</p>
            <p>VR ESTATE</p>
        </div>
        <div className='proj-des'>
          
        </div>
      </div>
    </motion.div>
  )
}

export default Projects