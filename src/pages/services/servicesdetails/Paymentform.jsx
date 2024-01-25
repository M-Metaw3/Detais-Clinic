

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';


import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,Button,useColorModeValue,Select
  } from '@chakra-ui/react'
import Popup from './Popup';
import PopupVisacard from './PopupVisacard';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Paymentform() {
  

  return (
<Box   width={"100%"}>
<Box display={"flex"} flexDirection={"column"} flexWrap={"wrap"} m={"20px"} >
<FormControl flexWrap={"wrap"} mt={"15px"} display={"flex"} justifyContent={"space-around"}>
    <Box width={"47%"}>
  <FormLabel>Email address</FormLabel>
  <Input focusBorderColor='blue'   type='email' />
  </Box>
  <Box  backgroundColor={"#fff"}  width={"23%"}>
  <FormLabel>Email address</FormLabel>
  <Input backgroundColor={"#fff"}  type='email' />
  </Box>
  <Box width={"23%"}>
  <FormLabel>Email address</FormLabel>
  <Input  type='email' />
  </Box>

</FormControl>










<FormControl p={"15px"} flexWrap={"wrap"}  mt={"15px"} display={"flex"} justifyContent={"space-around"}>
    <Box width={"23%"}>
  <FormLabel>Email address</FormLabel>
  <Input  type='email' />
  </Box>
  <Box width={"23%"}>
  <FormLabel>Email address</FormLabel>
  <Input  type='email' />
  </Box>
  <Box width={"23%"}>
  <FormLabel>Email address</FormLabel>
  <Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
  </Box>
  <Box width={"23%"}>
  <FormLabel>Email address</FormLabel>
  <Input  type='email' />
  </Box>
</FormControl>










<FormControl p={"15px"} flexWrap={"wrap"}  mt={"15px"} display={"flex"} justifyContent={"space-around"}>
    <Box  width={"100%"}>
  <FormLabel  >file</FormLabel>
  <Input textAlign={"center"} height={"20vh"}   type='File' />
  </Box>

</FormControl>



<FormControl flexWrap={"wrap"} p={"15px"}  m={"15px"} >
    <Box  width={"100%"}>
  <FormLabel  >file</FormLabel>
  <Input textAlign={"left"} placeholder='write file description'  height={"20vh"}   type='Textarea' />
  </Box>

</FormControl>



    <Box display={"flex"} flexDirection={"row-reverse"} width={"100%"}>
<Popup/>
    {/* <Button
            rounded={'none'}
            alignItems={"center"}
           borderRadius={"3PX"}
        
            w={'25%'}
            // mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('#5F92AD', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button> */}
  </Box>


<PopupVisacard/>





</Box>
</Box>
  );
}