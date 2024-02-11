// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   VStack,
//   Image,
//   Icon,
// } from '@chakra-ui/react';
// import { AiOutlineUpload } from 'react-icons/ai';
// import axios from 'axios';

// export const TestFile = () => {
//   const [name, setName] = useState('');
//   const [ratingsAverage, setRatingsAverage] = useState(4.5);
//   const [price, setPrice] = useState(0);
//   const [priceDiscount, setPriceDiscount] = useState(0);
//   const [description, setDescription] = useState('');
//   const [imageCover, setImageCover] = useState(null);
//   const [images, setImages] = useState([]);

//   const handleImageCoverChange = (event) => {
//     setImageCover(event.target.files[0]);
//   };

//   const handleImagesChange = (event) => {
//     setImages(Array.from(event.target.files));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('ratingsAverage', ratingsAverage);
//     formData.append('price', price);
//     formData.append('priceDiscount', priceDiscount);
//     formData.append('description', description);
//     formData.append('imageCover', imageCover);
//     images.forEach((image) => {
//       formData.append('images', image);
//     });

//     try {
//       const response = await axios.post('http://localhost:3111/service', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Service created:', response.data);
//       // Reset form fields
//       setName('');
//       setRatingsAverage(4.5);
//       setPrice(0);
//       setPriceDiscount(0);
//       setDescription('');
//       setImageCover(null);
//       setImages([]);
//     } catch (error) {
//       console.error('Error creating service:', error);
//     }
//   };

//   return (
//     <Box p={4}>
//       <form onSubmit={handleSubmit}>
//         <VStack spacing={4} align="start">
//           <FormControl>
//             <FormLabel>Name</FormLabel>
//             <Input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Ratings Average</FormLabel>
//             <Input
//               type="number"
//               value={ratingsAverage}
//               onChange={(e) => setRatingsAverage(e.target.value)}
//               required
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Price</FormLabel>
//             <Input
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               required
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Price Discount</FormLabel>
//             <Input
//               type="number"
//               value={priceDiscount}
//               onChange={(e) => setPriceDiscount(e.target.value)}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Description</FormLabel>
//             <Textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Image Cover</FormLabel>
//             <Input type="file" onChange={handleImageCoverChange} required />
//             {imageCover && (
//               <Image src={URL.createObjectURL(imageCover)} alt="Cover" mt={2} maxH="200px" />
//             )}
//           </FormControl>
//           <FormControl>
//             <FormLabel>Images</FormLabel>
//             <Input type="file" multiple onChange={handleImagesChange} />
//           </FormControl>
//           <Button leftIcon={<Icon as={AiOutlineUpload} />} type="submit" colorScheme="teal">
//             Create Service
//           </Button>
//         </VStack>
//       </form>
//     </Box>
//   );
// };



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
 
// export const TestFile = () => {
//   const [dailyCount, setDailyCount] = useState(0);
//   const [monthlyCount, setMonthlyCount] = useState(0);
//   const [yearlyCount, setYearlyCount] = useState(0);

//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   useEffect(() => {
//     fetchData();
//   }, [startDate, endDate]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/stats', {
//         params: {
//           startDate,
//           endDate,
//         },
//       });
//       const { daily, monthly, yearly } = response.data;

//       setDailyCount(daily);
//       setMonthlyCount(monthly);
//       setYearlyCount(yearly);
//     } catch (error) {
//       console.error('Failed to fetch statistics:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Visitor Statistics</h2>

//       <div>
//         <label>Start Date: </label>
//         <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//       </div>

//       <div>
//         <label>End Date: </label>
//         <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
//       </div>

//       <p>Daily Count: {dailyCount}</p>
//       <p>Monthly Count: {monthlyCount}</p>
//       <p>Yearly Count: {yearlyCount}</p>
//     </div>
//   );
// };


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Text, Stack, Input, Flex, Button } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export  const TestFile = () => {
  const [dailyCount, setDailyCount] = useState(0);
  const [monthlyCount, setMonthlyCount] = useState(0);
  const [yearlyCount, setYearlyCount] = useState(0);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/stats', {
        params: {
          startDate,
          endDate,
        },
      });
      const { daily, monthly, yearly } = response.data;

      setDailyCount(daily);
      setMonthlyCount(monthly);
      setYearlyCount(yearly);
    } catch (error) {
      console.error('Failed to fetch statistics:', error);
    }
  };

  return (
    <Box maxW="600px" mx="auto" mt="8">
      <Heading mb="4">Visitor Statistics</Heading>

      <Stack spacing="4">
        <Flex align="center">
          <Text mr="2">Start Date:</Text>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </Flex>

        <Flex align="center">
          <Text mr="2">End Date:</Text>
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
        </Flex>
      </Stack>

      <Stack mt="4">
        <Text>Daily Count: {dailyCount}</Text>
        <Text>Monthly Count: {monthlyCount}</Text>
        <Text>Yearly Count: {yearlyCount}</Text>
      </Stack>
    </Box>
  );
};


