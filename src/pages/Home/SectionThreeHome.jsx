import React from 'react';
import { Container, Flex, Button, Text, VStack,Center, useBreakpointValue } from '@chakra-ui/react'
import { AspectRatio ,Image,Box } from '@chakra-ui/react'
import imagesection2 from '../../assets/image 4 (1).png'
import Url from '../../api/ApiUrl';

const SectionThreeHome = ({data}) => {
  console.log(data)
    return (
<Box display={"flex"} flexDirection={{base:'column-reverse',md:'row'}} mt={{base:"10px",md:''}} className='test' >

  <Image order={2}  className='section3imagemain'  src={`${Url}/Homepage/${data&&data[0]?.images}`} alt='Dan Abramov' />
  
  <Box mt={{base:"20px",md:''}} className='section2text'width={"37%"} alignItems={"center"} textAlign={"center"}>

  <Text className='section2text1'  >{data&&data[0]?.title}</Text>
  <Text className='section2text2'  >{data&&data[0]?.subTitle} </Text>
  </Box>
</Box>
    );
}

export default SectionThreeHome;
