import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Home2 from './pages/Home/Home-2'
import Portfolio from './pages/Portfolio/Portfolio'
import UserEnquiry from './pages/UserEnquiry/UserEnquiry'
import UserEnquiryUncontroll from './pages/UserEnquiry/UserEnquiryUncontroll'
import UserEnquiryControll from './pages/UserEnquiry/UserEnquiryControll'
import UserEnquiryControllOptimize from './pages/UserEnquiry/UserEnquiryControllOptimize'
import Home3 from './pages/Home/Home-3'
import FormValidation from './component/Task-2/Form-Validation'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home2',
    element: <Home2 />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/userEnquiry',
    element: <UserEnquiryControllOptimize />,
  },
  {
    path: '/home3',
    element: <Home3 />,
  },
  {
    path: '/home3/form',
    element: <FormValidation />
  }
]);

function App() {

  return (
    <div className="App">
      {/* < Home /> */}   {/* to see Task-1 Uncomment this line Home component */}
      {/* <Home2 /> */}   {/* to see Task-2 Uncomment this line Home2 component */}
      {/* {<Portfolio />} */} {/* to see Task-3 Uncomment this line Portfolio component */}
      {/* <UserEnquiry /> */}
      {/* <UserEnquiryUncontroll />  */}
      {/* <UserEnquiryControll />  */}
      {/* <UserEnquiryControllOptimize /> */}
      {/* <Home3/> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
