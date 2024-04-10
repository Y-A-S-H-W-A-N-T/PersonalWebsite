import '../stylesheet/back.css'
import Nav from './nav'

function Back() {
  return (
    <div>
        <video autoPlay loop muted className='spiderman'>
          <source src='./livespiderman.mp4'/>
        </video>
        <Nav/>
    </div>
  )
}

export default Back