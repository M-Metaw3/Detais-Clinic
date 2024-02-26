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


      <div className="flex gap-5 justify-between py-4 pr-20 pl-6 rounded-lg bg-blue-500 bg-opacity-10 max-md:flex-wrap max-md:px-5">
      <div className="flex-auto self-start mt-2.5 text-xl font-semibold text-blue-500">
        <span className="text-slate-500">Content Management </span> / {URL}
      </div>

    </div>
        
//         <Box  p={'10px'}  borderRadius={'5px'} bgColor={'rgba(68, 149, 208, 0.07)'} m={'10px'} >
//         <Breadcrumb>
//   <BreadcrumbItem>
//   <NavLink to={'/dashboard/contentmangment'}>
//     <BreadcrumbLink href='#'>ContentManagement</BreadcrumbLink>
//     </NavLink>
//   </BreadcrumbItem>

//   <BreadcrumbItem>
//     <BreadcrumbLink href='#'>{URL}</BreadcrumbLink>
//   </BreadcrumbItem>


// </Breadcrumb>
// </Box>

    );
}

export default NavigationBox;
