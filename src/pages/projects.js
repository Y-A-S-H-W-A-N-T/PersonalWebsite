import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import './stylesheet/projects.css'
import ShopCard from './stylesheet/logos/shopping.jpeg'
import BlenderCard from './stylesheet/logos/blender.jpeg'
import RentsCard from './stylesheet/logos/rents.jpeg'
import CollegeCard from './stylesheet/logos/college.jpeg'
import TodoCard from './stylesheet/logos/todo.jpeg'

function Projects() {
  return (
    <motion.div
    initial={{ y: -300, opacity: 0, transition: '1000ms'}}
    animate={{ y: 0, opacity: 1, transition: '1000ms' }}
    exit={{ y: 300,  opacity: 0, transition: '1000ms' }}
    >
      <div className='card-box'>
        <div className='shopping-website-card card'>
          <Link to="https://www.youtube.com/shorts/XOhucJMZz9Q">
            <img src={ShopCard} alt='shopping website'/>
          </Link>
        </div>
        <div className='house-rental-card card'>
          <Link to="https://www.youtube.com/shorts/XOhucJMZz9Q">
            <img src={RentsCard} alt='shopping website'/>
          </Link>
        </div>
        <div className='blender-card card'>
          <Link to="https://www.youtube.com/shorts/XOhucJMZz9Q">
            <img src={BlenderCard} alt='shopping website'/>
          </Link>
        </div>
        <div className='to-do-card card'>
          <Link to="https://www.youtube.com/shorts/XOhucJMZz9Q">
            <img src={TodoCard} alt='shopping website'/>
          </Link>
        </div>
        <div className='college-website-card card'>
          <Link to="https://www.youtube.com/shorts/XOhucJMZz9Q">
            <img src={CollegeCard} alt='shopping website'/>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects