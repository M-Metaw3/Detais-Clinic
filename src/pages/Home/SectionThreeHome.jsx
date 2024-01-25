import React from 'react';
import { Container, Flex, Button, Text, VStack,Center, useBreakpointValue } from '@chakra-ui/react'
import { AspectRatio ,Image,Box } from '@chakra-ui/react'
import imagesection2 from '../../assets/image 4 (1).png'

const SectionThreeHome = () => {
    return (
<Box className='test' >

  <Image order={2}  className='section3imagemain'  src={imagesection2} alt='Dan Abramov' />
  
  <Box className='section2text'width={"40%"} alignItems={"center"} textAlign={"center"}>

  <Text className='section2text1'  >Who are we ?</Text>
  <Text className='section2text2'  >Lorem ipsum dolor sit amet consectetur. Eget dignissim aenean quam viverra gravida donec. Ipsum fermentum cursus mattis pulvinar pellentesque malesuada ridiculus. Turperos pellentesque viverra suspendisse sem. risus in posuere dui metus commodo </Text>
  </Box>
</Box>
    );
}

export default SectionThreeHome;
