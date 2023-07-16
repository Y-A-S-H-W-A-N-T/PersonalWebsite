import React from 'react'
import { Link } from 'react-router-dom'
import './stylesheet/nav.css'

function Nav() {
  return (
    <div className='nav'>
        <div className='sidenav'>
            <Link to='/'><p>ABOUT</p></Link>
            <Link to='/resume'><p>RESUME</p></Link>
            <Link to='/contact'><p>CONTACT</p></Link>
            <Link to='/projects'><p>PROJECTS</p></Link>
        </div>
    </div>
  )
}

export default Nav