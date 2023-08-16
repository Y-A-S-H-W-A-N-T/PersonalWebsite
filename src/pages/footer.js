import React from 'react'
import { Link } from 'react-router-dom'
import './stylesheet/footer.css'
import Social from './stylesheet/logos/social.png'

function Footer() {
  return (
    <div className='footer'>
        <Link to='https://instagram.com/yashwant._._?igshid=NTc4MTIwNjQ2YQ==' className='social'><img src={Social} alt='hackerrank'/></Link>
    </div>
  )
}

export default Footer