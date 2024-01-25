import React from 'react';
import {
    BrowserRouter as Router,
  
    Route,
    Outlet,
    Routes
  } from "react-router-dom";
import Nav from '../pages/Navbar';
import Footer from '../pages/Footer';
import Colormoodwitcher from '../pages/Colormoodwitcher';
const Layout = ({x}) => {

    return (
   <>
   <Nav/>
  
   <Outlet/>
   <Footer/>
   </>
    );
}

export default Layout;
