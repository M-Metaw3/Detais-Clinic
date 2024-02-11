

import  React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';


import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Cookies from 'js-cookie';
import { Box, Heading, Text, VStack, IconButton, Textarea } from '@chakra-ui/react';
import { MdCloudUpload } from 'react-icons/md';
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
import Skeletoncomp from '../../../components/Skeletoncomp';
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

export default function Paymentform({data}) {
  const userCookie = Cookies?.get('user');
  const user = userCookie ? JSON.parse(userCookie) : undefined;
  console.log(user);
  const [formData, setFormData] = useState({
    email: user?.email,
    name: user?.name,
    description:'',
  price:data?.price,
  services:data?.name,
  phone:user?.phone,
});
useEffect(()=>{
setFormData({
  email: user?.email,
  name: user?.name,
  description:'',
  price:data?.price,
  services:data?.name,
  phone:user?.phone,

})


},[])
const [selectedFile, setSelectedFile] = useState(null);
console.log(formData.name)
const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Display the selected image
    setSelectedFile(file);
  // Pass the selected file object to the parent component
  }
};
if (!data){
  return <Skeletoncomp/>

}
  return (
<Box   width={"100%"}>
<Box _dark={{border:'1px solid white', boxShadow:'3px 3px 20px white  ',color:"white" }}  display={"flex"} flexDirection={"column"} flexWrap={"wrap"} m={"20px"} >
  <FormControl flexWrap={"wrap"} mt={"15px"} display={"flex"} justifyContent={"space-around"}>

  <Box width={"48%"}>
  <FormLabel color={"#6D758F"}> name</FormLabel>
  <Input  name="name" value={formData.name}  type="text"/>
  </Box>
    <Box width={"48%"}>
  <FormLabel color={"#6D758F"}>Email address</FormLabel>
  <Input focusBorderColor='blue'  name="email" value={formData.email} onChange={handleChange} type="email"    />
  </Box>

</FormControl>

<FormControl p={"15px"} flexWrap={"wrap"}  mt={"15px"} display={"flex"} justifyContent={"space-around"}>
    <Box width={"33%"}>
  <FormLabel color={"#6D758F"}>phone</FormLabel>
  <Input  name="text" value={formData.phone} onChange={handleChange}  type='text' />
  </Box>
  <Box width={"33%"} >
  <FormLabel color={"#6D758F"}>Services Title</FormLabel>
  <Input  type='text'  name="services" value={formData.services}  />
  </Box>
  <Box width={"33%"}>
  <FormLabel color={"#6D758F"}>Services Coast</FormLabel>
  <Input  type='text'  name="email" value={formData.price}  />

  {/* <Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select> */}
  </Box>

</FormControl>










<FormControl p={"15px"} flexWrap={"wrap"}  mt={"15px"} display={"flex"} justifyContent={"space-around"}>
    <Box _dark={{border:'1px solid white', boxShadow:'3px 3px 10px white  ' }} p={"10px"}    justifyContent={'center'} width={"100%"}>
  <FormLabel color={"#6D758F"}  >Design File </FormLabel>
 
        <Box  textAlign={'center'} >
            <Text color={"#6D758F"}>Drag & Drop or Click to Upload Your design</Text>
            <IconButton
           
              icon={<MdCloudUpload />}
              width={"200px"}
              h={"150px"}
              aria-label="Upload File"
              onClick={() => document.getElementById('fileInput').click()}
            />
      
    
    
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      </Box>
  </Box>

</FormControl>



<FormControl _dark={{border:'1px solid white', boxShadow:'3px 3px 10px white  ' }} p={"15px"}  flexWrap={"wrap"}  m={"auto"} >
    <Box  width={"98%"}>
  <FormLabel color={"#6D758F"} >Decription</FormLabel>
  <Textarea _dark={{color:"white" }}  name="description" value={formData.description} onChange={handleChange} textAlign={"left"} placeholder='write file description'  height={"20vh"}    />
  </Box>

</FormControl>



    <Box display={"flex"} flexDirection={"row-reverse"} width={"100%"}>
{/* <Popup/> */}
<PopupVisacard/>
  </Box>


{/* <PopupVisacard/> */}





</Box>
</Box>
  );
}