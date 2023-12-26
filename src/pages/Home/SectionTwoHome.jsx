

import { Container, Flex, Button, Text, VStack,Center, useBreakpointValue } from '@chakra-ui/react'
import { AspectRatio ,Box } from '@chakra-ui/react'

export default function SectionTwoHome() {
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


// import React from 'react';
// import YouTube from 'react-youtube';
// import { Container } from '@mui/material/Container';

// const SectionTwoHome = () => {
//   const videoId = 'https://www.youtube.com/watch?v=5iAt1F62aNM&ab_channel=%D9%83%D9%8A%D9%85%D9%88%D8%A7%D9%84%D8%AF%D9%8A%D8%A8-kimoElDeeb'; // Replace with your YouTube video ID

//   const opts = {
//     height: '390',
//     width: '640',
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 1,
//     },
//   };

//   const onReady = (event) => {
//     // Access to player in all event handlers via event.target
//     event.target.pauseVideo();
//   };

//   return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
// };

// export default SectionTwoHome;