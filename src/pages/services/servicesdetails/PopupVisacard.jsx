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
import Section8 from '../../Home/Section8';
import Cardnisa from './Cardnisa';
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
              }} onClick={onOpen}>Payment</Button>
        <Modal
          isCentered
          size={'xl'}
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
         
        >
          <ModalOverlay />
          <ModalContent   display={"flex"} justifyContent={"center"}   >

            <ModalCloseButton />









            <ModalBody _dark={{bg:'grey'}}  display={"flex"} flexDirection={"column"}>
<Cardnisa/>
         

            </ModalBody>
            {/* <ModalFooter display={"flex"} justifyContent={"center"} border={"1px solid red"} >
            
              <Button onClick={handlerOtp} colorScheme='blue'>Please lgin first</Button>
            </ModalFooter> */}
            <Button _dark={{bg:'white'}} width={'full'} colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
          </ModalContent>
        </Modal>
        {otp&&<Otp/>}
      </>
    );
}

export default PopupVisacard;
