import React from 'react';
import { AspectRatio ,Image,Box } from '@chakra-ui/react'

const SectionFiveHome = () => {
    return (
     <AspectRatio m={"50px"} maxW='full' maxHeight='70vh'  ratio={4 / 3}>
  <iframe
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>
    );
}

export default SectionFiveHome;
