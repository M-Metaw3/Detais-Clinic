
import React, { useState } from 'react';
import { ChakraProvider,Image, Box,Textarea, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import FileUpload from '../shared/FileUpload'; // Import your FileUpload component
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import {DeleteData, PostDataWithImg} from '../api/apiFactory';
import Url from '../api/ApiUrl';
// import { Image } from 'next/image';

const YourFormComponent = ({data}) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [formData, setFormData] = useState({
    // Define your form fields here
    title: '',
    subTitle: '',
    // ... other form fields
  });
  const [loadingcreate, setloadingcreate] = useState(false);

  const [selectedFileData, setSelectedFileData] = useState(null);
console.log(selectedFileData)




  const handleSubmit = async(event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('subTitle', formData.subTitle);
    data.append('images', selectedFileData);
    // data.append('section', "landingpage");

        
    try {


    //   const response = await PostDataWithImg('/Home',data,)
    setloadingcreate(true);
      const response = await PostDataWithImg('/about', data, (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        // setUploadProgress(percentCompleted);
      });
      console.log(response);
      if(response.status==201){
        setloadingcreate(false);
        alert("success uploaded data")
      }
    } catch (error) {
      console.log(error);
      setloadingcreate(false);
    }
    const finalFormData = {
      ...formData,
      selectedFileData,
    };

    // Now you can submit finalFormData to your backend or perform any other actions
    console.log('Submitting form data:', finalFormData);
  };

  // Handle changes in form fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [addNew , setaddNew] = useState(false);


  // Callback function to receive selected file data from FileUpload component
  const handleFileSelect = (fileData) => {
    setSelectedFileData(fileData);
  };
  const handeleraddnew= ()=>{
    setFormData({images:null})
    setaddNew(false)
}

const handlercancel= ()=>{
  setSelectedFileData()
  setaddNew(false)
}
const handelerdelete=async(e)=>{
  try {
    const response= await DeleteData(`about/${e}`)
    if(response.status==204){
      alert("deleted")
      window.location.reload()
      return;
    }
    console.log(response);

  } catch (error) {
    console.log(error);
  }
}

  return (
    <ChakraProvider>
      <VStack mt={"20px"} bg={"white"}  spacing={4} >
    <Box w={"100%"} p={"10px"} display={"flex"} justifyContent={'flex-end'} >
        <Button m={"5px"} onClick={()=>setaddNew(true)}  borderRadius={'full'}>


<AddIcon/>
</Button>
</Box>


{addNew&&    <Box w={"100%"}>    <Box w={'100%'} display={'flex'} m={"10px"} p={'10px'}  >
        <Box w={'48%'} >


<FileUpload onFileSelect={handleFileSelect} />
</Box>
      <Box w={'50%'}>          <FormControl>
            <FormLabel>title</FormLabel>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
                <FormLabel> description</FormLabel>
       
                <Textarea
            name="subTitle"
            value={formData.subTitle}
            onChange={handleChange}
        size='sm'
      />  
          </FormControl>
          </Box>
    

        </Box>

        {/* Submit button */}
        <Box width={"100%"} display={"flex"} p={"10px"} justifyContent={"space-around"}>
        <Button isLoading={loadingcreate}  width={"80px"}  colorScheme="teal" onClick={handleSubmit}>
          save
        </Button>
        <Button width={"80px"} colorScheme="gray" onClick={handlercancel}>
          cancel
        </Button>
        </Box>
        </Box>}
      </VStack>












































     { data&&data?.map((el)=>(


<VStack mt={"20px"} bg={"white"} spacing={4} >


<Box w={"100%"}>    <Box w={'100%'} display={'flex'}  p={'10px'}  >
    <Box m={"15px"} w={'48%'} >
<Image src={el&&el?.images&&`${Url}/AboutUs/${el?.images}`}/>

{/* <FileUpload onFileSelect={handleFileSelect} /> */}
</Box>
  <Box w={'50%'}>          <FormControl>
        <FormLabel>title</FormLabel>
        <Input
          type="text"
          name="firstName"
          value={el?.title}
          // onChange={handleChange}
        />
            <FormLabel>description</FormLabel>
        <Textarea
          type="text"
          name="firstName"
          value={el?.subTitle}
          // onChange={handleChange}
        />   
    
      </FormControl>
      </Box>


    </Box >
<Button onClick={()=>handelerdelete(el._id)} width={'100%'} textAlign={'center'}>

    Delete
</Button>

    </Box>
  </VStack>

     )) }









    </ChakraProvider>
  );
};

export default YourFormComponent;


