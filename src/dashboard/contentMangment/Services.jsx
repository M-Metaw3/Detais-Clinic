import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  Text,
  Input,
  VStack,
  Textarea,
  Heading,Image
} from '@chakra-ui/react';

import axios from 'axios';
import FileUpload from '../../shared/FileUpload'; // Import your FileUpload component
import Files from './Files';
import { AddIcon } from '@chakra-ui/icons';

import { PostDataWithImg ,UpdateDataWithImg ,DeleteData} from './../../api/apiFactory';
import Url from '../../api/ApiUrl';

const ServiceForm = ({data}) => {
  console.log(data);
  const [serviceName, setServiceName] = useState('');
  const [price, setPrice] = useState('');
  const [id, setid] = useState('');

  const [description, setDescription] = useState('');
  const [imageCover, setImageCover] = useState(null);
  // const [images, setImages] = useState([]);
  const [services, setServices] = useState([]);
  const [addNew , setaddNew] = useState(false);
  const [update , setupdate] = useState(false);
  const [images, setImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [priceDiscount, setPriceDiscount] = useState(0);

console.log(images)


  const handleImageCoverChange = (e) => {
    setImageCover(e.target.files[0]);
  };

  const handleImagesChange = (event) => {
    setImages(Array.from(event.target.files));
  };

  const handleCreateService = async () => {
    try {
     
      const formData = new FormData();
      formData.append('name', serviceName);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('imageCover', imageCover);
 
      images.forEach((image) => {
        formData.append('images', image);
      });
     
   
   const response=   await PostDataWithImg('service', formData, (progressEvent) => {
    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    setUploadProgress(percentCompleted);
   });
console.log(response)
if(response.status==201){
  alert("success uploaded data")
}
      // Refresh the list of services after creating a new one
      // const response2 = await axios.get('http://localhost:3111/service');
      // setServices(response2.data);

    //   Clear the form fields
      setServiceName('');
      setPrice('');
      setDescription('');
      setImageCover(null);
      setImages([]);
    } catch (error) {
      console.error('Error creating service:', error);
    }
  };
  






const handelerDelete=async(id)=>{
  const response=   await DeleteData(`service/${id}`);
  if(response.status==204){
    alert("success deleted data")
    window.location.reload()
  }
}





  const handleupdateService = async () => {
    try {
     
      const formData = new FormData();
      formData.append('name', serviceName);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('imageCover', imageCover);
      images.forEach((image) => {
        formData.append('images', image);
      });
   
     
   
   const response=   await UpdateDataWithImg(`service/${id}`, formData);
console.log(response)
if(response.status==201){
  alert("success updated data")
}
      // Refresh the list of services after creating a new one
      // const response2 = await axios.get('http://localhost:3111/service');
      // setServices(response2.data);

    //   Clear the form fields
      setServiceName('');
      setPrice('');
      setDescription('');
      setImageCover(null);
      setImages([]);
    } catch (error) {
      console.error('Error creating service:', error);
    }
  };





  const handleFileSelectMany = (filea) => {
    console.log(filea)
    setImages(filea);
  };
  const handleFileSelect = (fileData) => {
    console.log(fileData)
    setImageCover(fileData);
  };

  const handelerUpdate=(e)=>{
    console.log(e);
//  setImages(e.imageCover)
 setServiceName(e.name)
 setPrice(e.price)
 setid(e._id)

 setDescription(e.description)
setaddNew(true)
setupdate(true)
  }
  return (
    <ChakraProvider >
      <Box >
      <Box bgColor={'white'} w={"100%"} p={"10px"} mb={"10px"} display={"flex"} justifyContent={'flex-end'} >
        <Button m={"5px"}  onClick={()=>setaddNew((pre)=>!pre)}  borderRadius={'full'}>
<AddIcon/>
</Button>
</Box>






      {addNew&&<><Box bgColor={'white'} padding={"20px"} display={'flex'} justifyContent={"center"} w={'100%'}  spacing={4} align="stretch">
        <Box w={"50%"}>
          <Box>
            <FormControl>
              <FormLabel>Service Name</FormLabel>
              <Input
                type="text"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
              />
            </FormControl>
          </Box>

          <Box>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>
          </Box>

          <Box>
            <FormControl>
              <FormLabel>Description</FormLabel>
     
                            <Textarea
           type="text"
           value={description}
           onChange={(e) => setDescription(e.target.value)}
        size='sm'
      />  
            </FormControl>
          </Box>
          </Box>


          {/* <FormControl>
            <FormLabel>Price Discount</FormLabel>
            <Input
              type="number"
              value={priceDiscount}
              onChange={(e) => setPriceDiscount(e.target.value)}
            />
          </FormControl> */}

          <Box w={"50%"}>

          <Box>
            <FormControl>
              <FormLabel>Image Cover</FormLabel>
              {/* <Input
                type="file"
                accept="image/*"
                onChange={handleImageCoverChange}
              /> */}
                      <Box w={'48%'} >

                      <FileUpload onFileSelect={handleFileSelect} />
{/* <FileUpload onFileSelect={handleFileSelect} /> */}
</Box>
            </FormControl>
          </Box>



          <Box mt={"20px"}>
  <FormControl>
  <FormLabel>Images</FormLabel>
            <Input type="file" multiple onChange={handleImagesChange} />
          </FormControl>
</Box>
          </Box>
        </Box>
          <Box>
     {!update?       <Button colorScheme="teal" onClick={handleCreateService}>
              Create Service
            </Button>:<Button colorScheme="teal" onClick={handleupdateService}>
             Update
            </Button>}
          </Box></>}










{
  data?.map((el)=>(
    
<Box p={"20px"} margin={"10px"} >
<Box bg={'white'} display={'flex'} >
  <Box w={'50%'}>
  <Heading as='h6' >
  Name
  </Heading>
    <Text>
    {el?.name}
    </Text>
    <Heading as='h2' size='xl'>
Price
  </Heading>
    <Text>
    {el?.price}
    
    </Text>
    <Heading as='h2' size='xl'>
   discription
  </Heading>
       <Text wordBreak={'break-word'}>
    {el?.description}
      
    </Text>
  </Box>
<Box>
<Box m={"20px"} w={"50%"}>
  <Image src={el?.imageCover&&`  http://localhost:3111/services/${el?.imageCover}`} alt='Dan Abramov' />
</Box>




</Box>

</Box>

<Box  bg={'white'}  p={"10px"}  width={'100%'} justifyContent={'space-around'} display={'flex'} flexDirection={'row'} flexWrap={'wrap'} >
{
el?.images&&el?.images?.map((image)=>(
<Image boxSize={"300px"} borderRadius={'20px'}  src={image&&`${Url}/services/${image}`} alt='Dan Abramov' />
))


}  

<Box bg={'white'}  w={"50%"} mt={'10px'} display={"flex"} justifyContent={"space-between"}>
</Box>
</Box>
<Button width={"100%"} textAlign={'center'} onClick={()=>handelerUpdate(el)}  colorScheme='teal' variant='solid'>
    edit
  </Button>
  <Button width={"100%"} textAlign={'center'} onClick={()=>handelerDelete(el._id)} colorScheme='teal' variant='outline'>
    delete
  </Button>
</Box>
  ))
}







      </Box>










    </ChakraProvider>
  );
};

export default ServiceForm;
