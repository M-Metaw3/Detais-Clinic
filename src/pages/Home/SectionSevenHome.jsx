import React from 'react';
import { Box, AbsoluteCenter, Divider, Text } from '@chakra-ui/react';
import OurConsultants from './OurConsultants';
const SectionSevenHome = ({data}) => {
    return (
                    <Box mr={'auto'} ml={"auto"} textAlign={"center"}  w={"95%"} >
  <Box position='relative' padding='10'>
  <Divider />
  <AbsoluteCenter _dark={{bg:"#1a202c"}} bg='white' px='4'>
  <Text ml={"50px"} mr={"50px"} mb={"20px"} className='text' >our Consultants</Text>

  </AbsoluteCenter>
</Box>

<OurConsultants data={data}/>

</Box>

        
    );
}

export default SectionSevenHome;
