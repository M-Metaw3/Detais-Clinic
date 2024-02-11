

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
import { NavLink } from 'react-router-dom'
import Url from '../../api/ApiUrl'

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

function SectionTwoServices({dataservices}) {
  console.log(dataservices);
  const a =useColorModeValue('#27374D', 'white')
  return (
    <Flex display={"flex"} justifyContent={'flex-start'} alignContent={"center"} flexWrap={"wrap"}  p={50} w="full" >
 { dataservices&&dataservices?.map((el)=>(

<>
<NavLink to={`/services/${el._id}`}>
<Box
        // bg={useColorModeValue('rgba(221, 230, 237, 0.30)', 'gray.800')}
        bg={'rgba(221, 230, 237, 0.30)'}_dark={{ bg: "gray.800" }}
        margin={'5px'} 
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {/* {data.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )} */}

        <Image src={`${Url}/services/${el&&el?.imageCover}`} height={"300px"}       backgroundSize={'cover'}
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
            
              // color={useColorModeValue('#27374D', 'white')}
              color='#27374D'
              _dark={{ color: "white" }}

              isTruncated>
              {el&&el?.name}
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
              // color={useColorModeValue('#00C8FF', '#_dark={{ color: "white" }}')}
              color='#00C8FF' _dark={{ color: "white" }}

              >
              <Box as="span"  fontSize="lg">
                £
              </Box>
              {el&&el?.price?.toFixed(2)}
            </Box>
          </Flex>
          {/* <Text 
              // color={useColorModeValue('rgba(52, 84, 113, 0.80)', 'white')}
              noOfLines={[1, 2, 3,4]}>
  {el&&el?.description}
</Text> */}
<Text 
              color="rgba(52, 84, 113, 0.80)" _dark={{ color: "white" }}
              // color='rgba(52, 84, 113, 0.80)'

noOfLines={[1, 2, 3, 4]}>
  {el && el.description && el.description.length > 0
    ? el.description.slice(0, 30) + ' ...'
    : el.description}
</Text>
        </Box>
      </Box>    
      </NavLink> 
</>

 ))}   
    </Flex>
  )
}

export default SectionTwoServices


