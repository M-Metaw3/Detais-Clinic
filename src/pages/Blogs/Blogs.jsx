import React from 'react';
import SectionOneAboutus from '../aboutUs/SectionOneAboutus';
import {GetData} from '../../api/apiFactory';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'

import SectionTwoBlog from './SectionTwoBlog';
import SectionThreeBlog from './SectionThreeBlog';
import SectionFourBlog from './SectionFourBlog';
import SectionOneBlog from './SectionOneBlog';
import Skeletoncomp from '../../components/Skeletoncomp';
import { Box } from '@chakra-ui/react';

const Blogs = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['blogs'],
        queryFn: () =>
        GetData("/blogs")
      })
console.log(data?.data);
if(isPending){
    return <Skeletoncomp/>
}
    return (
        <div>
            <SectionOneBlog />
            <Box width={"96%"} ml={"auto"} mr={"auto"} mt={"30px"} >
            <Box fontSize={"x-large"} color={"#164863"}>
            Popular topics
            </Box >
            <SectionTwoBlog data={data?.data}/>
            </Box>

            <Box >

            <SectionThreeBlog/> 
            </Box>
     
            <Box width={"96%"} ml={"auto"} mr={"auto"} mb={"30px"}  mt={"30px"} >

            <SectionFourBlog/>
            </Box>

        </div>
    );
}

export default Blogs;
