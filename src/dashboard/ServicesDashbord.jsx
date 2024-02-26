import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import Cookies from 'js-cookie';
  import {Navigate, NavLink, useNavigate } from 'react-router-dom';
const ServicesDashbord = (
  {islogin,isjwt}) => {


    const nav= useNavigate()
    if (!islogin&&!isjwt) return <Navigate to={'/daschboard/login'} />;

    return (
        <div>
{/* <TableContainer bg={'white'}>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th>into</Th>
        <Th>into</Th>
        <Th>into</Th>
        <Th>into</Th>
        <Th>into</Th>

      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>

     
      </Tr>

    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer> */}
under construction
            
        </div>
    );
}

export default ServicesDashbord;
