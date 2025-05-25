import { React,useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage'

function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path='/'  element={<LandingPage/>} />
          </Routes>
        </Router>
      </div>
  )
}

export default App
