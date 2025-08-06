import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
import Layout from './component/Layout/Layout'
import ProductsList from './component/ProductList/ProductList'

export const routes = [
  {
    path: '/',
    element: <Home />,
    name: 'Home',
  },
  {
    path: '/products',
    element: <Home2 />,
    name: 'Products',
  },
  {
    path: '/products/:productId',
    element: <ProductsList />,
    name: 'Product Details',
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
    name: 'Portfolio',
  },
  {
    path: '/userEnquiry',
    element: <UserEnquiryControllOptimize />,
    name: 'User Enquiry',
  },
  {
    path: '/userData',
    element: <Home3 />,
    name: 'UserData',
  },
  {
    path: '/userData/form',
    element: <FormValidation />,
    name: 'Form Validation'
  }
]

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
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
