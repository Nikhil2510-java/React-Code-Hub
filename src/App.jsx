import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import Home2 from './pages/Home/Home-2'
import Portfolio from './pages/Portfolio/Portfolio'
import UserEnquiry from './pages/UserEnquiry/UserEnquiry'
import UserEnquiryUncontroll from './pages/UserEnquiry/UserEnquiryUncontroll'
import UserEnquiryControll from './pages/UserEnquiry/UserEnquiryControll'
import UserEnquiryControllOptimize from './pages/UserEnquiry/UserEnquiryControllOptimize'

function App() {

  return (
    <div className="App">
      {/* < Home /> */}   {/* to see Task-1 Uncomment this line Home component */}
      {/* <Home2 /> */}   {/* to see Task-2 Uncomment this line Home2 component */}
      {/* {<Portfolio />} */} {/* to see Task-3 Uncomment this line Portfolio component */}
      {/* <UserEnquiry /> */}
      {/* <UserEnquiryUncontroll />  */}
      {/* <UserEnquiryControll />  */}
      <UserEnquiryControllOptimize />
    </div>
  )
}

export default App
