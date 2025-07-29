import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import Home2 from './pages/Home/Home-2'
import Portfolio from './pages/Portfolio/Portfolio'

function App() {

  return (
    <div className="App">
      {/* < Home /> */}   {/* to see Task-1 Uncomment this line Home component */}
      {/* <Home2 /> */}   {/* to see Task-2 Uncomment this line Home2 component */}
      {<Portfolio />}
    </div>
  )
}

export default App
