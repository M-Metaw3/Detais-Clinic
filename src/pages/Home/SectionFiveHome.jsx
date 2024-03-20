import React from 'react';
import { AspectRatio ,Image,Box } from '@chakra-ui/react'

const SectionFiveHome = () => {
    return (
     <AspectRatio  m={"50px"} maxW='92% ' mr={"auto"} ml={"auto"} h={'auto'}  ratio={4 / 3}>
  <iframe
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>
    );
}

export default SectionFiveHome;
