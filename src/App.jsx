import './App.css'
import Navigation from './Components/Navigation'
import Home from './Pages/Home'
import Publication from './Pages/Publication'
import { Route, Routes, useLocation } from "react-router-dom";
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'
import Community from './Pages/Community'
import AnimatedBackground from './Components/AnimatedBackground'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  const location = useLocation()
  const isCommunity = location.pathname === '/community'

  return (
    <ThemeProvider>
      {!isCommunity && <AnimatedBackground />}
      {!isCommunity && <Navigation />}
      <div className={isCommunity ? '' : 'min-h-screen relative pt-16'}>
        <Routes>
          <Route path='/community' element={<Community />} />
          <Route path='/' element={<Home />} />
          <Route path='/publications' element={<Publication />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
