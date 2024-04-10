import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import '../stylesheet/projects.css'
import javascript from '../stylesheet/logos/javascript.png'
import cplusplus from '../stylesheet/logos/c++.png'
import python from '../stylesheet/logos/python.png'
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
          <div className='skills-used'>
              <img src={javascript} alt='javascript'/>
              <img src={cplusplus} alt='c++'/>
              <img src={python} alt='pyhton'/>
          </div>
            <div className='des'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id exercitationem, doloremque explicabo odit enim totam nemo 
              itaque earum assumenda tempora harum quibusdam deserunt modi dolor quos nisi pariatur? Quia, quibusdam!
              (PROJECT DESCRIPTION)(PROJECT DESCRIPTION)(PROJECT DESCRIPTION)(PROJECT DESCRIPTION)(PROJECT DESCRIPTION)
              (PROJECT DESCRIPTION)(PROJECT DESCRIPTION)(PROJECT DESCRIPTION)(PROJECT DESCRIPTION)(PROJECT DESCRIPTION)
            </div>
            <div className='proj-link'>
              <Link to=''>Click to check out project</Link>
            </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects