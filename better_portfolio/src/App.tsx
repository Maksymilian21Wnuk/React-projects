import { Route, Routes } from 'react-router'
import About from './routes/About'
import Projects from './routes/Projects'
import Home from './routes/Home'
import Nav from './routes/Nav'
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
