import React from 'react';
import { Box,Heading } from '@chakra-ui/react'
import {

    BrowserRouter as Router,
    NavLink,
    Route,
    Outlet,
    Routes
  } from "react-router-dom";
const ContentMangemeny = () => {
    return (
        <Box p={"20px"}  h={"90vh"}  m={'10px'} bgColor={"white"}>
            <Box>
                <NavLink to={'home'}>
                <Box  p={'5px'}  borderRadius={'5px'} bgColor={'rgba(68, 149, 208, 0.07)'} m={'10px'} >
                <Heading color={'#4495D0'} m={"10px"}>Home</Heading>
            </Box>
            </NavLink>
            <NavLink to={'about'}>
                <Box  p={'5px'}  borderRadius={'5px'} bgColor={'rgba(68, 149, 208, 0.07)'} m={'10px'} >
                <Heading color={'#4495D0'} m={"10px"}>AboutUs</Heading>
            </Box>
            </NavLink>
            <NavLink to={'blogs'}>
                <Box  p={'5px'}  borderRadius={'5px'} bgColor={'rgba(68, 149, 208, 0.07)'} m={'10px'} >
                <Heading color={'#4495D0'} m={"10px"}>Blogs</Heading>
            </Box>
            </NavLink>   
                  <NavLink to={'services'}>
                <Box  p={'5px'}  borderRadius={'5px'} bgColor={'rgba(68, 149, 208, 0.07)'} m={'10px'} >
                <Heading color={'#4495D0'} m={"10px"}>Services</Heading>
            </Box>
            </NavLink>
         
        </Box>
        </Box>
    );
}

export default ContentMangemeny;
