import React from 'react'
import LandingPage from './VendorDashboard/pages/LandingPage'
import "./App.css"
import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
    </Routes>
   
    
    </div>

  )
}

export default App