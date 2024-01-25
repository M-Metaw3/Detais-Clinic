import React from 'react';
import { Container, Flex, Button, Text, VStack,Center, useBreakpointValue } from '@chakra-ui/react'
import { AspectRatio ,Image,Box,SimpleGrid,Card,CardHeader, Heading ,CardBody,CardFooter} from '@chakra-ui/react'
import './stylehome/sectionfour.css'
import Svg from './svg/Svg.';
import { useEffect ,useRef } from 'react'
// import AOS from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
const SectionFourHome = () => {


  useEffect(() => {
    AOS.init();
  }, [])







    return (
      <Box className='mainbox' >  
      <Heading className='heading' textAlign={"center"} m={"2rem"} size='md'>How it work</Heading>

           <SimpleGrid display={"flex"} flexWrap={"wrap"} justifyContent={"space-around"} spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
           <div data-aos="fade-up">    
  <Card   backgroundColor={"#345471"} m={"20px"} mb={"40px"} border={"1px solid var(--Border-Card, #FFF)"} borderRadius={"10px"} color={"white"}  width={'350px'} >
    <Svg/>
    <CardHeader>
      <Heading size='md'>1 Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.
      View a summary of all your customers over the last month.View a summary of all your customers over the last month.View a summary of all your customers over the last month.View a summary of all your customers over the last month.View a summary of all your customers over the last month.
      </Text>


    </CardBody>
    <CardFooter>
   
    </CardFooter>
  </Card> 
  </div>
  <div data-aos="fade-up">    
  <Card   backgroundColor={"#345471"} m={"20px"} mb={"40px"} border={"1px solid var(--Border-Card, #FFF)"} borderRadius={"10px"} color={"white"}  width={'350px'} >
    <Svg/>
    <CardHeader>
      <Heading size='md'>1 Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.
      View a summary of all your customers over the last month.View a summary of all your customers over the last month.View a summary of all your customers over the last month.View a summary of all your customers over the last month.View a summary of all your customers over the last month.
      </Text>


    </CardBody>
    <CardFooter>
   
    </CardFooter>
  </Card> 
  </div>           <div data-aos="fade-up">    
  <Card   backgroundColor={"#345471"} m={"20px"} mb={"40px"} border={"1px solid var(--Border-Card, #FFF)"} borderRadius={"10px"} color={"white"}  width={'350px'} >
    <Svg/>
    <CardHeader>
      <Heading size='md'>1 Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.
      View a summary of all your customers over the last month.View a summary of all your customers over the last month.View a summary of all your customers over the last month.View a summary of all your customers over the last month.View a summary of all your customers over the last month.
      </Text>


    </CardBody>
    <CardFooter>
   
    </CardFooter>
  </Card> 
  </div>           <div data-aos="fade-up">    
  <Card   backgroundColor={"#345471"} m={"20px"} mb={"40px"} border={"1px solid var(--Border-Card, #FFF)"} borderRadius={"10px"} color={"white"}  width={'350px'} >
    <Svg/>
    <CardHeader>
      <Heading size='md'>1 Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.
      View a summary of all your customers over the last month.View a summary of all your customers over the last month.View a summary of all your customers over the last month.View a summary of all your customers over the last month.View a summary of all your customers over the last month.
      </Text>


    </CardBody>
    <CardFooter>
   
    </CardFooter>
  </Card> 
  </div>

</SimpleGrid>
</Box>
 
    );
}

export default SectionFourHome;
