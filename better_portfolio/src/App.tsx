import { Route, Routes } from 'react-router'
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'
import Nav from './components/Nav'
import "./app.css"

function App() {

  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
