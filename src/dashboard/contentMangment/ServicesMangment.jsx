// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Button,
//   ChakraProvider,
//   Container,
//   FormControl,
//   FormLabel,
//   Text,
//   Input,
//   VStack,
//   Textarea
// } from '@chakra-ui/react';

// import axios from 'axios';
// import FileUpload from '../../shared/FileUpload'; // Import your FileUpload component
// import Files from './Files';

// const ServiceForm = () => {
//   const [serviceName, setServiceName] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [imageCover, setImageCover] = useState(null);
//   const [images, setImages] = useState([]);
//   const [services, setServices] = useState([]);
// console.log(images)
//   useEffect(() => {
//     // Fetch services from your API and update the state
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get('http://localhost:3111/service');
//         console.log(response)
//         setServices(response.data);
//       } catch (error) {
//         console.error('Error fetching services:', error);
//       }
//     };

//     fetchServices();
//   }, []);

//   const handleImageCoverChange = (e) => {
//     setImageCover(e.target.files[0]);
//   };

//   const handleImagesChange = (e) => {
//     setImages([e.target.files]);
//   };

//   const handleCreateService = async () => {
//     try {
     
//       const formData = new FormData();
//       formData.append('name', serviceName);
//       formData.append('price', price);
//       formData.append('description', description);
//       formData.append('imageCover', imageCover);
//       images.forEach((image, index) => {
//         formData.append(`images[${index}]`, image);
//       });
   
     
   
//    const response=   await axios.post('http://localhost:3111/service', formData);
// console.log(response)
//       // Refresh the list of services after creating a new one
//       const response2 = await axios.get('http://localhost:3111/service');
//       setServices(response2.data);

//     //   Clear the form fields
//       setServiceName('');
//       setPrice('');
//       setDescription('');
//       setImageCover(null);
//       setImages([]);
//     } catch (error) {
//       console.error('Error creating service:', error);
//     }
//   };
  
//   const handleFileSelectMany = (filea) => {
//     console.log(filea)
//     setImages(filea);
//   };
//   const handleFileSelect = (fileData) => {
//     console.log(fileData)
//     setImageCover(fileData);
//   };
//   return (
//     <ChakraProvider>
//       <Box>
//         <Box display={'flex'} w={'100%'} border={'1px solid red'} spacing={4} align="stretch">
//         <Box w={"50%"}>
            
//           <Box>
//             <FormControl>
//               <FormLabel>Service Name</FormLabel>
//               <Input
//                 type="text"
//                 value={serviceName}
//                 onChange={(e) => setServiceName(e.target.value)}
//               />
//             </FormControl>
//           </Box>

//           <Box>
//             <FormControl>
//               <FormLabel>Price</FormLabel>
//               <Input
//                 type="number"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </FormControl>
//           </Box>

//           <Box>
//             <FormControl>
//               <FormLabel>Description</FormLabel>
     
//                             <Textarea
//            type="text"
//            value={description}
//            onChange={(e) => setDescription(e.target.value)}
//         size='sm'
//       />  
//             </FormControl>
//           </Box>
//           </Box>




//           <Box w={"50%"}>

//           <Box>
//             <FormControl>
//               <FormLabel>Image Cover</FormLabel>
//               {/* <Input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageCoverChange}
//               /> */}
//                       <Box w={'48%'} >

//                       <FileUpload onFileSelect={handleFileSelect} />
// {/* <FileUpload onFileSelect={handleFileSelect} /> */}
// </Box>
//             </FormControl>
//           </Box>



//           <Box mt={"20px"}>
//   <FormControl>
//     <FormLabel>Images</FormLabel>
//     <Files onFileSelect={handleFileSelectMany} />
//   </FormControl>
// </Box>
//           </Box>
//         </Box>
//           <Box>
//             <Button colorScheme="teal" onClick={handleCreateService}>
//               Create Service
//             </Button>
//           </Box>
//       </Box>
//     </ChakraProvider>
//   );
// };

// export default ServiceForm;
import React,{useEffect} from 'react';
import ServiceForm from './Services';
import NavigationBox from './NavigationBox';
import { Box } from '@chakra-ui/react';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
import { GetData } from '../../api/apiFactory';
import Cookies from 'js-cookie';
import {Navigate, NavLink, useNavigate } from 'react-router-dom';
const ServicesMangment = ({islogin,isjwt}) => {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
        GetData("/service")
      })
    const nav= useNavigate()
    if (!islogin&&!isjwt) return <Navigate to={'/daschboard/login'} />;

// console.log(data?.data?.data);

    return (
        <div >          
              <Box bg={"white"} p={"10px"} >
        <NavigationBox URL={"Services"}/>

        </Box>

        <Box m={"10px"}>
            <ServiceForm data={data?.data?.data} />
            </Box>
        </div>
    );
}

export default ServicesMangment;
