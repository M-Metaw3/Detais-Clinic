import React from 'react';
import FirstSection from './HomeDashboard/FirstSection';
import ElipsSection from './HomeDashboard/ElipsSection';
import { Box } from '@chakra-ui/react';
import Servicesana from './HomeDashboard/Servicesana';

const DshboardHome = () => {
    return (
        <Box >
 <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
 <Box width={'28%'} >
            <ElipsSection/>
        </Box>

        <Box width={'70%'} >

     <FirstSection/>
        </Box>
        </Box>
        <Box  borderRadius={"5px"} mt={"30px"} ml={"auto"} mr={"auto"} width={'98%'} >
<Servicesana/>

   </Box>
    
        </Box>
    );
}

export default DshboardHome;
