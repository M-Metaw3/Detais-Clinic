import React, { lazy, Suspense } from 'react';
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
import Blog from '../dashboard/Blog';
import AboutUsDashboard from '../dashboard/AboutUsDashboard';
import Dshboard from '../dashboard/Dshboard';
import DshboardLogin from './../dashboard/DshboardLogin';
import DshboardHome from '../dashboard/DshboardHome';
import ServicesDashbord from '../dashboard/ServicesDashbord';

import DashboardAppBar from '../dashboard/DashboardAppBar';
import ContactDashboard from '../dashboard/ContactDashboard';
import Table from '../pages/Home/Table';

// import DashboardAppBar from './../dashboard/DashboardAppBar';
// import Login from './../pages/RegitrationLogin/Login';
import ContentMangemeny from './../dashboard/ContentMangemeny';
import HomeMangment from './../dashboard/contentMangment/HomeMangment';
import {TestFile} from '../dashboard/contentMangment/TestFile';
import AboutUSMangment from '../dashboard/contentMangment/AboutUSMangment';
import ServicesMangment from '../dashboard/contentMangment/ServicesMangment';
import Profile from './../pages/profile/Profile';
import MyrequestsProfile from './../pages/profile/MyrequestsProfile';
import Mydata from './../pages/profile/Mydata';
import Cookies from 'js-cookie';
import VerifyEmail from '../components/VerifyEmail';
import Resestpass from '../components/Resestpass';
import RequestsDahboard from '../dashboard/Requests/RequestsDahboard';
import UserInfo from '../dashboard/User/UserInfo';


const Routess = () => {
  const userCookie = Cookies?.get('user');
  const user = userCookie ? JSON.parse(userCookie) : undefined;
  const jwtCookie = Cookies?.get('user');
  const jwt = jwtCookie ? JSON.parse(jwtCookie) : undefined;









  const userCookieadmin = Cookies?.get('useradmin');
  const useradmin = userCookieadmin ? JSON.parse(userCookieadmin) : undefined;
  const jwtCookieadmin = Cookies?.get('useradmin');
  const jwtadmin = jwtCookieadmin ? JSON.parse(jwtCookieadmin) : undefined;


    return ( 
      
                     <Routes >
   <Route path='/' element={<Layout />}>
    
   <Route index element={<HomePage />}/>
   
   <Route path="/xxx" element={<AboutUs />}/>
   <Route path="/profile" element={<Profile islogin={user} isjwt={jwt} />}>
   <Route path="/profile" element={<MyrequestsProfile />}/>
   <Route path="/profile/myprofile" element={<Mydata />}/>


    </Route>

   <Route path="/services" element={<Services />}/>
   <Route path="/services/:id" element={<SercivcesDeteails/>}/>

   {/* <Route path="/ser/?id" element={<SercivcesDeteails/>}/> */}

   <Route path="/aboutus" element={<AboutUs />}/>
   <Route path="/blogs" element={<Blogs />}/>
   <Route path="/contactUs" element={<ContactUs />}/>


   <Route path="/:token" element={<VerifyEmail />}/>
   <Route path="/resetpassword/:token" element={<Resestpass />}/>




   <Route path="/products/:id/" element={<ProductCard />}/>
   <Route path="/products" element={<ProductsPage />}/>


   
   </Route>
   <Route path="/contacts" element={<ContactDashboard/>}/>
   <Route path="/login" element={<Registration islogin={user} isjwt={jwt} />}/>
   <Route path="/registration" element={<Test islogin={user} isjwt={jwt} />}/>

   <Route path="/T" element={<TestFile/>}/>


   <Route path="/table" element={<Table />}/>

   <Route path="/test" element={<Login />}/>
   <Route path="/daschboard/login" element={<DshboardLogin islogin={useradmin} isjwt={jwtCookieadmin}/>}/>
   <Route path="/dashboard" element={<DashboardAppBar islogin={useradmin} isjwt={jwtCookieadmin}/>}>
   <Route path="/dashboard" element={<DshboardHome islogin={useradmin} isjwt={jwtCookieadmin}/>}/>
   <Route path="/dashboard/services" element={<ServicesDashbord islogin={useradmin} isjwt={jwtCookieadmin}/>}/>
   <Route path="/dashboard/contentmangment/services" element={<ServicesMangment islogin={useradmin} isjwt={jwtCookieadmin}/>}/>
   <Route path="/dashboard/contentmangment/requests" element={<RequestsDahboard islogin={useradmin} isjwt={jwtCookieadmin}/>}/>

   
   <Route path="/dashboard/contentmangment" element={<ContentMangemeny islogin={useradmin} isjwt={jwtCookieadmin}/>}/>
   <Route path="/dashboard/contentmangment/home" element={<HomeMangment islogin={useradmin} isjwt={jwtCookieadmin}/>}/>
   <Route path="/dashboard/contentmangment/blogs" element={<Blog islogin={useradmin} isjwt={jwtCookieadmin}/>} />
   {/* <Route path="/dashboard/contentmangment/about" element={<AboutUsDashboard/>}/> */}
   <Route path="/dashboard/users" element={<UserInfo islogin={useradmin} isjwt={jwtCookieadmin}/>}/>
   <Route path="/dashboard/contentmangment/about" element={<AboutUSMangment islogin={jwtCookieadmin} isjwt={jwtadmin}/>}/>
   <Route path="/dashboard/contact" element={<ContactDashboard islogin={useradmin} isjwt={jwtCookieadmin}/>} />







   {/* <Route path="/dashboard/Home" element={<DshboardHome/>}/> */}





   </Route>



    </Routes>
        
    );
}

export default Routess;
