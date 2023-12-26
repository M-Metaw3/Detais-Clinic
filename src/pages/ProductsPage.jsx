import React from 'react';
import Products from '../components/Products';
import { useEffect , useState } from 'react';
import axios from 'axios'
import {Grid} from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText,Box } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Skeletoncomp from '../components/Skeletoncomp';
const ProductsPage = () => {



      const fetchBlogs = async () => {
        try {
          // const response = await axios.get(`http://localhost:1337/api/products?populate=thumbnail`);
          const response = await axios.get(`
          
          https://dummyjson.com/products
          
          `);

   return response;
        } catch (error) {
          https://dummyjson.com/products
          console.error(error);
        }
      };




      const {data,error,isLoading} = useQuery({ queryKey: ['category'], queryFn: fetchBlogs })
  
    // console.log(data.data.products);
 if (isLoading) {
  return (

    Array(10).fill(<Grid><Skeletoncomp/></Grid>)

  )
 }
    return (
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
          {data?.data?.products?.map((product)=>(
            <Products key={product.id} {...product} />
          ))}
     
        </Grid>
    );
}

export default ProductsPage;
