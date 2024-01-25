
'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react'
import './stylehome/section7.css'
import doctor from '../../assets/image 6.png'
const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

export default function OurConsultants() {
  return (
    <Box display={"flex"} padding={"30px"} flexWrap={"wrap"} justifyContent={"space-around"} py={12}>
      <Box
        role={'group'}
        p={6}
      
     mb={"20px"}

        height={"500px"}
        maxW={'500px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        display={"flex"}
        alignItems={"flex-end"}
      justifyContent={"center"}

        style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        zIndex={0}>
            
    

        <Stack    className='namecard'  >
         
          <Heading className='text1'  fontSize={'2xl'} color={'white'} fontFamily={'body'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
 
        </Stack>
      </Box>
      <Box
        role={'group'}
        p={6}
        height={"500px"}
        maxW={'500px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        display={"flex"}
        alignItems={"flex-end"}
      justifyContent={"center"}

        style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        zIndex={0}>
            
    

        <Stack    className='namecard'  >
         
          <Heading className='text1'  fontSize={'2xl'} color={'white'} fontFamily={'body'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
 
        </Stack>
      </Box>      <Box
        role={'group'}
        p={6}
        height={"500px"}
        maxW={'500px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        display={"flex"}
        alignItems={"flex-end"}
      justifyContent={"center"}

        style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        zIndex={0}>
            
    

        <Stack    className='namecard'  >
         
          <Heading className='text1'  fontSize={'2xl'} color={'white'} fontFamily={'body'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
 
        </Stack>
      </Box>      <Box
        role={'group'}
        p={6}
        height={"500px"}
        maxW={'500px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        display={"flex"}
        alignItems={"flex-end"}
      justifyContent={"center"}

        style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        zIndex={0}>
            
    

        <Stack    className='namecard'  >
         
          <Heading className='text1'  fontSize={'2xl'} color={'white'} fontFamily={'body'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
 
        </Stack>
      </Box>
    </Box>
  )
}