
// import Image from 'next/image'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Flex
} from '@chakra-ui/react'
import moment from"moment";
import Url from '../../api/ApiUrl';
export default function SectionTwoBlog({data}) {

  return (
    <Flex  display={"flex"} flexWrap={"wrap"} justifyContent={"space-around"}  py={10}>
 {data&&data?.data?.map((el,indx)=>(     <Box key={indx}
        maxW={'445px'}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box h={'200px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <Image
          width={"100%"}
          height={"100%"}
            src={
            `${Url}/Blogs/${el?.images}`
            }
            fill
            alt="Example"
          />
        </Box>
        <Stack>
          {/* <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text> */}
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
         {el?.title}
          </Heading>
          <Text color={'gray.500'}>
   {el?.description}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          {/* <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} /> */}
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            {/* <Text fontWeight={600}>Achim Rolle</Text> */}
            <Text color={'gray.500'}>{moment(el?.createdAt).fromNow()}</Text>
          </Stack>
        </Stack>
      </Box>))}
    </Flex>
  )
}