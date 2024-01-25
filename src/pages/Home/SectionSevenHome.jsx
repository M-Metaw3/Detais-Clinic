import React from 'react';
import { Box, AbsoluteCenter, Divider, Text } from '@chakra-ui/react';
import OurConsultants from './OurConsultants';
const SectionSevenHome = () => {
    return (
    
                    <Box >
  <Box position='relative' padding='10'>
  <Divider />
  <AbsoluteCenter bg='white' px='4'>
  <Text ml={"50px"} mr={"50px"} mb={"20px"} className='text' >our Consultants</Text>

  </AbsoluteCenter>
</Box>
<OurConsultants/>
</Box>

        
    );
}

export default SectionSevenHome;
