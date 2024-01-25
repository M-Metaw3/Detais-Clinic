import React from 'react';
import { Box, AbsoluteCenter, Divider, Text } from '@chakra-ui/react';
import "./stylehome/section6.css"
import SliderLogo from './SliderLogo';

const SectionSixHome = () => {
  
    return (
        <Box textAlign={"center"} >
  <Box  position='relative'  padding='10'>
  <Divider />
  <AbsoluteCenter bg='white' px='4'>
  <Text ml={"50px"} mr={"50px"} mb={"20px"} className='text' >our partners</Text>

  </AbsoluteCenter>
</Box>
<Box textAlign={"center"}  alignItems={"center"} m={"20px"}>
<SliderLogo/>
</Box>
        </Box>
    );
}

export default SectionSixHome;
