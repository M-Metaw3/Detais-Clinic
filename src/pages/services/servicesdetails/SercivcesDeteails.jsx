

import React from 'react'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'
import { BsHddRackFill } from 'react-icons/bs'
import Crousel from '../../../shared/Crousel'
import Paymentform from './Paymentform'
import { useParams } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { GetData } from '../../../api/apiFactory'
import Skeletoncomp from '../../../components/Skeletoncomp'
export default function SercivcesDeteails() {

  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
    GetData(`/service/${id}`)
  })
//   if(isPending){
//     return <Skeletoncomp/>
// }
//   isPending??alert('fetching')
// console.log(data)
// console.log(id)
// console.log()

if(isPending){
  return <Skeletoncomp/>
}

 if(error){
  console.log(error)
 } 
  return (
  
        <Container  maxW={'8xl'}>
      <Box mt={"20px"}>
      <Crousel data={data&&data?.data&&data?.data?.data?.images}/>
      </Box>
      <Box
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
        width={"full"}
        >
        {/* <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex> */}
        <Stack    width={"full"} spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
            mb={"10px"}
              lineHeight={1.1}
              fontWeight={600}
              color={'#164863'} _dark={'white'}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {data&&data?.data&&data?.data?.data?.name}
            
            </Heading>
            <Text
              // color={useColorModeValue('gray.900', 'gray.400')}
        color={'#00A9FF'}_dark={{ color: "white" }}
        mb={"10px"}

              fontWeight={700}
              fontSize={'2xl'}>
              ${data&&data?.data&&data?.data?.data?.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider 
              // color={useColorModeValue('gray.900', 'gray.400')}
              borderColor={'gray.200'}_dark={{ borderColor: "white" }}

              // borderColor={useColorModeValue('gray.200', 'gray.600')} 
              />
            }>
            <Box m={"5px"}  spacing={{ base: 4, sm: 6 }}>
              <Text
              width={"100 em"}
              wordBreak={"break-word"}
                // color={useColorModeValue('gray.500', 'gray.400')}
                color={'gray.500'}_dark={{ color: "white" }}
                mb={"10px"}

                fontSize={'2xl'}
                fontWeight={'300'}>
              {data&&data?.data&&data?.data?.data?.description}
               
              </Text>
              <Text fontSize={'lg'} 
            mb={"10px"}
            >
              How to get this service ?
                <UnorderedList m={"30px"}>
  <ListItem>To register and create an account you only need your name and email, we will ask you to verify your email, once verified. you will be pront some questions related to the design setting.</ListItem>
  <ListItem>To request a design, simply go to my requests and click on the create button.It is important that you compress the STL file before uploading it to .zip . Answer the questions about the design configuration and specify the necessary settings for design.</ListItem>
  <ListItem>Once we receive your request, a designer will take the request and perform the work requested, our system will notify you of the design progress. Once the design is completed, a sample of the result will be sent to you for your review and approval.</ListItem>
  <ListItem>once the design is approved and confirmed, the payment box will be enabled to make the payment electronically through our available payment gateways. once the payment is confirmed, the platform will allow you to download the STL processed file for printing or milling.</ListItem>
</UnorderedList>
              </Text>
            </Box>
            {/* <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between lugs:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective treatment
                  inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>*/}
          </Stack> 

          <Box bgcolor={"#F5F8FA"}  borderRadius={"1px"} >
           
            <Paymentform data={data&&data?.data&&data?.data?.data}/>
          </Box>


          
{/* <Box  
            textAlign={"center"}
            border={"1px solid red"} width={"full"}>
          <Button
            rounded={'none'}
            alignItems={"center"}
           borderRadius={"3PX"}
        
            w={'25%'}
            // mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('#5F92AD', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>
          </Box> */}

      
        </Stack>
      </Box>
    </Container>
  )
}