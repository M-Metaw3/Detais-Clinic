import React,{useState} from 'react';
import {
    Modal,
    Box,
    Image,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Input,Button,useColorModeValue,Select,useDisclosure
    ,    FormControl,Text,
    FormLabel,
  } from '@chakra-ui/react'
import Otp from './Otp';
const PopupVisacard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [otp, setotp]=useState(false)
    const handlerOtp=()=>{
        console.log("handlerOtp")
      setotp(true)
      onClose()
    }
    return (
        <>
        <Button 
              rounded={'none'}
              alignItems={"center"}
             borderRadius={"3PX"}
          
              w={'25%'}
              // mt={8}
              size={'xl'}
              py={'7'}
              bg={useColorModeValue('#5F92AD', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'xl',
              }} onClick={onOpen}>Visa Modal</Button>
        <Modal
          isCentered
          size={'xl'}
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
         
        >
          <ModalOverlay />
          <ModalContent  border={"1px solid red"} display={"flex"} justifyContent={"center"}   >
            <ModalHeader width={"90%"}>
                <Box display={"flex"} justifyContent={"center"} >
                <Image
width={"100%"} 
textAlign={"center"}
height={"300px"}
  src='https://media.istockphoto.com/id/497492327/photo/credit-cards-stack-including-visa-master-and-maestro.jpg?s=612x612&w=0&k=20&c=T44y6gSkhcoabCaaO5DmWJdC6Pb9hgWD7mjl-l1No8Q='
  alt='Dan Abramov'
/>

</Box>
</ModalHeader>
            <ModalCloseButton />










            <ModalBody border={"1px solid red"} display={"flex"} flexDirection={"column"}>
            <FormControl flexWrap={"wrap"} >
    <Box  width={"100%"}>
  <FormLabel  >file</FormLabel>
  <Input textAlign={"left"} placeholder='write file description'   type='text' />
  
  </Box>

</FormControl>




<FormControl display={"flex"}  flexWrap={"wrap"} >
    <Box  width={"50%"}>
  <FormLabel  >file</FormLabel>
  <Input textAlign={"left"} placeholder='write file description'   type='text' />
  
  </Box>
  <Box  width={"50%"}>
  <FormLabel  >file</FormLabel>
  <Input textAlign={"left"} placeholder='write file description'   type='text' />
  
  </Box>
  <Box mt={"10px"} mb={"10px"} display={"flex"} w={"100%"}  justifyContent={"space-between"}>
  <Text as='b' fontSize='3xl'>Total</Text>
  <Text   as='b' fontSize='3xl'>2000$</Text>
  </Box>

</FormControl>













            </ModalBody>
            <ModalFooter display={"flex"} justifyContent={"center"} border={"1px solid red"} >
            
              <Button onClick={handlerOtp} colorScheme='blue'>Please lgin first</Button>
            </ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
          </ModalContent>
        </Modal>
        {otp&&<Otp/>}
      </>
    );
}

export default PopupVisacard;
