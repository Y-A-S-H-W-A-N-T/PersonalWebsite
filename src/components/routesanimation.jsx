import React from 'react'
import Resume from './resume'
import About from './about'
import Projects from './projects'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Skills from './skills'
// import Footer from './footer'


function Routesanimation() {

    const location = useLocation()

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<About/>}/>
          <Route exact path='/resume' element={<Resume/>}/>
          <Route exact path='/projects' element={<Projects/>}/>
          <Route exact path='/skills' element={<Skills/>}/>
        </Routes>
        {/* <Footer/> */}
    </AnimatePresence>
  )
}

export default Routesanimation