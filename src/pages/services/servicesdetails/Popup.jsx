import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Input,Button,useColorModeValue,Select,useDisclosure
  } from '@chakra-ui/react'
import Otp from './Otp';
const Popup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
 
    return (
        <>
        <Button 
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
              }} onClick={onOpen}>Open Modal</Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent display={"flex"} justifyContent={"center"} >
            <ModalHeader textAlign={"center"}>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             
            </ModalBody>
            <ModalFooter display={"flex"} justifyContent={"center"} border={"1px solid red"} >
           
              <Button  colorScheme='blue'>Please lgin first</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
}

export default Popup;
