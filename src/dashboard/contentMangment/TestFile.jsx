// // // import React, { useState } from 'react';
// // // import {
// // //   Box,
// // //   Button,
// // //   FormControl,
// // //   FormLabel,
// // //   Input,
// // //   Textarea,
// // //   VStack,
// // //   Image,
// // //   Icon,
// // // } from '@chakra-ui/react';
// // // import { AiOutlineUpload } from 'react-icons/ai';
// // // import axios from 'axios';

// // // export const TestFile = () => {
// // //   const [name, setName] = useState('');
// // //   const [ratingsAverage, setRatingsAverage] = useState(4.5);
// // //   const [price, setPrice] = useState(0);
// // //   const [priceDiscount, setPriceDiscount] = useState(0);
// // //   const [description, setDescription] = useState('');
// // //   const [imageCover, setImageCover] = useState(null);
// // //   const [images, setImages] = useState([]);

// // //   const handleImageCoverChange = (event) => {
// // //     setImageCover(event.target.files[0]);
// // //   };

// // //   const handleImagesChange = (event) => {
// // //     setImages(Array.from(event.target.files));
// // //   };

// // //   const handleSubmit = async (event) => {
// // //     event.preventDefault();

// // //     const formData = new FormData();
// // //     formData.append('name', name);
// // //     formData.append('ratingsAverage', ratingsAverage);
// // //     formData.append('price', price);
// // //     formData.append('priceDiscount', priceDiscount);
// // //     formData.append('description', description);
// // //     formData.append('imageCover', imageCover);
// // //     images.forEach((image) => {
// // //       formData.append('images', image);
// // //     });

// // //     try {
// // //       const response = await axios.post('http://localhost:3111/service', formData, {
// // //         headers: {
// // //           'Content-Type': 'multipart/form-data',
// // //         },
// // //       });
// // //       console.log('Service created:', response.data);
// // //       // Reset form fields
// // //       setName('');
// // //       setRatingsAverage(4.5);
// // //       setPrice(0);
// // //       setPriceDiscount(0);
// // //       setDescription('');
// // //       setImageCover(null);
// // //       setImages([]);
// // //     } catch (error) {
// // //       console.error('Error creating service:', error);
// // //     }
// // //   };

// // //   return (
// // //     <Box p={4}>
// // //       <form onSubmit={handleSubmit}>
// // //         <VStack spacing={4} align="start">
// // //           <FormControl>
// // //             <FormLabel>Name</FormLabel>
// // //             <Input
// // //               type="text"
// // //               value={name}
// // //               onChange={(e) => setName(e.target.value)}
// // //               required
// // //             />
// // //           </FormControl>
// // //           <FormControl>
// // //             <FormLabel>Ratings Average</FormLabel>
// // //             <Input
// // //               type="number"
// // //               value={ratingsAverage}
// // //               onChange={(e) => setRatingsAverage(e.target.value)}
// // //               required
// // //             />
// // //           </FormControl>
// // //           <FormControl>
// // //             <FormLabel>Price</FormLabel>
// // //             <Input
// // //               type="number"
// // //               value={price}
// // //               onChange={(e) => setPrice(e.target.value)}
// // //               required
// // //             />
// // //           </FormControl>
// // //           <FormControl>
// // //             <FormLabel>Price Discount</FormLabel>
// // //             <Input
// // //               type="number"
// // //               value={priceDiscount}
// // //               onChange={(e) => setPriceDiscount(e.target.value)}
// // //             />
// // //           </FormControl>
// // //           <FormControl>
// // //             <FormLabel>Description</FormLabel>
// // //             <Textarea
// // //               value={description}
// // //               onChange={(e) => setDescription(e.target.value)}
// // //             />
// // //           </FormControl>
// // //           <FormControl>
// // //             <FormLabel>Image Cover</FormLabel>
// // //             <Input type="file" onChange={handleImageCoverChange} required />
// // //             {imageCover && (
// // //               <Image src={URL.createObjectURL(imageCover)} alt="Cover" mt={2} maxH="200px" />
// // //             )}
// // //           </FormControl>
// // //           <FormControl>
// // //             <FormLabel>Images</FormLabel>
// // //             <Input type="file" multiple onChange={handleImagesChange} />
// // //           </FormControl>
// // //           <Button leftIcon={<Icon as={AiOutlineUpload} />} type="submit" colorScheme="teal">
// // //             Create Service
// // //           </Button>
// // //         </VStack>
// // //       </form>
// // //     </Box>
// // //   );
// // // };



// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import DatePicker from 'react-datepicker';
// // // import 'react-datepicker/dist/react-datepicker.css';
 
// // // export const TestFile = () => {
// // //   const [dailyCount, setDailyCount] = useState(0);
// // //   const [monthlyCount, setMonthlyCount] = useState(0);
// // //   const [yearlyCount, setYearlyCount] = useState(0);

// // //   const [startDate, setStartDate] = useState(new Date());
// // //   const [endDate, setEndDate] = useState(new Date());

// // //   useEffect(() => {
// // //     fetchData();
// // //   }, [startDate, endDate]);

// // //   const fetchData = async () => {
// // //     try {
// // //       const response = await axios.get('http://localhost:3001/stats', {
// // //         params: {
// // //           startDate,
// // //           endDate,
// // //         },
// // //       });
// // //       const { daily, monthly, yearly } = response.data;

// // //       setDailyCount(daily);
// // //       setMonthlyCount(monthly);
// // //       setYearlyCount(yearly);
// // //     } catch (error) {
// // //       console.error('Failed to fetch statistics:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Visitor Statistics</h2>

// // //       <div>
// // //         <label>Start Date: </label>
// // //         <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
// // //       </div>

// // //       <div>
// // //         <label>End Date: </label>
// // //         <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
// // //       </div>

// // //       <p>Daily Count: {dailyCount}</p>
// // //       <p>Monthly Count: {monthlyCount}</p>
// // //       <p>Yearly Count: {yearlyCount}</p>
// // //     </div>
// // //   );
// // // };


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // import DatePicker from 'react-datepicker';
// // import 'react-datepicker/dist/react-datepicker.css';

// // export  const TestFile = () => {
// //   const [dailyCount, setDailyCount] = useState(0);
// //   const [monthlyCount, setMonthlyCount] = useState(0);
// //   const [yearlyCount, setYearlyCount] = useState(0);

// //   const [startDate, setStartDate] = useState(new Date());
// //   const [endDate, setEndDate] = useState(new Date());

// //   useEffect(() => {
// //     fetchData();
// //   }, [startDate, endDate]);

// //   const fetchData = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:3001/stats', {
// //         params: {
// //           startDate,
// //           endDate,
// //         },
// //       });
// //       const { daily, monthly, yearly } = response.data;

// //       setDailyCount(daily);
// //       setMonthlyCount(monthly);
// //       setYearlyCount(yearly);
// //     } catch (error) {
// //       console.error('Failed to fetch statistics:', error);
// //     }
// //   };

// //   return (
// //     <Box maxW="600px" mx="auto" mt="8">
// //       <Heading mb="4">Visitor Statistics</Heading>

// //       <Stack spacing="4">
// //         <Flex align="center">
// //           <Text mr="2">Start Date:</Text>
// //           <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
// //         </Flex>

// //         <Flex align="center">
// //           <Text mr="2">End Date:</Text>
// //           <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
// //         </Flex>
// //       </Stack>

// //       <Stack mt="4">
// //         <Text>Daily Count: {dailyCount}</Text>
// //         <Text>Monthly Count: {monthlyCount}</Text>
// //         <Text>Yearly Count: {yearlyCount}</Text>
// //       </Stack>
// //     </Box>
// //   );
// // };















































































// import React  from 'react';
// import Rating from '@mui/material/Rating';
// import StarIcon from '@mui/icons-material/Star';
// import { useState } from 'react';
// import { Box, Flex, Image,Select,AvatarGroup,Avatar, Text, Input, InputGroup, InputLeftElement, } from "@chakra-ui/react";
// import { Link } from '@mui/material/Link';
// import background from '../../assets/Sign in.png'

// export  const TestFile = () => {
// const isActive = (path,pathname) => {
//     console.log(path,pathname)
//     return pathname === path;
//   };
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [file, setFile] = useState(null);
//   const [c, setc] = useState(false);

//   const [fileName, setFileName] = useState('');

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);
//     setFileName(selectedFile.name);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const selectedFile = event.dataTransfer.files[0];
//     setFile(selectedFile);
//     setFileName(selectedFile.name);
//   };

//   const handleInputChange = (event) => {
//     setFile(null);
//     setFileName(event.target.value);
//   };

//    const handlerc = (event) => {
// console.log("dddddddd")
//   };
//   const [ratingValue, setRatingValue] = useState(null);



//   return (



// <>

// {/* 

// <label
//       htmlFor="fileInput"
//       className="flex justify-center items-center px-16 py-11 mt-3 text-sm font-light leading-5 text-cyan-600 whitespace-nowrap bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:px-5 max-md:max-w-full cursor-pointer"
//       onDragOver={handleDragOver}
//       onDrop={handleDrop}
//     >
//       <div className="flex flex-col max-w-full w-[151px]">
//         {file ? (
//           <img
//             loading="lazy"
//             src={URL.createObjectURL(file)}
//             alt="Uploaded File"
//             className="self-center aspect-[0.78] w-[38px] mb-2"
//           />
//         ) : (
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4be2e426e23efa98427d9869151ccd96fcb788b80b933dbdf88add445b8a9?"
//             alt="Placeholder"
//             className="self-center aspect-[0.78] w-[38px]"
//           />
//         )}
//         <div className="mt-4">
//           <span>{file ? fileName : 'Upload your design file'}</span>
//         </div>
//       </div>
//       <input
//         type="file"
//         id="fileInput"
//         accept=".jpg, .jpeg, .png"
//         onChange={handleFileChange}
//         className="hidden"
//       />
//       <input
//         type="text"
//         value={fileName}
//         onChange={handleInputChange}
//         placeholder="Type file name"
//         className="ml-4 border border-solid border-gray-300 px-3 py-2 rounded-md"
//       />
//     </label>  */}
// {/*     

// <div className="flex flex-col bg-neutral-100">
//       <div className="pr-7 w-full bg-white shadow-sm max-md:pr-5 max-md:max-w-full">
//         <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//           <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
//             <div className="flex grow gap-5 justify-between items-center text-base leading-6 capitalize text-gray-950 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f74f5997aaff27addc571360ed3f45a2f1e0375e0a3d59eeac826423c7944e7?"
//                 className="self-stretch max-w-full aspect-[1.27] fill-white w-[145px]"
//               />
//               <div className="self-stretch my-auto font-bold text-fuchsia-800">
//                 Home
//               </div>
//               <div className="flex-auto self-stretch my-auto">My Bookings</div>
//               <div className="self-stretch my-auto">Category's</div>
//               <div className="self-stretch my-auto">Contact us</div>
//               <div className="grow self-stretch my-auto whitespace-nowrap">
//                 About us
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
//             <div className="flex gap-5 self-stretch my-auto whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//               <div className="justify-center px-4 py-5 my-auto text-base font-semibold text-center text-white capitalize bg-fuchsia-800 rounded-xl">
//                 join as Service provider
//               </div>
//               <div className="flex gap-3 max-md:flex-wrap max-md:max-w-full">
//                 <div className="flex flex-col flex-1 justify-center my-auto text-base capitalize bg-white text-zinc-500">
//                   <div className="flex flex-col justify-center py-4 w-full rounded-2xl border border-solid bg-zinc-50 border-[color:var(--Gray-2,#7E7E7E)]">
//                     <div className="flex gap-1.5 justify-between">
//                       <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/3836eb6477bfc11ae2b3d185a782eaf3b7b585951080cd36ee0c7b483f18bb63?"
//                         className="w-6 aspect-square"
//                       />
//                       <div className="flex-auto my-auto">Search...</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4b6503126240e4a482579d1846246ec9570e23f204ab5012bfe89575c28cd14?"
//                   className="my-auto w-14 aspect-square"
//                 />
//                 </div>
              
//                 <Box position={'absolute'} border={'1px solid red'} right={"30%"} top={"6%"} className="flex flex-col px-2.5 py-3.5 font-medium capitalize bg-white rounded-2xl shadow-lg max-w-full">
//       <div className="flex gap-5 justify-between">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e532e9f8ecb664a0c585eabc3382b581643dc40506d3d14f8b5229d7943de9d?"
//           className="my-auto aspect-square w-[73px]"
//         />
//         <div className="flex flex-col flex-1">
//           <div className="text-lg leading-7 text-stone-950">
//             your order NO. #6487393 has been shipped successfully
//           </div>
//           <div className="flex gap-1 self-start mt-2 text-base leading-4 whitespace-nowrap text-zinc-500">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/35da571dd80d9b4eda13f3883c355f3f08e1c3a306f23d4a76b8fbb36637b53b?"
//               className="aspect-square w-[18px]"
//             />
//             <div className="grow">1 day</div>
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-5 justify-between mt-5">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e532e9f8ecb664a0c585eabc3382b581643dc40506d3d14f8b5229d7943de9d?"
//           className="my-auto aspect-square w-[73px]"
//         />
//         <div className="flex flex-col flex-1">
//           <div className="text-lg leading-7 text-stone-950">
//             your order NO. #6487393 has been shipped successfully
//           </div>
//           <div className="flex gap-1 self-start mt-2 text-base leading-4 whitespace-nowrap text-zinc-500">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/35da571dd80d9b4eda13f3883c355f3f08e1c3a306f23d4a76b8fbb36637b53b?"
//               className="aspect-square w-[18px]"
//             />
//             <div className="grow">1 day</div>
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-5 justify-between mt-5">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/1df73e266804a16ff442a322980b90c2acc4c789f0b58770d6d048b4c4cb726c?"
//           className="my-auto aspect-square w-[73px]"
//         />
//         <div className="flex flex-col flex-1">
//           <Box border={'1px solid red'}wordBreak={"break-word"} flexWrap={"wrap"}  className="text-lg leading-7 break-words text-neutral-400">
//             your order NO. #6487393 has been shipped successfully
//           </Box>
//           <div className="flex gap-1 self-start mt-2 text-base leading-4 whitespace-nowrap text-zinc-500">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/35da571dd80d9b4eda13f3883c355f3f08e1c3a306f23d4a76b8fbb36637b53b?"
//               className="aspect-square w-[18px]"
//             />
//             <div className="grow">1 day</div>
//           </div>
//         </div>
//       </div>
//     </Box>                
//                 <div className="flex gap-0 self-start px-3 py-5 text-base capitalize text-gray-950">
//                   <div className="grow my-auto">EN</div>
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/e219b116fba2ca047e0737584acf5b6813599f6eb38105c163f8830337e8ea71?"
//                     className="w-6 aspect-square"
//                   />
//                 </div>
//                 <Box   className="flex gap-2 justify-between">
//                   <img
//                     loading="lazy"
//                     srcSet="..."
//                     className="w-16 rounded-full aspect-square"
//                   />
//                   <div className="flex gap-5 pt-2 pr-4 my-auto">
//                     <div className="flex flex-col flex-1">
//                       <div className="text-sm text-zinc-900">Welcome</div>
//                       <div className="mt-1 text-lg text-zinc-900">
//                         Mohamed Ahmed
//                       </div>
//                     </div>
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/f28740ab97823d9cfa4443b9ea34dd900aa63f7a15b8e5c6ed87d4483517d347?"
//                       className="my-auto w-4 aspect-[2] stroke-[1.5px] stroke-zinc-900"
//                     />
//                   </div>
                  
//                 <Box position={'absolute'} border={'1px solid red'} zIndex={"999"} right={"20%"} top={"6%"}>
//                 <div className="flex flex-col justify-center capitalize max-w-[366px]">
//       <div className="flex flex-col px-6 py-12 w-full bg-white rounded-2xl shadow-lg">
//         <div className="flex gap-5 justify-between">
//           <img
//             loading="lazy"
//             srcSet="..."
//             className="aspect-square w-[95px]"
//           />
//           <div className="flex flex-col flex-1 py-2.5 my-auto">
//             <div className="text-lg font-semibold leading-9 whitespace-nowrap text-gray-950">
//               Mohamed Ahmed Ali
//             </div>
//             <div className="mt-4 text-base leading-7 text-zinc-500">
//               +20 1113 400 683
//             </div>
//           </div>
//         </div>
//         <div className="shrink-0 mt-8 h-1.5 bg-neutral-100 rounded-[50px]" />
//         <div className="flex gap-2 justify-between px-6 py-5 mt-4 text-base font-semibold bg-white rounded-xl border border-solid border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/30f2dcd74d867a6a4c4beca9c6d73f7f1347f80977a54b80536cf6fb371fe1bd?"
//             className="w-6 aspect-square"
//           />
//           <div className="flex-auto my-auto">Personal Information</div>
//         </div>
//         <div className="flex gap-2 justify-between px-6 py-5 mt-4 text-base font-semibold bg-white rounded-xl border border-solid border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/32dad1d7e2502fceaddb3bfda9df3e6e86531613f01903d89a19fdcbdd368aca?"
//             className="w-6 aspect-square"
//           />
//           <div className="flex-auto self-start mt-2">Shipping Addresses</div>
//         </div>
//         <div className="flex gap-2 justify-between px-6 py-5 mt-4 text-base font-semibold bg-white rounded-xl border border-solid border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf83899269ab12c3b2cabdc674a66af3c1232a49c7178c7547e0662c01ee879c?"
//             className="w-6 aspect-square"
//           />
//           <div className="flex-auto self-start mt-2">Payment methods</div>
//         </div>
//         <div className="flex gap-2 justify-between px-6 py-5 mt-4 text-base font-semibold bg-white rounded-xl border border-solid border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/87543c269c5ee3dae8d6fbe8ad87733fb587a4ff079905b8770dd225a2d5c401?"
//             className="w-6 aspect-square"
//           />
//           <div className="flex-auto my-auto">latest Orders</div>
//         </div>
//         <div className="flex gap-2 justify-between px-6 py-5 mt-4 text-base font-semibold bg-white rounded-xl border border-solid border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/494d3d1f6f014ce76de9db32fcf848b07886f6daffd64af2a85c0aed871e1add?"
//             className="w-6 aspect-square"
//           />
//           <div className="flex-auto my-auto">Task buzz credits</div>
//         </div>
//         <div className="flex gap-2 justify-between px-6 py-5 mt-4 mb-1 text-base font-semibold bg-white rounded-xl border border-solid border-[color:var(--Gray-6,#F5F5F5)] text-neutral-700">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1fdb84b377d0240e731d723b6db4bd44bc9f8a95e6d6216d2897c2ae74f92c4?"
//             className="w-6 aspect-square"
//           />
//           <div className="flex-auto my-auto">Track Order </div>
//         </div>
//       </div>
//     </div>
             
//                 </Box>
//                 </Box>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex overflow-hidden relative flex-col items-start px-16 pt-12 pb-6 w-full text-lg whitespace-nowrap min-h-[195px] max-md:px-5 max-md:max-w-full">
//         <img
//           loading="lazy"
//           srcSet="..."
//           className="object-cover absolute inset-0 size-full"
//         />
//         <div className="flex relative gap-0.5 mt-28 ml-28 max-md:mt-10 max-md:ml-2.5">
//           <div className="font-light text-stone-300">Home</div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/442ff4cccd32cca65f0d0cfcade8b8738b80c5a4edeeeaf08df3b071710cc59f?"
//             className="w-4 aspect-square"
//           />
//           <div className="grow font-bold text-neutral-100">Search Results</div>
//         </div>
//       </div>
//       <div className="self-center mt-11 w-full max-w-[1590px] max-md:mt-10 max-md:max-w-full">
//         <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//           <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
//             <div className="flex flex-col justify-center max-md:mt-10">
//               <div className="flex flex-col px-3.5 py-4 w-full bg-white rounded-2xl shadow-lg">
//                 <div className="flex gap-2 self-start text-lg leading-5 text-center capitalize whitespace-nowrap text-stone-950">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/5746ea82c748e47102b4aeb9e02316bd6ab53fc77427945cd42836f3da2b2b5f?"
//                     className="w-6 aspect-square"
//                   />
//                   <div>Filter</div>
//                 </div>
//                 <div className="mt-4 max-w-full h-0.5 rounded-3xl bg-neutral-100 w-[328px] max-md:mr-2.5" />
//                 <div className="mt-4 text-lg font-semibold leading-5 text-slate-600">
//                   Price
//                 </div>
//                 <div className="flex gap-5 justify-between py-0.5 pr-1.5 mt-4 w-full font-semibold whitespace-nowrap">
//                   <div className="flex gap-5 justify-between items-start">
//                     <div className="flex flex-col self-end mt-12 text-xs leading-4 text-stone-950 max-md:mt-10">
//                       <div className="shrink-0 h-5 bg-fuchsia-800 rounded-full" />
//                       <div className="mt-1">0</div>
//                     </div>
//                     <div className="flex flex-col self-start text-sm leading-4 text-white">
//                       <div className="justify-center items-center px-2.5 h-11 bg-fuchsia-800 rounded-2xl aspect-square">
//                         500
//                       </div>
//                       <div className="self-center mt-2 bg-amber-600 rounded-md h-[11px] w-[3px]" />
//                     </div>
//                   </div>
//                   <div className="flex flex-col self-end mt-12 text-xs leading-4 text-stone-950 max-md:mt-10">
//                     <div className="shrink-0 h-5 rounded-full bg-zinc-300" />
//                     <div className="mt-1">5000</div>
//                   </div>
//                 </div>
//                 <div className="flex gap-1 pr-20 mt-4 whitespace-nowrap text-zinc-800 max-md:pr-5">
//                   <div className="grow my-auto text-base">from</div>
//                   <div className="flex flex-col flex-1 justify-center text-xs font-semibold leading-4">
//                     <div className="justify-center py-4 pr-3 pl-14 bg-white rounded-lg border border-solid border-[color:var(--Gray-5,#E0E0E0)] max-md:pl-5">
//                       EGP
//                     </div>
//                   </div>
//                   <div className="my-auto text-base text-stone-950">to</div>
//                   <div className="flex flex-col flex-1 justify-center font-semibold">
//                     <div className="flex gap-1.5 justify-between px-8 py-4 bg-white rounded-lg border border-solid border-[color:var(--Gray-5,#E0E0E0)] max-md:px-5">
//                       <div className="text-base">to</div>
//                       <div className="text-xs leading-4">EGP</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-8 text-lg font-semibold leading-5 text-slate-600">
//                   Offers
//                 </div>
//                 <div className="flex gap-2.5 justify-between mt-5">
//                   <div className="flex flex-col justify-center aspect-square">
//                     <div className="shrink-0 h-7 rounded-md border border-solid border-[color:var(--G-Soft,#D2D2D2)]" />
//                   </div>
//                   <div className="flex-auto my-auto text-sm leading-5 capitalize text-zinc-800">
//                     Best Selling
//                   </div>
//                 </div>
//                 <div className="flex gap-2.5 justify-between mt-5">
//                   <div className="flex flex-col justify-center aspect-square">
//                     <div className="shrink-0 h-7 rounded-md border border-solid border-[color:var(--G-Soft,#D2D2D2)]" />
//                   </div>
//                   <div className="flex-auto my-auto text-sm leading-5 capitalize text-zinc-800">
//                     with Offer
//                   </div>
//                 </div>
//                 <div className="flex gap-2.5 justify-between mt-5">
//                   <div className="flex flex-col justify-center aspect-square">
//                     <div className="shrink-0 h-7 rounded-md border border-solid border-[color:var(--G-Soft,#D2D2D2)]" />
//                   </div>
//                   <div className="flex-auto my-auto text-sm leading-5 capitalize text-zinc-800">
//                     Without Offer
//                   </div>
//                 </div>
//                 <div className="justify-center items-center px-16 py-5 mt-20 text-base font-semibold text-center text-white capitalize bg-fuchsia-800 rounded-xl max-md:px-5 max-md:mt-10">
//                   Apply{" "}
//                 </div>
//                 <div className="justify-center items-center px-16 py-5 mt-4 text-base font-semibold text-center capitalize rounded-xl border border-solid border-[color:var(--Gray-3,#969696)] text-neutral-400 max-md:px-5">
//                   Rest{" "}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
//             <div className="flex flex-col grow px-5 max-md:mt-10 max-md:max-w-full">
//               <div className="text-2xl leading-5 text-center capitalize text-stone-950 max-md:max-w-full">
//                 <span className="font-bold">Cleaning</span> Search Results: 14{" "}
//               </div>
//               <div className="px-px mt-9 max-md:max-w-full">
//                 <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//                   <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
//                     <div className="flex flex-col grow justify-center max-md:mt-10">
//                       <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
//                         <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
//                           <img
//                             loading="lazy"
//                             srcSet="..."
//                             className="object-cover absolute inset-0 size-full"
//                           />
//                           <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
//                             Most popular
//                           </div>
//                         </div>
//                         <div className="flex flex-col px-3 mt-3">
//                           <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
//                             <div className="grow">4.7</div>
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dcb9ca6777daef24dc25bc0ab780933245f67b91eaa94ce38d47ec9a0429019?"
//                               className="w-3.5 aspect-square"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/45f3394cb072d94dd17e6798e4348afaebfd1006952b1d7ffbc06927c8d01028?"
//                               className="w-3.5 aspect-square"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/d18fea56abf370184ace66b12755c667cf8d261e89f4f8bcf775bc031cff3799?"
//                               className="aspect-[1.08] w-[15px]"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/a42e3ea499ec477d47e6628997e3442a216c7e1b6f478f9afbc4606da48fbbf2?"
//                               className="aspect-[1.08] w-[15px]"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd845be1024b26e29b0e4faba7a177cd8f7175f6e5a1471d872e67661f8ef465?"
//                               className="w-1 aspect-[0.29]"
//                             />
//                           </div>
//                           <div className="flex gap-0 justify-between pt-1.5 mt-7 text-center capitalize">
//                             <div className="flex flex-col flex-1">
//                               <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
//                                 Part-time Home Cleaners
//                               </div>
//                               <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
//                                 Cleaning{" "}
//                               </div>
//                             </div>
//                             <div className="grow self-end mt-12 text-xl leading-7 text-fuchsia-900 whitespace-nowrap max-md:mt-10">
//                               20-50 LE
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//                     <div className="flex flex-col grow justify-center max-md:mt-10">
//                       <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
//                         <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
//                           <img
//                             loading="lazy"
//                             srcSet="..."
//                             className="object-cover absolute inset-0 size-full"
//                           />
//                           <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
//                             Most popular
//                           </div>
//                         </div>
//                         <div className="flex flex-col px-3 mt-3">
//                           <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
//                             <div className="grow">4.7</div>
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b0d28bc55fd1a7666de6dc5a29052a7b851034f048eccb2af35482ef43174e5?"
//                               className="w-3.5 aspect-square"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/43d945c9c2906bb3f725f8cea3ace95cf745192e919b64e3ee8d4e31e3bea714?"
//                               className="w-3.5 aspect-square"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/a036f7c12403430929eb67f7c276facf80038b9a690e7628645da80396afd2d9?"
//                               className="aspect-[1.08] w-[15px]"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/c156a71bec70ed8773aea8fba3ffa5539acc99f1c96b6b1bc74e02c907b4b778?"
//                               className="aspect-[1.08] w-[15px]"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/b208a467fcc0c6689c57dea1c600bc0ee653c0caadef92214230f56724542ab8?"
//                               className="w-1 aspect-[0.29]"
//                             />
//                           </div>
//                           <div className="flex gap-0 justify-between pt-1.5 mt-7 text-center capitalize">
//                             <div className="flex flex-col flex-1">
//                               <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
//                                 Part-time Home Cleaners
//                               </div>
//                               <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
//                                 Cleaning{" "}
//                               </div>
//                             </div>
//                             <div className="grow self-end mt-12 text-xl leading-7 text-fuchsia-900 whitespace-nowrap max-md:mt-10">
//                               20-50 LE
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//                     <div className="flex flex-col grow justify-center max-md:mt-10">
//                       <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
//                         <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
//                           <img
//                             loading="lazy"
//                             srcSet="..."
//                             className="object-cover absolute inset-0 size-full"
//                           />
//                           <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
//                             Most popular
//                           </div>
//                         </div>
//                         <div className="flex flex-col px-3 mt-3">
//                           <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
//                             <div className="grow">4.7</div>
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/47fc2df21c517bcbe5542eac072146a09b088759a7eee5ce726ba6ce3a241a44?"
//                               className="w-3.5 aspect-square"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/8abfdc225035a86c1e1c7ee4246807b4525255f73ace70ba8645073cb1526a45?"
//                               className="w-3.5 aspect-square"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/0106cfb31c3181e5c8c5605acb016499e4f3f509b1fc22019abb9a6872ef5bf0?"
//                               className="aspect-[1.08] w-[15px]"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/43811d264c7e9aeed3617cfeedb953fb8800e48ae6b1ef889ea6e64a221a0deb?"
//                               className="aspect-[1.08] w-[15px]"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/8047059036f89c2d322c55dd83e6f2332ad10a3983d6be76ec1ea0aeb644aef6?"
//                               className="w-1 aspect-[0.29]"
//                             />
//                           </div>
//                           <div className="flex gap-0 justify-between pt-1.5 mt-7 text-center capitalize">
//                             <div className="flex flex-col flex-1">
//                               <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
//                                 Part-time Home Cleaners
//                               </div>
//                               <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
//                                 Cleaning{" "}
//                               </div>
//                             </div>
//                             <div className="grow self-end mt-12 text-xl leading-7 text-fuchsia-900 whitespace-nowrap max-md:mt-10">
//                               20-50 LE
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="px-px mt-9 max-md:max-w-full">
//                 <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//                   <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
//                     <div className="flex flex-col grow justify-center max-md:mt-10">
//                       <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
//                         <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
//                           <img
//                             loading="lazy"
//                             srcSet="..."
//                             className="object-cover absolute inset-0 size-full"
//                           />
//                           <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
//                             Most popular
//                           </div>
//                         </div>
//                         <div className="flex flex-col px-3 mt-3">
//                           <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
//                             <div className="grow">4.7</div>
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/e59ce9f4772982c8fa4e7a9dff7e23f9b166adff986c9d9c760981a41bcccf8d?"
//                               className="w-3.5 aspect-square"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e6f0df28c01c3a8c490142c80c7a292621711c766c22bbd775b4eee93c83dbb?"
//                               className="w-3.5 aspect-square"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc2ac3c7de46dbaedfca0acf8e2e04f574c2f41a33c309ac436a9069a6a5fa6e?"
//                               className="aspect-[1.08] w-[15px]"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/2004f68f55d5aeec7de3ecab3012d775856490b4177ffd65bd60648f8c714eb3?"
//                               className="aspect-[1.08] w-[15px]"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bb866419263b46b3a39410643978c66c9b5692cd0608a9f1a873c7631dcb0de?"
//                               className="w-1 aspect-[0.29]"
//                             />
//                           </div>
//                           <div className="flex gap-0 justify-between pt-1.5 mt-7 text-center capitalize">
//                             <div className="flex flex-col flex-1">
//                               <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
//                                 Part-time Home Cleaners
//                               </div>
//                               <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
//                                 Cleaning{" "}
//                               </div>
//                             </div>
//                             <div className="grow self-end mt-12 text-xl leading-7 text-fuchsia-900 whitespace-nowrap max-md:mt-10">
//                               20-50 LE
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//                     <div className="flex flex-col grow justify-center max-md:mt-10">
//                       <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
//                         <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
//                           <img
//                             loading="lazy"
//                             srcSet="..."
//                             className="object-cover absolute inset-0 size-full"
//                           />
//                           <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
//                             Most popular
//                           </div>
//                         </div>
//                         <div className="flex flex-col px-3 mt-3">
//                           <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
//                             <div className="grow">4.7</div>
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/b09061f1fbf5cbc327431fcd4872cc7b9f3248a43cc46614e9125eae4938f8ed?"
//                               className="w-3.5 aspect-square"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/4538e51f5013a8885bc1d2fb55297f65310ebb5907e1118359987f0277157479?"
//                               className="w-3.5 aspect-square"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dbeceed7b8ac99f57bff3cb7d9866395abfa76e281a141f6a68b1e7e06a33d5?"
//                               className="aspect-[1.08] w-[15px]"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cce11feeb8842886693825310e7d96e5d8110d7cf1b5165e5a309ddc3e543ab?"
//                               className="aspect-[1.08] w-[15px]"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bbdddf6c89acbca6cc24bafc3d5d961d21d2320717b65af71698dade6aec4d5?"
//                               className="w-1 aspect-[0.29]"
//                             />
//                           </div>
//                           <div className="flex gap-0 justify-between pt-1.5 mt-7 text-center capitalize">
//                             <div className="flex flex-col flex-1">
//                               <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
//                                 Part-time Home Cleaners
//                               </div>
//                               <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
//                                 Cleaning{" "}
//                               </div>
//                             </div>
//                             <div className="grow self-end mt-12 text-xl leading-7 text-fuchsia-900 whitespace-nowrap max-md:mt-10">
//                               20-50 LE
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//                     <div className="flex flex-col grow justify-center max-md:mt-10">
//                       <div className="flex flex-col pb-5 bg-white rounded-2xl shadow-lg">
//                         <div className="flex overflow-hidden relative flex-col items-end pt-3.5 pr-2.5 pb-12 pl-16 w-full text-lg leading-7 text-center text-yellow-700 capitalize whitespace-nowrap aspect-[1.22] max-md:pl-5">
//                           <img
//                             loading="lazy"
//                             srcSet="..."
//                             className="object-cover absolute inset-0 size-full"
//                           />
//                           <div className="relative justify-center px-2.5 py-1.5 mb-36 bg-white rounded-lg max-md:mb-10">
//                             Most popular
//                           </div>
//                         </div>
//                         <div className="flex flex-col px-3 mt-3">
//                           <div className="flex gap-1.5 self-start text-xl leading-8 whitespace-nowrap text-zinc-700">
//                             <div className="grow">4.7</div>
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/b08b71269661095361f9a0edc89e63487e3827b0cb8117c4b0a6f014e4fcad46?"
//                               className="w-3.5 aspect-square"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/48dc7543e4f0e70b1b3e1570642cb9f0f06f6a1dfaa792b8945ca0559ca8baf4?"
//                               className="w-3.5 aspect-square"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/a86dbcb6e75f3710695d63dba3418003a3eba4a3c95fd9e05b8500d1e609fd1e?"
//                               className="aspect-[1.08] w-[15px]"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/60baa442079d8f54f4440b797bf1e8bd3a9d173eb7201940a2b6bbf356562a54?"
//                               className="aspect-[1.08] w-[15px]"
//                             />
//                             <img
//                               loading="lazy"
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/825607649c74c58c43a5947a2e9c4168883ea30f3649dcfc34a87d9053717b65?"
//                               className="w-1 aspect-[0.29]"
//                             />
//                           </div>
//                           <div className="flex gap-0 justify-between pt-1.5 mt-7 text-center capitalize">
//                             <div className="flex flex-col flex-1">
//                               <div className="text-xl leading-7 whitespace-nowrap text-stone-950">
//                                 Part-time Home Cleaners
//                               </div>
//                               <div className="justify-center px-2.5 py-1.5 mt-2.5 text-lg leading-7 text-green-600 bg-green-100 rounded-lg">
//                                 Cleaning{" "}
//                               </div>
//                             </div>
//                             <div className="grow self-end mt-12 text-xl leading-7 text-fuchsia-900 whitespace-nowrap max-md:mt-10">
//                               20-50 LE
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col justify-center self-center px-1 mt-9 max-w-full text-xl whitespace-nowrap text-stone-950 w-[235px]">
//                 <div className="flex gap-4 items-center px-px">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6e2c87caab525dfa3c06f1f4e7e0360b1abbfe325923523d82033e0b527145b?"
//                     className="self-stretch aspect-square w-[34px]"
//                   />
//                   <div className="self-stretch my-auto text-fuchsia-800">1</div>
//                   <div className="self-stretch my-auto">2</div>
//                   <div className="self-stretch my-auto">3</div>
//                   <div className="self-stretch my-auto">4</div>
//                   <div className="self-stretch my-auto">.....</div>
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/6819e41e566bc283cc2392721228bdeae19aaefbab68f64668e4c5e4945bee82?"
//                     className="self-stretch aspect-square w-[34px]"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col pt-12 mt-14 w-full bg-slate-950 max-md:mt-10 max-md:max-w-full">
//         <div className="self-center mt-1 w-full max-w-[1479px] max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//             <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
//                 <div className="px-5 max-md:max-w-full">
//                   <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//                     <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
//                       <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce919e01f45300b55611d577ac0b8fee423a244971c717191e55b4b301b739c1?"
//                         className="max-w-full aspect-[1.45] w-[119px] max-md:mt-7"
//                       />
//                     </div>
//                     <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
//                       <div className="text-lg text-white capitalize max-md:mt-7 max-md:max-w-full">
//                         We, at P.Zone, pride ourselves in delivering the finest
//                         quality suited for our customers' needs and will go to
//                         great lengths to ensure their service satisfaction.As a
//                         leading industry player, we strive to provide top-rated
//                         services{" "}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 justify-between px-5 mt-6 text-base leading-6 text-zinc-50 max-md:flex-wrap max-md:max-w-full">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/49c3ff5a8b713349c43fe409770509854d590b692c581d76898824aee35a5962?"
//                     className="self-start w-7 aspect-square"
//                   />
//                   <div className="flex-auto max-md:max-w-full">
//                     <span className="">Phone</span>
//                     <br />
//                     <span className="">
//                       General Manager: Mrs. Magda Abdel-Razek
//                     </span>
//                     <br />
//                     <span className="">
//                       (+2) 01222285276 - 01222285279 - 01222274885
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex gap-4 justify-between pr-5 mt-7 text-base leading-6 text-zinc-50 max-md:flex-wrap max-md:max-w-full">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/4968b38a02420620fa18c439b5c6e688ba6d0f8e8da25631f6ee82a33e97d752?"
//                     className="self-start w-7 aspect-square"
//                   />
//                   <div className="flex-auto max-md:max-w-full">
//                     <span className="">Email Address</span>
//                     <br />
//                     <span className="">ceo@bigtime-int.com</span>
//                     <br />
//                     <span className="">
//                       gm@bigtime-int.com - sales@bigtime-int.com
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex gap-5 justify-between px-5 mt-12 max-w-full w-[215px] max-md:mt-10">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/845bf7ecf472dbe001ae19e38c9e1b6eb2df7e4de4ab30157e958b49b5e5e390?"
//                     className="flex-1 shrink-0 w-full aspect-square"
//                   />
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/b158a9803e9b6a7406875dc867e344899cb308283193703f243092fc1033c628?"
//                     className="flex-1 shrink-0 w-full aspect-square"
//                   />
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/df1da45cf413d5d3284c9a6d89ef52197c4208a7b3b2fe87fe66118820a8b86d?"
//                     className="flex-1 shrink-0 w-full aspect-square"
//                   />
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc09e3c4de6cea3cd04d477105d4014183ffa1860faadd0fc2e932dc47cda960?"
//                     className="flex-1 shrink-0 w-full aspect-square"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
//               <div className="max-md:mt-10 max-md:max-w-full">
//                 <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//                   <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
//                     <div className="flex flex-col grow px-5 text-base capitalize text-stone-300 max-md:mt-10">
//                       <div className="text-2xl text-white">Categories </div>
//                       <div className="mt-4 whitespace-nowrap">
//                         Maintenance Services
//                       </div>
//                       <div className="mt-4 whitespace-nowrap">
//                         Renovation Services
//                       </div>
//                       <div className="mt-4 whitespace-nowrap">
//                         Engineering services
//                       </div>
//                       <div className="mt-4">Cleaning Services </div>
//                       <div className="mt-4">Moving Services </div>
//                       <div className="mt-4">General Services </div>
//                       <div className="mt-4">Salon Services</div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
//                     <div className="px-5 max-md:mt-10 max-md:max-w-full">
//                       <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//                         <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
//                           <div className="flex flex-col text-base capitalize whitespace-nowrap text-stone-300 max-md:mt-10">
//                             <div className="text-2xl text-white">Career</div>
//                             <div className="mt-4">hired</div>
//                             <div className="mt-4">See our jobs</div>
//                           </div>
//                         </div>
//                         <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
//                           <div className="flex flex-col text-base capitalize text-stone-300 max-md:mt-10">
//                             <div className="text-2xl text-white">Service</div>
//                             <div className="mt-4">Hire professional</div>
//                             <div className="mt-4 whitespace-nowrap">
//                               Book a new request
//                             </div>
//                           </div>
//                         </div>
//                         <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
//                           <div className="flex flex-col grow text-base capitalize text-stone-300 max-md:mt-10">
//                             <div className="text-2xl text-white">FQA</div>
//                             <div className="mt-4">Contact us</div>
//                             <div className="mt-4">Who are we ? </div>
//                             <div className="mt-4 whitespace-nowrap">
//                               Terms & conditions{" "}
//                             </div>
//                             <div className="mt-4">Privacy & Policy </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>  
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="justify-center items-center px-16 py-5 mt-14 w-full text-base capitalize bg-gray-900 text-neutral-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
//           <span className="text-neutral-400">
//             © 2023 All right reserved by{" "}
//           </span>
//           <span className="text-neutral-400">Task buzz International</span>
//           <span className="text-neutral-400">Developed By </span>
//           <span className="text-neutral-400">Knock Target</span>
//         </div>
//       </div>
//     </div>
//  */}




// {/* 

// <div className="flex overflow-hidden relative flex-col justify-center items-start px-16 py-12 text-xl whitespace-nowrap min-h-[1080px] text-slate-600 text-opacity-40 max-md:px-5">
//       <img
//         loading="lazy"
//         src={background}
//         className="object-cover absolute inset-0 size-full"
//       />
//       <div className="flex relative flex-col px-20 py-12 mt-40 ml-28 max-w-full rounded-3xl shadow-lg bg-white bg-opacity-80 w-[750px] max-md:px-5 max-md:mt-10">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb668fa04703ff67beb7323d64b683fa7e15f10078380db0788afe7ad5e2595b?"
//           className="self-center mt-7 max-w-full aspect-[2.33] w-[219px]"
//         />
//         <div className="justify-center items-start py-6 pr-16 pl-6 mt-20 rounded-2xl bg-white bg-opacity-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
//           Email
//         </div>
//         <div className="justify-center items-start py-6 pr-16 pl-6 mt-8 rounded-2xl bg-white bg-opacity-50 max-md:px-5 max-md:max-w-full">
//           Password
//         </div>
//         <div className="justify-center items-center px-16 py-6 mt-16 mb-12 font-semibold text-white rounded-2xl bg-slate-500 bg-opacity-60 max-md:px-5 max-md:my-10 max-md:max-w-full">
//           SIGN IN
//         </div>
//       </div>
//     </div> */}

















// <div className="flex flex-col bg-white">
//       <div className="flex justify-center items-center px-16 py-6 w-full text-center bg-neutral-100 max-md:px-5 max-md:max-w-full">
//         <div className="flex gap-5 justify-between w-full max-w-[1640px] max-md:flex-wrap max-md:max-w-full">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/75f0593c548e6cf7b7713fc1f7b427e267b0c4a5f5ba5dab12c1fadfc1872338?"
//             className="aspect-[2.33] w-[94px]"
//           />
//           <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
//             <div className="flex gap-5 justify-between my-auto text-base leading-6 text-slate-500">
//               <div className="grow">Services</div>
//               <div>Blog</div>
//               <div>About Us</div>
//               <div>Contact Us</div>
//               <div className="grow">Language</div>
//             </div>
//             <div className="flex gap-1 justify-between px-5 py-3.5 text-sm font-semibold leading-5 text-white whitespace-nowrap bg-blue-500 rounded-md shadow-sm">
//               <div className="grow">Login</div>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/37ea577047fe4bd83505c722427789a689bcfad182c8f6210901985bca57fdf6?"
//                 className="w-3 aspect-square"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full min-h-[700px] max-md:px-5 max-md:max-w-full">
//         <img
//           loading="lazy"
//           srcSet="..."
//           className="object-cover absolute inset-0 size-full"
//         />
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/625d2215ded2830e9393c0a2909c6c14300f2b8ad5511b6281b5c15a8d7498cb?"
//           className="my-12 max-w-full aspect-square w-[500px] max-md:my-10"
//         />
//       </div>
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dc54edab16be06983a73f754b6f93a7d4746b4f002a44de57f1a47f30cdd9df?"
//         className="self-end mt-14 aspect-[0.48] fill-cyan-400 fill-opacity-10 w-[99px] max-md:mt-10"
//       />
//       <div className="flex justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
//         <div className="flex gap-5 justify-between w-full max-w-[1449px] max-md:flex-wrap max-md:max-w-full">
//           <div className="flex flex-col justify-center max-md:max-w-full">
//             <img
//               loading="lazy"
//               src={background}
//               className="w-full aspect-[1.67] max-md:max-w-full"
//             />
//           </div>
//           <div className="flex flex-col my-auto max-md:max-w-full">
//             <div className="text-xl font-semibold leading-5 text-center text-blue-500 max-md:max-w-full">
//               Who are we ?
//             </div>
//             <div className="mt-10 text-base tracking-wide leading-9 text-blue-600 text-opacity-80 max-md:max-w-full">
//               Lorem ipsum dolor sit amet consectetur. Eget dignissim aenean quam
//               viverra gravida donec. Ipsum fermentum cursus mattis pulvinar
//               pellentesque malesuada ridiculus. Turperos pellentesque viverra
//               suspendisse sem. risus in posuere dui metus commodo{" "}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-5 justify-between items-start pr-16 mt-20 w-full max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
//         <div className="self-start max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//             <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/188356e7469737aedda0616792e6263668fda34cc1ef1fa2cf67000b0b64fca6?"
//                 className="w-40 max-w-full aspect-[0.78] fill-slate-500 fill-opacity-10 max-md:mt-9"
//               />
//             </div>
//             <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow mt-28 max-md:mt-10 max-md:max-w-full">
//                 <div className="text-xl font-semibold leading-5 text-center text-blue-500 max-md:max-w-full">
//                   Our Services
//                 </div>
//                 <div className="mt-10 text-lg tracking-wide leading-9 text-indigo-400 max-md:max-w-full">
//                   Lorem ipsum dolor sit amet consectetur. Eget dignissim aenean
//                   quam viverra gravida donec. Ipsum fermentum cursus mattis
//                   pulvinar pellentesque malesuada ridiculus. Turperos
//                   pellentesque viverra suspendisse sem. risus in posuere dui
//                   metus commodo{" "}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <img
//           loading="lazy"
//           srcSet="..."
//           className="flex-1 self-end mt-8 w-full aspect-[2.27] max-md:max-w-full"
//         />
//       </div>
//       <div className="justify-center items-center px-16 pt-14 pb-96 mt-40 w-full text-2xl font-medium tracking-widest leading-5 text-center uppercase whitespace-nowrap bg-gray-100 text-slate-600 max-md:px-5 max-md:pb-10 max-md:mt-10 max-md:max-w-full">
//         How it works
//       </div>
//       <div className="flex flex-col self-center mt-32 w-full max-w-[1720px] max-md:mt-10 max-md:max-w-full">
//         <img
//           loading="lazy"
//           srcSet="..."
//           className="mx-14 w-full aspect-[2.56] max-md:mr-2.5 max-md:max-w-full"
//         />
//         <div className="flex gap-5 justify-between mt-40 w-full text-2xl font-medium tracking-widest leading-5 text-center text-cyan-700 uppercase whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//           <div className="my-auto max-w-full h-px w-[544px]" />
//           <div className="flex gap-5 justify-between pr-5 max-md:flex-wrap max-md:max-w-full">
//             <div>our Consultants</div>
//             <div className="my-auto max-w-full h-px w-[573px]" />
//           </div>
//         </div>
//         <div className="mt-20 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//             <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
//               <div className="flex overflow-hidden relative flex-col grow px-5 py-5 text-base font-semibold leading-5 text-white capitalize whitespace-nowrap aspect-[1.01] max-md:pl-5 max-md:mt-6">
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="object-cover absolute inset-0 size-full"
//                 />
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/05efcf7234a8ffc408962f3ccd8044a084cc9e4decb15963ac94e3f963d9622d?"
//                   className="self-end aspect-square w-[35px]"
//                 />
//                 <div className="relative justify-center items-center px-16 py-4 mt-72 rounded-lg backdrop-blur-[100px] bg-slate-600 max-md:px-5 max-md:mt-10">
//                   Jim Carry : Orthodontist.
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
//               <div className="flex overflow-hidden relative flex-col grow px-5 py-5 text-base font-semibold leading-5 text-white capitalize whitespace-nowrap aspect-[1.01] max-md:pl-5 max-md:mt-6">
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="object-cover absolute inset-0 size-full"
//                 />
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/b62e74c16b4d38672482df3cf85404f2a1a3e467f69eb36b2f5489a6afea22b9?"
//                   className="self-end aspect-square w-[35px]"
//                 />
//                 <div className="relative justify-center items-center px-16 py-4 mt-72 rounded-lg backdrop-blur-[100px] bg-slate-600 max-md:px-5 max-md:mt-10">
//                   Jim Carry : Orthodontist.
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
//               <div className="flex overflow-hidden relative flex-col grow px-5 py-5 text-base font-semibold leading-5 text-white capitalize whitespace-nowrap aspect-[1.01] max-md:pl-5 max-md:mt-6">
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="object-cover absolute inset-0 size-full"
//                 />
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/89aa788dc27a31ed3db3cd3b01b1f38d34a9877f42c790c8ac4d37f8d76605e7?"
//                   className="self-end aspect-square w-[35px]"
//                 />
//                 <div className="relative justify-center items-center px-16 py-4 mt-72 rounded-lg backdrop-blur-[100px] bg-slate-600 max-md:px-5 max-md:mt-10">
//                   Jim Carry : Orthodontist.
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
//               <div className="flex overflow-hidden relative flex-col grow px-5 py-5 text-base font-semibold leading-5 text-white capitalize whitespace-nowrap aspect-[1.01] max-md:pl-5 max-md:mt-6">
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="object-cover absolute inset-0 size-full"
//                 />
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/5633bb01f192cdb270007e2f8dc3d82edb207660d345719558e18d3961314cb3?"
//                   className="self-end aspect-square w-[35px]"
//                 />
//                 <div className="relative justify-center items-center px-16 py-4 mt-72 rounded-lg backdrop-blur-[100px] bg-slate-600 max-md:px-5 max-md:mt-10">
//                   Jim Carry : Orthodontist.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-5 justify-between mt-24 w-full text-2xl font-semibold tracking-widest leading-5 text-center uppercase whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//           <div className="my-auto max-w-full h-px w-[575px]" />
//           <div className="flex gap-5 justify-between pr-5 max-md:flex-wrap max-md:max-w-full">
//             <div className="bg-clip-text">our partners</div>
//             <div className="my-auto max-w-full h-px w-[596px]" />
//           </div>
//         </div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/27ff8cf1be64c8f08467328d803eb8cfe8449d653fe9ba01bb0d6d518b7a913f?"
//           className="self-center mt-20 w-full aspect-[33.33] max-md:mt-10 max-md:max-w-full"
//         />
//         <div className="flex overflow-hidden relative flex-col justify-center py-12 mt-44 w-full text-center shadow-lg min-h-[315px] max-md:mt-10 max-md:max-w-full">
//           <img
//             loading="lazy"
//             srcSet="..."
//             className="object-cover absolute inset-0 size-full"
//           />
//           <div className="flex relative justify-center items-center px-16 mt-6 font-semibold text-white max-md:px-5 max-md:max-w-full">
//             <div className="flex flex-col max-md:max-w-full">
//               <div className="text-lg tracking-tight leading-6 max-md:max-w-full">
//                 Have a project in mind?
//               </div>
//               <div className="self-center mt-2 text-3xl tracking-tighter leading-10 max-md:max-w-full">
//                 Let’s create something awesome.
//               </div>
//             </div>
//           </div>
//           <div className="flex relative gap-3 justify-center self-center px-4 py-3 mt-10 mb-6 text-base font-medium tracking-normal leading-6 text-gray-500 bg-white rounded-lg">
//             <div>Contact Us</div>
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c195f912e99362e0c333afa1da756cd9d19b150a4ea8b0c7dbb2b9290848750?"
//               className="my-auto w-4 aspect-square"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-5 justify-between items-start pt-12 pr-20 mt-44 w-full bg-slate-900 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
//         <img
//           loading="lazy"
//           srcSet="..."
//           className="self-end mt-11 max-w-full aspect-[1.01] fill-sky-500 w-[218px] max-md:mt-10"
//         />
//         <div className="flex flex-col items-center my-auto max-md:max-w-full">
//           <div className="flex gap-5 justify-between self-stretch text-base font-medium tracking-wide leading-6 text-center text-white max-md:flex-wrap max-md:max-w-full">
//             <div>Services</div>
//             <div>Blog</div>
//             <div>About</div>
//             <div>Contact Us</div>
//           </div>
//           <div className="flex gap-4 mt-8 max-w-full w-[253px]">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e583d886360360910de08bd009bc979b8e712c3276401d974d0a2fb7189dc6d?"
//               className="flex-1 shrink-0 w-full aspect-[1.09]"
//             />
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/271350e7dfacad6683a6e1552e5d181bbb1ede2b1b4cbd1afd4542c50072e0dd?"
//               className="flex-1 shrink-0 w-full aspect-[1.09]"
//             />
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/01ec798dc3bbf0ac4cb6bb9657408810a698f088e40dad455a128eaea32fe5b9?"
//               className="flex-1 shrink-0 w-full aspect-[1.09]"
//             />
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5ecf1dce48d989afec9f5a2b64a2f03d5ee12a34959bead7c53128b57809791?"
//               className="flex-1 shrink-0 w-full aspect-[1.05]"
//             />
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c605a68dd59f65e81acb8a80f9eebe2ac97ef984e4197f58e8c651329e1d607?"
//               className="flex-1 shrink-0 w-full aspect-[1.09]"
//             />
//           </div>
//           <div className="mt-10 text-xs tracking-wide leading-4 text-center text-neutral-400">
//             Design with love © TanahAirStudio 2020. All right reserved
//           </div>
//         </div>
//       </div>
//     </div>


















// {/* <Rating name="size-large" defaultValue={2} size="large" /> */}
    























      







// {/* 

// <div className="pr-12 bg-zinc-100 max-md:pr-5">
//       <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//         <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
//           <div className="flex flex-col grow px-6 py-11 mx-auto w-full text-xl text-white whitespace-nowrap bg-slate-700 max-md:px-5 max-md:mt-8">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/3807ed9ba1df4baa76b1df68f46503ccf3919b225b40a2ca3919b5edc9903d60?"
//               className="self-center max-w-full aspect-[2.33] w-[137px]"
//             />
//             <div className="flex gap-3 justify-between px-6 py-3 mt-16 tracking-wider text-gray-900 bg-white rounded max-md:px-5 max-md:mt-10">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/686497515acad6e8b69b91100ea7f063ff73bb2310fc38d9b5b00dcb7dc7faad?"
//                 className="w-6 aspect-square"
//               />
//               <div className="flex-auto my-auto">Dashboard</div>
//             </div>
//             <div className="flex gap-3 justify-between px-6 py-3 mt-8 tracking-wider rounded max-md:px-5">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/c86a7cd21662a3e5fba3b7387a176ac51a4fd14fe787666f9062daf29ac9ebea?"
//                 className="w-6 aspect-square"
//               />
//               <div className="flex-auto my-auto">Services</div>
//             </div>
//             <div className="flex gap-3 justify-between px-6 py-3 mt-8 tracking-wider rounded max-md:px-5">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/54a96c650400b99baff82f12a013531ee2ddf83e5d109cfca16ec0057d906af4?"
//                 className="w-6 aspect-square"
//               />
//               <div className="flex-auto my-auto">Requests</div>
//             </div>
//             <div className="flex gap-3 justify-between px-6 py-3 mt-8 tracking-wider rounded max-md:px-5">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/863bc4195b0009ae630d594b9b29509c9b522bce982989f4583e3ceedd0c7ea2?"
//                 className="w-6 aspect-square"
//               />
//               <div className="flex-auto my-auto">Payments</div>
//             </div>
//             <div className="flex gap-3 justify-between px-6 py-3 mt-8 tracking-wider rounded max-md:px-5">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/43b6297c3fe382c022111a983f955be34b14d190cbe1e0a23b177a7c908b3fd7?"
//                 className="w-6 aspect-square"
//               />
//               <div className="flex-auto my-auto">Users</div>
//             </div>
//             <div className="flex gap-3 justify-between px-6 py-3 mt-8 rounded max-md:px-5">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/43cd37cb21727210fd07c53221e94770eca271738536b3a7ff65c84a46fb24da?"
//                 className="w-6 aspect-square"
//               />
//               <div className="grow my-auto">Content Management</div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
//           <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
//             <div className="flex gap-5 justify-between px-7 py-3.5 w-full text-lg font-medium leading-4 text-center text-gray-500 whitespace-nowrap bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
//               <div className="flex gap-4 justify-between">
        
//                 <div className="grow my-auto">ADMIN NAME</div>
//               </div>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/a23119c93ef6653d6e7da7cff5af70f856f5397b4d33a4a8552b519634df4786?"
//                 className="my-auto w-8 aspect-square"
//               />
//             </div>
//             <div className="flex gap-5 justify-between mt-6 text-2xl font-bold tracking-tight leading-6 max-md:flex-wrap max-md:max-w-full">
//               <div className="flex gap-5 justify-between p-8 bg-white rounded-2xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
//                 <div className="flex-auto text-slate-500">
//                   Number of requests
//                 </div>
//                 <div className="text-sky-500">100</div>
//               </div>
//               <div className="flex gap-5 justify-between px-8 py-9 bg-white rounded-2xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
//                 <div className="flex-auto text-slate-500">Number of Users</div>
//                 <div className="text-sky-500">200</div>
//               </div>
//               <div className="flex gap-5 justify-between p-8 bg-white rounded-2xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
//                 <div className="flex-auto text-slate-500">Total Payment</div>
//                 <div className="text-sky-500">2K $</div>
//               </div>
//             </div>
//             <div className="mt-6 max-md:max-w-full">
//               <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//                 <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
//                   <div className="flex grow gap-5 justify-between items-start px-8 py-10 w-full text-base font-semibold text-black whitespace-nowrap bg-white rounded-2xl shadow-2xl max-md:flex-wrap max-md:px-5 max-md:mt-7 max-md:max-w-full">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/07207ac7cea4a39aea6fcc60e3953eae89759387e92319785d3474a07f14822a?"
//                       className="aspect-[0.68] stroke-[3px] stroke-blue-600 w-[13px]"
//                     />
//                     <div className="flex flex-col flex-1">
//                       <div className="self-center">March 2019</div>
//                       <img
//                         loading="lazy"
//                         srcSet="..."
//                         className="mt-10 w-full bg-orange-300 rounded-full aspect-[1.01]"
//                       />
//                     </div>
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/e86cb7bac5a56cb0d23e54dbb1848ff5de2c81087f0551bc9feae379643a4ee3?"
//                       className="aspect-[0.68] stroke-[3px] stroke-blue-600 w-[13px]"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
//                   <div className="flex flex-col grow p-8 w-full bg-white rounded-2xl shadow-2xl max-md:px-5 max-md:mt-7 max-md:max-w-full">
//                     <div className="flex gap-5 justify-between w-full text-sm font-medium tracking-tight leading-6 whitespace-nowrap text-slate-400 max-md:flex-wrap max-md:max-w-full">
//                       <div className="flex gap-1.5 justify-between px-3 py-2.5 bg-violet-50 rounded-lg">
//                         <img
//                           loading="lazy"
//                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/326a84b9cad1bd4c90c752705d3cb5f7501b8c9159cadd7d279e531062ded3f6?"
//                           className="aspect-square w-[18px]"
//                         />
//                         <div className="grow my-auto">This month</div>
//                       </div>
//                       <img
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/47a782446a4d6313c63708624066cce33fa09923dfaf0bed676e043357b0b6a3?"
//                         className="my-auto aspect-square w-[33px]"
//                       />
//                     </div>
//                     <div className="mt-8 max-md:max-w-full">
//                       <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//                         <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
//                           <div className="flex flex-col max-md:mt-10">
//                             <div className="text-4xl font-bold tracking-tighter leading-10 text-indigo-900">
//                               $37.5K
//                             </div>
//                             <div className="flex gap-1 justify-between mt-1.5">
//                               <div className="text-sm font-medium tracking-tight leading-6 text-slate-400">
//                                 Total earnings
//                               </div>
//                               <img
//                                 loading="lazy"
//                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2f0968bbf16cc75a52f39c5335a0f3f92deb3db1e3371ccc5a05af77c606f75?"
//                                 className="w-5 aspect-[1.11]"
//                               />
//                               <div className="grow my-auto text-xs font-bold tracking-tight leading-5 text-center text-teal-500">
//                                 +2.45%
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
//                           <div className="flex flex-col grow mt-10 text-xs font-medium tracking-tight leading-5 text-center whitespace-nowrap text-slate-400 max-md:mt-10 max-md:max-w-full">
//                             <img
//                               loading="lazy"
//                               srcSet="..."
//                               className="w-full aspect-[4.55] stroke-[4px] stroke-indigo-600 max-md:max-w-full"
//                             />
//                             <div className="flex gap-5 justify-between pr-9 mt-11 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
//                               <div>SEP</div>
//                               <div>OCT</div>
//                               <div>NOV</div>
//                               <div>DEC</div>
//                               <div>JAN</div>
//                               <div>FEB</div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col px-8 py-12 mt-9 text-lg font-semibold text-violet-500 whitespace-nowrap bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
//               <div className="text-2xl font-bold tracking-tight leading-6 text-sky-800 max-md:max-w-full">
//                 Services
//               </div>
//               <div className="flex gap-5 justify-between mt-14 text-center max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//                 <div className="grow justify-center items-center px-16 py-6 rounded-lg bg-violet-500 bg-opacity-10 max-md:px-5">
//                   service 1
//                 </div>
//                 <div className="grow justify-center items-center px-16 py-6 rounded-lg bg-violet-500 bg-opacity-10 max-md:px-5">
//                   service 1
//                 </div>
//                 <div className="grow justify-center items-center px-16 py-6 rounded-lg bg-violet-500 bg-opacity-10 max-md:px-5">
//                   service 1
//                 </div>
//                 <div className="grow justify-center items-center px-16 py-6 rounded-lg bg-violet-500 bg-opacity-10 max-md:px-5">
//                   service 1
//                 </div>
//               </div>
//               <div className="flex gap-5 justify-between mt-6 text-center max-md:flex-wrap max-md:max-w-full">
//                 <div className="grow justify-center items-center px-16 py-6 rounded-lg bg-violet-500 bg-opacity-10 max-md:px-5">
//                   service 1
//                 </div>
//                 <div className="grow justify-center items-center px-16 py-6 rounded-lg bg-violet-500 bg-opacity-10 max-md:px-5">
//                   service 1
//                 </div>
//                 <div className="grow justify-center items-center px-16 py-6 rounded-lg bg-violet-500 bg-opacity-10 max-md:px-5">
//                   service 1
//                 </div>
//                 <div className="grow justify-center items-center px-16 py-6 rounded-lg bg-violet-500 bg-opacity-10 max-md:px-5">
//                   service 1
//                 </div>
//               </div>
//               <div className="flex gap-5 justify-between mt-6 mb-3.5 text-center max-md:flex-wrap max-md:max-w-full">
//                 <div className="grow justify-center items-center px-16 py-6 rounded-lg bg-violet-500 bg-opacity-10 max-md:px-5">
//                   service 1
//                 </div>
//                 <div className="grow justify-center items-center px-16 py-6 rounded-lg bg-violet-500 bg-opacity-10 max-md:px-5">
//                   service 1
//                 </div>
//                 <div className="grow justify-center items-center px-16 py-6 rounded-lg bg-violet-500 bg-opacity-10 max-md:px-5">
//                   service 1
//                 </div>
//                 <div className="grow justify-center items-center px-16 py-6 rounded-lg bg-violet-500 bg-opacity-10 max-md:px-5">
//                   service 1
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div> */}








// </>







//   );
// }

// // export default TestFile;







import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, List, ListItem, ListItemText, LinearProgress } from '@material-ui/core';

export const TestFile = () => {
  const [clinics, setClinics] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [location, setLocation] = useState({
    type: 'Point',
    coordinates: [],
    address: '',
    description: ''
  });

  useEffect(() => {
    fetchClinics();
  }, []);

  const fetchClinics = async () => {
    try {
      const response = await axios.get('http://localhost:3000/clinic');
      setClinics(response.data.data.data);
      console.log(response.data.data.data)
    } catch (error) {
      console.log(error);
    }
  };

  const createClinic = async () => {
    const newClinic = {
      name,
      price,
      summary,
      description,
      location
    };

    try {
      const response = await axios.post('http://localhost:3000/clinic', newClinic);
      setClinics([...clinics, response.data]);
      clearForm();
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);

      const response = await axios.post('http://localhost:3000/clinic', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        }
      });

      return response.data.imagePath;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imagePath = await uploadImage();

    const newClinic = {
      name,
      price,
      summary,
      description,
      imageCover: imagePath,
      location
    };

    try {
      const response = await axios.post('http://localhost:3000/clinic', newClinic);
      setClinics([...clinics, response.data]);
      clearForm();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteClinic = async (clinicId) => {
    try {
      await axios.delete(`http://localhost:3000/clinic/${clinicId}`);
      const updatedClinics = clinics.filter((clinic) => clinic._id !== clinicId);
      setClinics(updatedClinics);
    } catch (error) {
      console.log(error);
    }
  };

  const clearForm = () => {
    setName('');
    setPrice(0);
    setSummary('');
    setDescription('');
    setImage(null);
    setImagePreview('');
    setLocation({
      type: 'Point',
      coordinates: [],
      address: '',
      description: ''
    });
    setUploadProgress(0);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Clinics</h1>
      <List>
        {clinics.map((clinic) => (
          <ListItem key={clinic._id}>
            <ListItemText primary={clinic.name} />
            <Button variant="contained" color="secondary" onClick={() => deleteClinic(clinic._id)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
      <h2 className="text-2xl font-bold my-4">Create Clinic</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Price"
          type="number"
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
        />
        <TextField
          label="Summary"
          variant="outlined"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          multiline
          rows={4}
          fullWidth
        />
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange=
          {(e) => setDescription(e.target.value)}
          multiline
          rows={4}
          fullWidth
        />
        <TextField
          label="Address"
          variant="outlined"
          value={location.address}
          onChange={(e) =>
            setLocation({
              ...location,
              address: e.target.value
            })
          }
          fullWidth
        />
        <TextField
          label="Description"
          variant="outlined"
          value={location.description}
          onChange={(e) =>
            setLocation({
              ...location,
              description: e.target.value
            })
          }
          fullWidth
        />
        <TextField
          label="Longitude"
          variant="outlined"
          value={location.coordinates[0]}
          onChange={(e) =>
            setLocation({
              ...location,
              coordinates: [e.target.value, location.coordinates[1]]
            })
          }
          fullWidth
        />
        <TextField
          label="Latitude"
          variant="outlined"
          value={location.coordinates[1]}
          onChange={(e) =>
            setLocation({
              ...location,
              coordinates: [location.coordinates[0], e.target.value]
            })
          }
          fullWidth
        />
        <Button variant="contained" component="label">
          Upload Image
          <input type="file" hidden onChange={handleImageChange} accept="image/*" />
        </Button>
        {imagePreview && (
          <img src={imagePreview} alt="Clinic" className="my-4" style={{ width: '200px' }} />
        )}
        {uploadProgress > 0 && <LinearProgress variant="determinate" value={uploadProgress} />}
        <Button variant="contained" color="primary" type="submit">
          Create
        </Button>
        <Button variant="contained" onClick={clearForm}>
          Clear
        </Button>
      </form>
    </div>
  );
};
