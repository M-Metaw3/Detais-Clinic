import React from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';
import Skeletoncomp from '../components/Skeletoncomp';
import { Skeleton, SkeletonCircle, SkeletonText,Box } from '@chakra-ui/react'
import axios from 'axios'
import {Grid} from '@chakra-ui/react'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { Card, CardHeader, CardBody, CardFooter ,Button,ButtonGroup,Divider,Text,Heading,Stack,Image} from '@chakra-ui/react'


const ProductCard = () => {

    let { id } = useParams();
    const fetchBlogs = async () => {
        try {
        //   const response = await axios.get(`http://localhost:1337/api/products/${id}?populate=thumbnail`);
          
          const response = await axios.get(`https://dummyjson.com/products/${id}`);

   return response;
        } catch (error) {
          console.error(error);
        }
      };




      const {data,error,isLoading} = useQuery({ queryKey: ['category',id], queryFn: fetchBlogs })

 if (isLoading) {
  return (

    <Grid><Skeletoncomp/></Grid>

  )
 }
    return (
        <Card   maxW='sm' bg={"none"}>
        <CardBody key={data?.data?.id} textAlign={"center"} >
          <Image
        //   src={data?.data?thumbnail}
        // src={props.thumbnail}
        src={data?.data?.thumbnail}

            alt='Green double couch with wooden legs'
            borderRadius='50%'
            mx={"auto"}
            width={"250px"}
            height={"250px"}
            objectFit={'cover'}
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{data?.data?.title}</Heading>
            <Text>
         {data?.data?.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {data?.data?.data?.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter alignItems={"center"} >
          <ButtonGroup width='100%' textAlign={"center"} spacing='2 '>
          
          <Button width='100%' size='lg' variant='solid' colorScheme='blue'>
            veiw details
            </Button>
          
       
       
          </ButtonGroup>

        </CardFooter>
      </Card>
    );
}

export default ProductCard;
