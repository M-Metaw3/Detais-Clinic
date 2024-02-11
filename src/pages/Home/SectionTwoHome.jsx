

import { Container, Flex, Button, Text, VStack,Center, useBreakpointValue } from '@chakra-ui/react'
import { AspectRatio ,Image,Box } from '@chakra-ui/react'
import './stylehome/section2.css'
import imagesection2 from '../../assets/image 4 (1).png'
import { useEffect ,useRef } from 'react'
export default function SectionTwoHome({data}) {
  const imageref=useRef()
console.log(data)
console.log(imageref)
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY >= 400&&imageref) {
      imageref.current.style.transform = "translate(45px, 45px)";
      imageref.current.style.transition = "0.5s";
    } else {
      imageref.current.style.transform = "translate(0px, 0px)";
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup function to remove the event listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
<Box className='test' >
<Box className='section2image' >
  <Image ref={imageref} className='section2imagemain'  src={`http://localhost:3111/Homepage/${data&&data[0]?.images}`} alt='Dan Abramov' />
  </Box>
  <Box className='section2text'width={"40%"} alignItems={"center"} textAlign={"center"}>
    <br/>
    <br/>
    <br/>
    <br/>
  <Text className='section2text1'  > {data&&data[0]?.title}</Text>
  <Text className='section2text2'  >{data&&data[0]?.subTitle} </Text>
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


