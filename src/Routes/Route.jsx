import React from 'react';
import {
    BrowserRouter as Router,
  
    Route,
    Outlet,
    Routes
  } from "react-router-dom";
  import HomePage from "../pages/Home/HomePage";
  import Aboutus from "../pages/Aboutus";
  
  import ProductsPage from "../pages/ProductsPage";
  import ProductCard from "../pages/ProductCard";
import Layout from './Layout';
import Registration from '../pages/RegitrationLogin/Registration';
import Services from '../pages/services/Services';
import AboutUs from '../pages/aboutUs/AboutUs';
import Blogs from './../pages/Blogs/Blogs';
import Test from '../pages/RegitrationLogin/Test';
import ContactUs from '../pages/ContactUs/ContactUs';
import Login from '../pages/RegitrationLogin/Login';
// import SercivcesDeteails from '../pages/services/servicesdetails/SercivcesDeteails';
import SercivcesDeteails from '../pages/services/servicesdetails/SercivcesDeteails';

const Routess = () => {
    return ( 
                     <Routes >
   <Route path='/' element={<Layout />}>
    
   <Route index element={<HomePage />}/>
   <Route path="/xxx" element={<AboutUs />}/>
   <Route path="/ser" element={<Services />}/>
   <Route path="/serdet" element={<SercivcesDeteails/>}/>

   {/* <Route path="/ser/?id" element={<SercivcesDeteails/>}/> */}

   <Route path="/abo" element={<AboutUs />}/>
   <Route path="/blo" element={<Blogs />}/>
   <Route path="/test" element={<Test />}/>
   <Route path="/contactUs" element={<ContactUs />}/>





   <Route path="/products/:id/" element={<ProductCard />}/>
   <Route path="/products" element={<ProductsPage />}/>
   
   </Route>
   <Route path="/r" element={<Registration />}/>
   <Route path="/regi" element={<Login />}/>




    </Routes>
        
    );
}

export default Routess;
