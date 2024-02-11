
import React,{useState} from 'react';
import {  FormControl,Img ,
    FormLabel,Image,
    FormErrorMessage,FormHelperText, FormHelper,Text, Textarea ,Box,Heading,Input,Button,
    useToast,

    CircularProgress, CircularProgressLabel 
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

import { BsUpload } from 'react-icons/bs'; 
    import {
        QueryClient,
        QueryClientProvider,
        useQuery,
      } from '@tanstack/react-query'
import {GetData, UpdateDataWithImg} from '../../api/apiFactory';
import {PostDataWithImg} from '../../api/apiFactory';



const Section1 = ({header,enumsec , data} ) => {
  const toast = useToast();
  const nav= useNavigate()

    const [formData, setFormData] = useState({
        title: data&&data[0]?.title||'',
        subTitle: data&&data[0]?.subTitle||'',
        images: null,
      });
      console.log(data)
      

    const [uploadProgress, setUploadProgress] = useState(0);
console.log(uploadProgress);


const handleSubmitSection1 = async () => {
  const dataa = new FormData();
  dataa.append('title', formData.title);
  dataa.append('subTitle', formData.subTitle);

  // Check if a new image is uploaded or if it's the same as the current image
  if (formData.images && (!data || formData.images !== data[0]?.images)) {
    dataa.append('images', formData.images);
  }

  dataa.append('section', enumsec);

  try {
    if (!data) {
      const response = await PostDataWithImg('/Home', dataa, (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percentCompleted);
      });
      console.log(response);
      if (response.status === 201) {
        toast({
          title: 'Section Updated',
          description: 'Section updated successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
nav('/dashboard/contentmangment')

      }
    } else {
      const response = await UpdateDataWithImg(`/Home/${data[0]?._id}`, dataa, (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percentCompleted);
      });
      console.log(response);
      if (response.status === 200) {
        toast({
          title: 'Section Updated',
          description: 'Section updated successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
// nav('/dashboard/contentmangment')
window.location.reload('http://localhost:3000/dashboard/contentmangment')
      }
    }
  } catch (error) {
    console.log(error);
  }
};




      const handleInputChange = (e) => {
        const { name, value, type } = e.target;
      
        setFormData((prev) => {
          return {
            ...prev,
            [name]: type === 'file' ? e.target.files[0] : value,
          };
        });
      };



    return (
        <div>
         
            <Box bg={"white"}  p={"10px"}mt={"10px"} mb={"10px"} >


   <Text m={'10px'} fontSize='3xl'>Section {header}</Text>
   <Box display={'flex'} flexWrap={'wrap'}>

   {/* <Box w="48%" m="10px" p="10px">
  {formData.images && (
    <Image
      boxSize="200px"
      w="95%"
      borderRadius="5px"
      src={URL?.createObjectURL(formData.images) || `http://localhost:3111/HomePage/${data[0]?.images}`}
      alt="Uploaded Image"
    />
  )}

  <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
    <Input
      id="file-upload"
      name="images"
      onChange={handleInputChange}
      type="file"
      display="none"
    />

    <Box
      border="2px dashed #ccc"
      borderRadius="5px"
      textAlign="center"
      p="20px"
      mt="10px"
      cursor="pointer"
    >
      <BsUpload size={24} />
      <Text mt="2">Upload Image</Text>
    </Box>
  </label>

  {formData.images && (
    <p>Selected file: {formData.images.name}</p>
  )}

  <Box m={"10px"}>
    <Image src={data?.[0]?.images && `http://localhost:3111/HomePage/${data[0]?.images}`} />
  </Box>
</Box> */}

   <Box w={"48%"} m={"10px"} p={"10px"} >

   {formData.images&&(

   <Image boxSize='200px' w={'95%'} borderRadius={'5px'} src={URL?.createObjectURL(formData.images)?URL?.createObjectURL(formData.images):`  http://localhost:3111/HomePage/${data[0]?.images}`} alt='Dan Abramov' />)}

   <Input
  name="images"
  onChange={handleInputChange}
  type="file"
/>
{formData.images && (
  <p>Selected file: {formData.images.name}</p>
)}
<Box>
<Image src={data&&data[0]?.images&&`http://localhost:3111/HomePage/${data[0]?.images}`}/>

</Box>

   </Box>




   <Box m={"10px"} p={"10px"} w={"48%"} >
   <FormControl>
  <FormLabel>Text</FormLabel>
  <Input   type="text"
  name="title"
  value={formData.title}
  onChange={handleInputChange}/>
  
  <Text   type="text"
  mb='8px'>Description</Text>
      <Textarea
       
       name="subTitle"
       value={formData.subTitle}
       onChange={handleInputChange}
        placeholder='Here is a sample placeholder'
        size='sm'
      />
</FormControl>
    
   </Box>
   <Box>
<Button onClick={handleSubmitSection1} colorScheme='teal' size='sm'>
    save
  </Button>
  <Button variant='ghost'>Secondary Action</Button>
</Box>
   </Box>
   <Box w={"full"} textAlign={'center'}>
<CircularProgress value={uploadProgress} color='green.400'>
  <CircularProgressLabel>{uploadProgress}%</CircularProgressLabel>
</CircularProgress>
</Box>
            </Box>
        </div>
    );
}

export default Section1;


