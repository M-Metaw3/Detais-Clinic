
import {Image, Stack, Flex, Button, Box,Text, VStack, useBreakpointValue } from '@chakra-ui/react'
// import sectionone from '../../assets/prop'
import logo from '../../assets/logo (1).svg'
import logo2 from '../../assets/Property 1=Frame 138.png'


import "./home.css"
export default function SectionOneHome() {
  return (
    <Flex
    className='navbarimage'

      w={'full%'}
      h={'70vh'}
  
      backgroundSize={'cover'}
      backgroundPosition={'center '}>
  <Image  className='section1logo'  blur={"50"}  src={logo2} alt='Dan Abramov' />
         
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack  maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
        className='animation'
      
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })} style={{width:'40%',position:"absolute",}}>
           YOUR DESIGN IN JUST FOUR STEPS
          </Text>
          <Box   className='containernewtext'  style={{position:"absolute",top:"180",left:0,width:"30%",marginLeft:'40px'}}>
          <Text
     
        className='newtext'
         
            lineHeight={1.2}
         >
          Digital Design FOR LABORATORIES AND DENTISTS
          </Text>
          <Text
      
        className='newtext2'
         
            lineHeight={1.3}
         >
    We have a team of designers specialized in dental digital flow. Always in constant learning to offer precise and quality solutions.
          </Text>
          <Button
            
              className='containerbutton'
              rounded={'full'}
            
              _hover={{ bg: 'whiteAlpha.500' }}>
              Show me more
            </Button>
          </Box>
          <Stack direction={'row'}>
         
        
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}