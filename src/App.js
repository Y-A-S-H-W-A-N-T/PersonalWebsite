import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Contact from './pages/contact'
import Resume from './pages/resume'
import About from './pages/about'
import Projects from './pages/projects'
import Nav from './pages/nav'
import './App.css'
import livevideo from './livespiderman.mp4'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <video autoPlay loop muted>
          <source src={livevideo}/>
        </video>
        <Nav/>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
