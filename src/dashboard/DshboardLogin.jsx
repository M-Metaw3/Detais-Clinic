import React,{useState} from 'react';
import background from '../assets/Sign in.png'
import logo from '../assets/Group 847.png'
import logo1 from '../assets/logo (1).svg'


  import {
    Button,
    Checkbox,
    Flex,
    Text,
    FormControl,
    Heading,
    Input,
    Stack,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useToast,
   
    Box
  } from '@chakra-ui/react';
  

  import Cookies from 'js-cookie';
  import {Navigate, NavLink, useNavigate } from 'react-router-dom';
  import { PostDatalogin } from '../api/apiFactory';
  import  axios  from 'axios';


const DshboardLogin = ({islogin,isjwt}) => { 




  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const toast = useToast();






  
  
  
  
  
  
  
  
  const nav= useNavigate()
  if (islogin&&isjwt) return <Navigate to={'/dashboard/users'} />;











  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
 
    
    try {
      const response = await PostDatalogin('users/login', formData);
      console.log(response);
      if (response.status === 200) {
        toast({
          title: 'Success',
          description: 'Success login.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
  console.log(response)
  if(!response?.data?.data?.user?.role=="admin") {
    return alert("only admin can access this routin")
  }
        Cookies.set('tokenadmin', response?.data?.token, { expires: 1 })
        Cookies.set('useradmin',JSON.stringify( response?.data?.data?.user), { expires: 1 })
        window.location.href = '/dashboard/users'; // Reload and route to '/dashboard/login'

        return;

          // Save token in a cookie

      }
      if (response.response && response.response.status === 500) {
        toast({
          title: 'Warnning',
          description: response.response.data.messge,
          status: 'warning',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };














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

  <Input color={'black'} name='email' value={formData.email} onChange={handleChange}   placeholder='Email'  bg={"white"} type='email' />
  <br/>
  <br/>

  <Input color={"black"} placeholder='Password'  name='password' value={formData.password} onChange={handleChange} bg={"white"} type='password' />
  </Box>



 
  <br/>
  <br/>

</FormControl>
<Button onClick={handleSubmit} width={'100%'}  colorScheme='teal' >
    login
  </Button>
</Box>
</Box>
</Box>
    );
}

export default DshboardLogin;
