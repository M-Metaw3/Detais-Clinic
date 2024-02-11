import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Box
  } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
const NavigationBox = ({URL}) => {
    return (
        
        <Box  p={'10px'}  borderRadius={'5px'} bgColor={'rgba(68, 149, 208, 0.07)'} m={'10px'} >
        <Breadcrumb>
  <BreadcrumbItem>
  <NavLink to={'/dashboard/contentmangment'}>
    <BreadcrumbLink href='#'>ContentManagement</BreadcrumbLink>
    </NavLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>{URL}</BreadcrumbLink>
  </BreadcrumbItem>


</Breadcrumb>
</Box>

    );
}

export default NavigationBox;
