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

import Nav from '../Navbar';

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
    // <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
    //   <Flex style={{ order: '1' }} p={8} flex={1} align={'center'} justify={'center'}>
    //     <Stack spacing={4} w={'full'} maxW={'md'}>
    //       <Heading fontSize={'2xl'}>Sign in to your account</Heading>
    //       <FormControl id="email">
    //         <FormLabel>Email address</FormLabel>
    //         <Input name="email" value={formData.email} onChange={handleChange} type="email" />
    //       </FormControl>
    //       <FormControl id="password">
    //         <FormLabel>Password</FormLabel>
    //         <Input name="password" value={formData.password} onChange={handleChange} type="password" />
    //       </FormControl>
        

    //       <Stack spacing={6}>
    //         <Button onClick={handleSubmit} color='blue' variant={'solid'}>
    //           Sign in
    //         </Button>
    //         <Stack
    //           direction={{ base: 'column', sm: 'row' }}
    //           align={'start'}
    //           justify={'space-between'}>
    //           <Checkbox>Remember me</Checkbox>
    //           <Button onClick={onOpen}><Text color={'blue.500'}>Forgot password?</Text></Button>
              
    //         </Stack>
    //       </Stack>
    //       <Modal isOpen={isOpen} onClose={onClose}>
    //     <ModalOverlay />
    //     <ModalContent>
    //       <ModalHeader>Modal Title</ModalHeader>
    //       <ModalCloseButton />
    //       <ModalBody>
    //       <FormControl>
    //         <Text>enter your email to send you reset password</Text>
    //         <br/>
    //         <br/>

    //       <FormLabel>Email address</FormLabel>
    //         <Input name="email" value={formData.email} onChange={handleChange} type="email" />
    //       </FormControl>
    //       </ModalBody>

    //       <ModalFooter>
    //         <Button color='blue' mr={3} onClick={onClose}>
    //           Close
    //         </Button>
    //         <Button onClick={UpdateData} variant='ghost'>Send to email</Button>
    //       </ModalFooter>
    //     </ModalContent>
    //   </Modal>
   
    //     <NavLink to={'/registration'}><Button fontWeight={600} fontSize={'25px'} color={'blue.500'}>Create an account</Button></NavLink>
    //     </Stack>
    //   </Flex>
    //   <Flex flex={1}>
    //     <Image
    //       alt={'Login Image'}
    //       objectFit={'cover'}
    //       src={
    //         loginimage
    //       }
    //     />
    //   </Flex>
    // </Stack>














<>
<Nav/>

<div className="flex flex-col bg-white">
  
      <div className="flex gap-5 justify-between w-full text-sm max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src={loginimage}
          className="flex-1 w-full aspect-[0.86] max-md:max-w-full"
        />
        <div className="flex flex-col flex-1 px-5 py-px my-auto max-md:max-w-full">
          <div className="self-center text-3xl text-cyan-900 capitalize max-md:max-w-full">
            welcome back !
          </div>
          <div className="justify-center items-start py-6 pr-16 pl-4 mt-14 rounded-lg border border-solid border-slate-300 text-slate-500 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
           
            <input placeholder=' Email / Phone number' name="email" value={formData.email} onChange={handleChange}  className="w-full font-bold bg-transparent border-none focus:outline-none" type="email" />
          </div>
          <div className="justify-center items-start py-6 pr-16 pl-4 mt-6 whitespace-nowrap rounded-lg border border-solid border-slate-300 text-slate-500 max-md:pr-5 max-md:max-w-full">
                  <input placeholder='Password'    className="w-full font-bold bg-transparent border-none focus:outline-none" name="password" value={formData.password} onChange={handleChange} type="password" />
          </div>
          <button onClick={handleSubmit} className="justify-center items-center px-16 py-4 mt-10 text-lg font-medium text-center text-white whitespace-nowrap rounded-lg bg-slate-500 max-md:px-5 max-md:max-w-full">
            Login
          </button>
          <div className="self-center mt-11 text-stone-500 max-md:mt-10 max-md:max-w-full">
            <span className="text-zinc-800">Don’t have an account? </span>
            <NavLink to={'/registration'}>   <span className="text-stone-700 text-2xl">Register</span></NavLink>
            <br/>
            <br/>

            


          </div>
              <Button onClick={onOpen}><Text color={'blue.500'}>Forgot password?</Text></Button>
        </div>
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
             <Button color='blue' mr={3} onClick={onClose}>
               Close
             </Button>
            <Button onClick={UpdateData} variant='ghost'>Send to email</Button>
           </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
    </div>















</>
  );
}
