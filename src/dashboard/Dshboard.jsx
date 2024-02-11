import React from 'react';
import {
    BrowserRouter as Router,
  
    Route,
    Outlet,
    Routes
  } from "react-router-dom";
import DashboardAppBar from './DashboardAppBar';
const Dshboard = () => {
    return (
   
        <div>

            <DashboardAppBar/>
   <Outlet/>
           
        </div>
    );
}

export default Dshboard;
