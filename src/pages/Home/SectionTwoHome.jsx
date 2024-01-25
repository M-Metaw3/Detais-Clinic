

import { Container, Flex, Button, Text, VStack,Center, useBreakpointValue } from '@chakra-ui/react'
import { AspectRatio ,Image,Box } from '@chakra-ui/react'
import './stylehome/section2.css'
import imagesection2 from '../../assets/image 4 (1).png'
import { useEffect ,useRef } from 'react'
export default function SectionTwoHome() {
  const imageref=useRef()

  useEffect(()=>{
window.addEventListener('scroll',()=>{
  if(window.scrollY>=400){
    imageref.current.style.transform="translate(45px, 45px)"
    imageref.current.style.transition="0.5s"
   


  }else{
    imageref.current.style.transform="translate(0px, 0px)"
   

  };
})

  },[])
  return (
<Box className='test' >
<Box className='section2image' >
  <Image ref={imageref} className='section2imagemain'  src={imagesection2} alt='Dan Abramov' />
  </Box>
  <Box className='section2text'width={"40%"} alignItems={"center"} textAlign={"center"}>
    <br/>
    <br/>
    <br/>
    <br/>
  <Text className='section2text1'  >Who are we ?</Text>
  <Text className='section2text2'  >Lorem ipsum dolor sit amet consectetur. Eget dignissim aenean quam viverra gravida donec. Ipsum fermentum cursus mattis pulvinar pellentesque malesuada ridiculus. Turperos pellentesque viverra suspendisse sem. risus in posuere dui metus commodo </Text>
  </Box>
</Box>
// <AspectRatio m={"50px"} maxW='full' maxHeight='70vh'  ratio={4 / 3}>
//   <iframe
//     title='naruto'
//     src='https://www.youtube.com/embed/QhBnZ6NPOY0'
//     allowFullScreen
//   />
// </AspectRatio>

  );
}


