import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import Clima from './components/Clima'


function App() {
 

  return (
    <div className="App">
      
     <NavBar />
     <Clima />
    
    </div>
  )
}

export default App
