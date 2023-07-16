import React from 'react'
import { Link } from 'react-router-dom'
import './stylesheet/contact.css'

function contact() {
  return (
    <div className='github'>
        <Link to='https://github.com/Y-A-S-H-W-A-N-T'><img src='./images/github.png' alt='github'/></Link>
    </div>
  )
}

export default contact