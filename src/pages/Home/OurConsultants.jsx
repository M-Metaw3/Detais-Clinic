
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
import linkedin from '../../assets/LinkedIn.png'
import doctor from '../../assets/image 6.png'
import { NavLink } from 'react-router-dom'

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

export default function OurConsultants({data}) {
console.log(data)
  return (
        <Box  display={"flex"} padding={"30px"} flexWrap={"wrap"} justifyContent={"space-around"} py={12}>
  {data&&data?.map((el)=>(

<Box
        role={'group'}
        p={6}
      
     mb={"20px"}

        height={"500px"}
        // maxW={{'25%'}}
        maxW={{  
          
        sm: "100%", // ~480px. em is a relative unit and is dependant on the font size.
        md: "48%", // ~768px
        lg: "38%", // ~992px
        xl: "24%", // ~1280px
        }}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        display={"flex"}
        alignItems={"flex-end"}
      justifyContent={"center"}

        style={{
            backgroundImage: `url(http://localhost:3111/Homepage/${el?.images})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        zIndex={0}>
            <NavLink style={{margin:"10px"}} href={el&&el?.link}>
            <Image   className="linked-in" alt="Linked in" src='https://cdn.builder.io/api/v1/image/assets/TEMP/5633bb01f192cdb270007e2f8dc3d82edb207660d345719558e18d3961314cb3?"'/>
            </NavLink>
        <Stack    className='namecard'  >
        
          <Heading className='text1'  fontSize={{  
        sm: "xl", // ~480px. em is a relative unit and is dependant on the font size.
        md: "xl" ,// ~768px
        lg:"md" , // ~992px
        xl: "md", // ~1280px
        }} 
        color={'white'} fontFamily={'body'} fontWeight={{  
        sm: 100, // ~480px. em is a relative unit and is dependant on the font size.
        md: 150 ,// ~768px
        lg:300 , // ~992px
        xl: 500, // ~1280px
        }}
   
        >
            {el&&el?.name}
          </Heading>
 
        </Stack>
      </Box>

  )) }   
  
      </Box>
   
  )
}



// import styled from "styled-components";

// import {
//   Box,
//   Center,
//   useColorModeValue,
//   Heading,
//   Text,
//   Stack,
//   Image,
// } from '@chakra-ui/react'
// import './stylehome/section7.css'
// import linkedin from '../../assets/LinkedIn.png'
// import doctor from '../../assets/image 6.png'
// const IMAGE =
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

// export default function OurConsultants({data}) {
// console.log(data)
//   return (
//         <Box  display={"flex"} padding={"30px"} flexWrap={"wrap"} justifyContent={"space-around"} py={12}>
//   {data&&data?.map((el)=>(
//  <>
// <Div >
// <Img
//   loading="lazy"
//   src= {`http://localhost:3111/Homepage/${el?.images}`}
// />
// <Img2
//   loading="lazy"
//   src="https://cdn.builder.io/api/v1/image/assets/TEMP/5633bb01f192cdb270007e2f8dc3d82edb207660d345719558e18d3961314cb3?"
// />
// <Div2>DR:{el.name}</Div2>
// </Div>
//     </>

//   )) }   
  
//       </Box>
   
//   )
// }


// const Div = styled.div`
//   disply: flex;
//   flex-direction: column;
//   overflow: hidden;
//   position: relative;
//   display: flex;
//   aspect-ratio: 1.01;
//   max-width: 500px;
//   font-size: 16px;
//   color: var(--Secondary-color, #fff);
//   font-weight: 600;
//   white-space: nowrap;
//   text-transform: capitalize;
//   line-height: 120%;
//   padding: 20px 21px;
  
//   background-image: url('.....');
// `;

// const Img = styled.img`
//   position: absolute;
//   inset: 0;
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
//   object-position: center;
//   z-index: 1; 
// `;

// const Img2 = styled.img`
//   aspect-ratio: 1;
//   object-fit: auto;
//   object-position: center;
//   width: 35px;
//   align-self: end;
//   z-index: 2; 
// `;

// const Div2 = styled.div`

//   font-family: Open Sans, sans-serif;
//   justify-content: center;
  
//   align-items: center;
//   border-radius: 8px;
//   backdrop-filter: blur(100px);
//   background-color: #475767;
//   margin-top: 245px;
//   padding: 15px 60px;
//   z-index: 3; 
// `;


