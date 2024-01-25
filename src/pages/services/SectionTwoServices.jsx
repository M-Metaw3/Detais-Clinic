// import React from 'react';
// import { Card, Image,Stack, Flex,CardHeader,Button, ButtonGroup,Divider,Text, Heading,CardBody, CardFooter } from '@chakra-ui/react'
// const SectionTwoServices = () => {

//     return (
        
//         <Flex flexWrap={'wrap'} m={"20px"} alignItems={'center'} textAlign={'center'} justifyContent={'center'} alignContent={'center'} color='white'>
//         <Card background={'rgba(221, 230, 237, 0.30)'} maxW='sm'>
//         <CardBody>
//           <Image
//             src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
//             alt='Green double couch with wooden legs'
//             borderRadius='lg'
//           />
//           <Stack mt='6' spacing='3'>
//             <Heading size='md'>Living room Sofa</Heading>
//             <Text font-weight={600} color='#00C8FF' fontSize='2xl'>
//               $450
//             </Text>
//             <Text >
//               This sofa is perfect for modern tropical spaces, baroque inspired
//               spaces, earthy toned spaces and for people who love a chic design with a
//               sprinkle of vintage design.
//             </Text>
//           </Stack>
//         </CardBody>
       
       
//       </Card>
//       <Card maxW='sm'>
//         <CardBody>
//           <Image
//             src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
//             alt='Green double couch with wooden legs'
//             borderRadius='lg'
//             w={"100%"}
//           />
//           <Stack mt='6' spacing='3'>
//             <Heading size='md'>Living room Sofa</Heading>
//             <Text color='blue.600' fontSize='2xl'>
//               $450
//             </Text>
//             <Text>
//               This sofa is perfect for modern tropical spaces, baroque inspired
//               spaces, earthy toned spaces and for people who love a chic design with a
//               sprinkle of vintage design.
//             </Text>
//           </Stack>
//         </CardBody>
       
       
//       </Card>
//       <Card maxW='sm'>
//         <CardBody>
//           <Image
//             src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
//             alt='Green double couch with wooden legs'
//             borderRadius='lg'
//           />
//           <Stack mt='6' spacing='3'>
//             <Heading size='md'>Living room Sofa</Heading>
//             <Text color='blue.600' fontSize='2xl'>
//               $450
//             </Text>
//             <Text>
//               This sofa is perfect for modern tropical spaces, baroque inspired
//               spaces, earthy toned spaces and for people who love a chic design with a
//               sprinkle of vintage design.
//             </Text>
//           </Stack>
//         </CardBody>
       
       
//       </Card>        <Card maxW='sm'>
//         <CardBody>
//           <Image
//             src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
//             alt='Green double couch with wooden legs'
//             borderRadius='lg'
//           />
//           <Stack mt='6' spacing='3'>
//             <Heading size='md'>Living room Sofa</Heading>
//             <Text color='blue.600' fontSize='2xl'>
//               $450
//             </Text>
//             <Text>
//               This sofa is perfect for modern tropical spaces, baroque inspired
//               spaces, earthy toned spaces and for people who love a chic design with a
//               sprinkle of vintage design.
//             </Text>
//           </Stack>
//         </CardBody>
       
       
//       </Card>
//       </Flex>
//     );
// }

// export default SectionTwoServices;


'use client'

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'

const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
}



function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            )
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  )
}

function SectionTwoServices() {
  return (
    <Flex display={"flex"} justifyContent={"space-around"} alignContent={"center"} flexWrap={"wrap"}  p={50} w="full" >
      <Box
        bg={useColorModeValue('rgba(221, 230, 237, 0.30)', 'gray.800')}
        // backgroundColor={"rgba(221, 230, 237, 0.30)"}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {/* {data.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )} */}

        <Image src={data.imageURL} height={"300px"}       backgroundSize={'cover'}
      backgroundPosition={'center '} width={"full"} alt={`Picture of ${data.name}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
        
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            
              color={useColorModeValue('#27374D', 'white')}

              isTruncated>
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
           
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
          
            <Box fontSize="2xl" 
              color={useColorModeValue('#00C8FF', '#00C8FF')}
              >
              <Box as="span"  fontSize="lg">
                £
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
          <Text 
              color={useColorModeValue('rgba(52, 84, 113, 0.80)', 'white')}
              noOfLines={[1, 2, 3,4]}>
   "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
</Text>
        </Box>
      </Box>    <Box
        bg={useColorModeValue('rgba(221, 230, 237, 0.30)', 'gray.800')}
        // backgroundColor={"rgba(221, 230, 237, 0.30)"}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {/* {data.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )} */}

        <Image src={data.imageURL} height={"300px"}       backgroundSize={'cover'}
      backgroundPosition={'center '} width={"full"} alt={`Picture of ${data.name}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
        
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            
              color={useColorModeValue('#27374D', 'white')}

              isTruncated>
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
           
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
          
            <Box fontSize="2xl" 
              color={useColorModeValue('#00C8FF', '#00C8FF')}
              >
              <Box as="span"  fontSize="lg">
                £
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
          <Text 
              color={useColorModeValue('rgba(52, 84, 113, 0.80)', 'white')}
              noOfLines={[1, 2, 3,4]}>
   "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
</Text>
        </Box>
      </Box>    <Box
        bg={useColorModeValue('rgba(221, 230, 237, 0.30)', 'gray.800')}
        // backgroundColor={"rgba(221, 230, 237, 0.30)"}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {/* {data.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )} */}

        <Image src={data.imageURL} height={"300px"}       backgroundSize={'cover'}
      backgroundPosition={'center '} width={"full"} alt={`Picture of ${data.name}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
        
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            
              color={useColorModeValue('#27374D', 'white')}

              isTruncated>
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
           
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
          
            <Box fontSize="2xl" 
              color={useColorModeValue('#00C8FF', '#00C8FF')}
              >
              <Box as="span"  fontSize="lg">
                £
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
          <Text 
              color={useColorModeValue('rgba(52, 84, 113, 0.80)', 'white')}
              noOfLines={[1, 2, 3,4]}>
   "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
</Text>
        </Box>
      </Box>    <Box
        bg={useColorModeValue('rgba(221, 230, 237, 0.30)', 'gray.800')}
        // backgroundColor={"rgba(221, 230, 237, 0.30)"}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {/* {data.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )} */}

        <Image src={data.imageURL} height={"300px"}       backgroundSize={'cover'}
      backgroundPosition={'center '} width={"full"} alt={`Picture of ${data.name}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
        
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            
              color={useColorModeValue('#27374D', 'white')}

              isTruncated>
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
           
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
          
            <Box fontSize="2xl" 
              color={useColorModeValue('#00C8FF', '#00C8FF')}
              >
              <Box as="span"  fontSize="lg">
                £
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
          <Text 
              color={useColorModeValue('rgba(52, 84, 113, 0.80)', 'white')}
              noOfLines={[1, 2, 3,4]}>
   "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
</Text>
        </Box>
      </Box>    <Box
        bg={useColorModeValue('rgba(221, 230, 237, 0.30)', 'gray.800')}
        // backgroundColor={"rgba(221, 230, 237, 0.30)"}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {/* {data.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )} */}

        <Image src={data.imageURL} height={"300px"}       backgroundSize={'cover'}
      backgroundPosition={'center '} width={"full"} alt={`Picture of ${data.name}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
        
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            
              color={useColorModeValue('#27374D', 'white')}

              isTruncated>
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
           
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
          
            <Box fontSize="2xl" 
              color={useColorModeValue('#00C8FF', '#00C8FF')}
              >
              <Box as="span"  fontSize="lg">
                £
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
          <Text 
              color={useColorModeValue('rgba(52, 84, 113, 0.80)', 'white')}
              noOfLines={[1, 2, 3,4]}>
   "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
</Text>
        </Box>
      </Box>
    </Flex>
  )
}

export default SectionTwoServices


// 'use client'

// import {
//   Box,
//   Center,
//   useColorModeValue,
//   Heading,
//   Text,
//   Stack,
//   Image,
// } from '@chakra-ui/react'

// const IMAGE =
//   'https://plus.unsplash.com/premium_photo-1664457233806-e1477e52e2ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BsYXNofGVufDB8fDB8fHww'

// export default function SectionTwoServices() {
//   return (
//     <Center py={12}>
//       <Box
//         role={'group'}
//         p={6}
//         maxW={'430px'}
//         w={'full'}
//         bg={useColorModeValue('white', 'gray.800')}
//         boxShadow={'2xl'}
//         rounded={'lg'}
//         pos={'relative'}
//         zIndex={1}>
//         <Box
//           rounded={'lg'}
//           mt={-12}
//           pos={'relative'}
//           height={'230px'}
//           _after={{
//             transition: 'all .3s ease',
//             content: '""',
//             w: 'full',
//             h: 'full',
//             pos: 'absolute',
//             top: 5,
//             left: 0,
//             backgroundImage: `url(${IMAGE})`,
//             filter: 'blur(15px)',
//             zIndex: -1,
//           }}
//           _groupHover={{
//             _after: {
//               filter: 'blur(20px)',
//             },
//           }}>
//           <Image
//             rounded={'lg'}
//             height={230}
//             width={350}
//             objectFit={'cover'}
//             src={IMAGE}
//             alt="#"
//           />
//         </Box>
//         <Stack pt={10} align={'center'}>
//           <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
//             Brand
//           </Text>
//           <Heading overflowWrap={"break-word"} wordBreak={'break-word'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
//             Nice Chair, pink aaaaaaaaaaaaaaaaaaaa
//             aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//           </Heading>
//           <Stack direction={'row'} align={'center'}>
//             <Text color='blue.600' fontSize='2xl' fontWeight={600}>
//               $57
//             </Text>
           
//           </Stack>
//         </Stack>
//       </Box>
//     </Center>
//   )
// }
