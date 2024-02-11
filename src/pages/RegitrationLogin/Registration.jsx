import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
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
  useToast
 

} from '@chakra-ui/react';


import Cookies from 'js-cookie';
import { PostDatalogin } from '../../api/apiFactory';
import {Navigate, NavLink, useNavigate } from 'react-router-dom';
import  axios  from 'axios';
import loginimage from '../../assets/Frame 278.png'
export default function Registration({isjwt,islogin}) {
  const userCookie = Cookies?.get('user');
  const user = userCookie ? JSON.parse(userCookie) : undefined;
const nav= useNavigate()

  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const toast = useToast();
  if (islogin&&isjwt) return <Navigate to={'/'} />;

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
  
        Cookies.set('token', response?.data?.token, { expires: 1 })
        Cookies.set('user',JSON.stringify( response?.data?.data?.user), { expires: 1 })

        nav('/');
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

  const UpdateData = async () => {
    try {
      const response = await PostDatalogin('users/forgetpassword', formData );

       
   if (response.status==200){
     alert("your email is verified successfully")
     toast({
      title: 'success',
      description: 'your email is verified successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

       return response;
   }else{
    toast({
      title: 'Error',
      description: response?.response?.data?.messge,
      status: 'error',
      duration: 3000,
      isClosable: true,
    }); 
   }
    } catch (error) {
     alert("an error")
    }
   };

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex style={{ order: '1' }} p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input name="email" value={formData.email} onChange={handleChange} type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input name="password" value={formData.password} onChange={handleChange} type="password" />
          </FormControl>
        

          <Stack spacing={6}>
            <Button onClick={handleSubmit} colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Button onClick={onOpen}><Text color={'blue.500'}>Forgot password?</Text></Button>
              
            </Stack>
          </Stack>
          <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
            <Text>enter your email to send you reset password</Text>
            <br/>
            <br/>

          <FormLabel>Email address</FormLabel>
            <Input name="email" value={formData.email} onChange={handleChange} type="email" />
          </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={UpdateData} variant='ghost'>Send to email</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
   
        <NavLink to={'/registration'}><Button fontWeight={600} fontSize={'25px'} color={'blue.500'}>Create an account</Button></NavLink>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            loginimage
          }
        />
      </Flex>
    </Stack>
  );
}
