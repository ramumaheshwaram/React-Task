import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Home-components/Home.jsx'
import { About } from './About-components/About.jsx'
import { Safety } from './safety-components/Safety.jsx'
import { Carrers } from './careers-components/Careers.jsx'


function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/careers" element={<Carrers />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
