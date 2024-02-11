import { NavLink } from 'react-router-dom'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import * as React from "react";
import styled from "styled-components";

export default function SectionFourAboutus() {
  return (
    <Div>
      <Img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/33d0be7415bbd86f6fd5124067f23fa0ed441f32cfbd7a2e3a30bb7b4019f3c9?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/33d0be7415bbd86f6fd5124067f23fa0ed441f32cfbd7a2e3a30bb7b4019f3c9?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33d0be7415bbd86f6fd5124067f23fa0ed441f32cfbd7a2e3a30bb7b4019f3c9?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/33d0be7415bbd86f6fd5124067f23fa0ed441f32cfbd7a2e3a30bb7b4019f3c9?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/33d0be7415bbd86f6fd5124067f23fa0ed441f32cfbd7a2e3a30bb7b4019f3c9?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33d0be7415bbd86f6fd5124067f23fa0ed441f32cfbd7a2e3a30bb7b4019f3c9?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/33d0be7415bbd86f6fd5124067f23fa0ed441f32cfbd7a2e3a30bb7b4019f3c9?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/33d0be7415bbd86f6fd5124067f23fa0ed441f32cfbd7a2e3a30bb7b4019f3c9?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&"
      />
      <Div2>
        <Div3>Scope</Div3>
        <Div4>
          Lorem ipsum dolor sit amet consectetur. Eget dignissim aenean quam
          viverra gravida donec. Ipsum fermentum cursus mattis pu malesuada
          ridiculus. eros pellentesque{" "}
        </Div4>
          <NavLink to={'/services'}>
        <Div5>
          <Div6>Services</Div6>

          <Img2
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/05e30cbeec9b2f0fa8b4e46da74092744455eb83cd1fffe713973dd4a87377bb?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&"
            />
        </Div5>
            </NavLink>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  disply: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 480px;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 50px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Img = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Div2 = styled.div`
  position: relative;
  display: flex;
  margin-top: 108px;
  width: 741px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div3 = styled.div`
  font: 700 26px Open Sans, sans-serif;
`;

const Div4 = styled.div`
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.36px;
  align-self: stretch;
  margin-top: 46px;
  font: 400 18px/36px Open Sans, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div5 = styled.div`
  justify-content: center;
  border-radius: 7.29px;
  background-color: var(--Base-White, #fff);
  display: flex;
  margin-top: 50px;
  gap: 12px;
  font-size: 16px;
  color: #7b728a;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  letter-spacing: -0.18px;
  line-height: 150%;
  padding: 12px 16px;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const Div6 = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Open Sans, sans-serif;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 16px;
  margin: auto 0;
`;



// export default function SectionFourAboutus() {
//   return (
//     <Flex
//       w={'full%'}
//       h={'50vh'}
//       backgroundImage={
//         'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
//       }
//       backgroundSize={'cover'}
//       backgroundPosition={'center '}>
//       <VStack
//         w={'full'}
//         justify={'center'}
//         px={useBreakpointValue({ base: 4, md: 8 })}
//         bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
//         <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
//           <Text
//             color={'white'}
//             fontWeight={700}
//             lineHeight={1.2}
//             fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
//             Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
//           </Text>
//           <Stack direction={'row'}>
//             <Button
//               bg={'blue.400'}
//               rounded={'full'}
//               color={'white'}
//               _hover={{ bg: 'blue.500' }}>
//               Services
//             </Button>
      
//           </Stack>
//         </Stack>
//       </VStack>
//     </Flex>
//   )
// }