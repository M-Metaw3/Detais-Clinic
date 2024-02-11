import React from 'react';
import { Box } from '@chakra-ui/react'
import background from '../assets/Sign in.png'
import logo from '../assets/Group 847.png'
import logo1 from '../assets/logo (1).svg'


import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
    Button,Image 
  } from '@chakra-ui/react'





const DshboardLogin = () => { 
    return (
<Box 
backgroundImage={background}
display={'flex'}  flexDirection={'column'}  justifyContent={'center'}
      backgroundSize={'cover'}
      backgroundPosition={'center '} h={'100vh'} w='100%' p={4} color='white'>



<Box p={'30px'} display={'flex'} flexDirection={'column'} alignItems={'center'} bg={'rgba(255, 255, 255, 0.75)'} borderRadius={'10px'} ml={"50px"} width={'30%'} >
    <Box w={'70%'}>
<Box p={"30px"} m={'30px'} w={'100%'}>

  <Image w={'90%'}  src={logo} alt='Dan Abramov' />
</Box>

<FormControl>
  <br/>
  <Box m={'auto'} width={'100%'}>

  <Input color={'black'}  placeholder='Email'  bg={"white"} type='email' />
  <br/>
  <br/>

  <Input color={"black"} placeholder='Password'  bg={"white"} type='email' />
  </Box>



 
  <br/>
  <br/>

</FormControl>
<Button width={'100%'}  colorScheme='teal' >
    login
  </Button>
</Box>
</Box>
</Box>
    );
}

export default DshboardLogin;
