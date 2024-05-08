import { Route, Routes } from 'react-router'
import About from './routes/About'
import Projects from './routes/Projects'
import Home from './routes/Home'
import Nav from './routes/Nav'
import Me from './routes/about_routes/Me'
import Experience from './routes/about_routes/Experience'
import Skills from './routes/about_routes/Skills'
import "./app.css"
import Education from './routes/about_routes/Education'

function App() {

  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />}>
          <Route path="Me" element={<Me />}/>
          <Route path="Experience" element={<Experience />}/>
          <Route path="Education" element={<Education />}/>
          <Route path="Skills" element={<Skills />}/>
        </Route>
        <Route path="Projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
