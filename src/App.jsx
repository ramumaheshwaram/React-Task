import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Home-components/Home.jsx'
import { About } from './About-components/About.jsx'


function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
