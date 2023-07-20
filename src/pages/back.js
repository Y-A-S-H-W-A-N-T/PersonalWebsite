import React from 'react'
import livevideo from './livespiderman.mp4'
import './livespiderman.mp4'
import './stylesheet/back.css'
import Nav from './nav'

function Back() {
  return (
    <div>
        <video autoPlay loop muted>
          <source src={livevideo}/>
        </video>
        <Nav/>
    </div>
  )
}

export default Back