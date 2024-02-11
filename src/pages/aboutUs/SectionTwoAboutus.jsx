import React from 'react';



import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { ReactElement } from 'react'
import Url from '../../api/ApiUrl';



const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function SectionTwoAboutus({data}) {
  console.log(data)
  return (
    <Container maxW={'20xl'} py={12} 
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={40}>
        <Stack spacing={20}  > 
      
          <Heading>{data?.title}</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          {data?.subTitle}
          </Text>

        </Stack>
        <Flex>
          <Image
       
           h={'50vh'}
            rounded={'md'}
            alt={'feature image'}
            src={
            `${Url}/AboutUs/${data?.images}`
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}