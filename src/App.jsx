import './App.css'
import Navigation from './Components/Navigation'
import Home from './Pages/Home'
import Publication from './Pages/Publication'
import { Route, Routes } from "react-router";
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'
import AnimatedBackground from './Components/AnimatedBackground'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <Navigation />
        <div className="pt-16">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/publications' element={<Publication />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<Experience />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
