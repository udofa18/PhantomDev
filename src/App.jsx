import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import './App.css'
import Navigaiton from './Components/Navigation'
import Home from './Pages/Home'
import Publication from './Pages/Publication'
import { Navigate, Route, Routes, useLocation } from "react-router";
import Projecs from './Pages/Projects'
import Experience from './Pages/Experience'

function App() {

  return (
    <div className=''>
    <Navigaiton/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/publications' element={<Publication/>}/>
    <Route path='/projects' element={<Projecs/>}/>
    <Route path='/experience' element={<Experience/>}/>

    </Routes>
     
    </div>
  )
}

export default App
