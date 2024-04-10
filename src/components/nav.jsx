import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylesheet/nav.css'


function Nav() {

  const activecss = ({ isActive })=>{
      return{
        fontFamily: isActive? 'comics': 'comic_fill',
      }
  }

  return (
    <div className='nav'>
        <div className='sidenav'>
            <NavLink style={activecss} to='/'><p>PROFILE</p></NavLink>   {/* LINK TO PROJECTS*/}
            <NavLink style={activecss} to='/resume'><p>RESUME</p></NavLink>
            <NavLink style={activecss} to='/projects'><p>PROJECTS</p></NavLink>
            <NavLink style={activecss} to='/skills'><p>SKILLS</p></NavLink>
        </div>
    </div>
  )
}

export default Nav