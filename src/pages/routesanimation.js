import React from 'react'
import Contact from './contact'
import Resume from './resume'
import About from './about'
import Projects from './projects'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"


function Routesanimation() {

    const location = useLocation()

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<About/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/resume' element={<Resume/>}/>
          <Route exact path='/projects' element={<Projects/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default Routesanimation