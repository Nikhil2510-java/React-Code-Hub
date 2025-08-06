import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
const Layout = () => {
    return (
       <>
        <Header/>
        <Breadcrumbs/>
        <Outlet/>
        <Footer/>
       </>
    )
    
}

export default Layout;