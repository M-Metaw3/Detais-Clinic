
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
import Url from '../../api/ApiUrl';



const Section1 = ({header,enumsec , data} ) => {
  
  const toast = useToast();
  const nav= useNavigate()
console.log(data)
const [loadingcreate, setloadingcreate] = useState(false);

const [file, setFile] = useState(null);
const [fileName, setFileName] = useState('');
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
  if (file && (!data || file !== data[0]?.images)) {
    dataa.append('images', file);
  }

  dataa.append('section', enumsec);

  try {
    if (data.length==0) {
      setloadingcreate(true);
      const response = await PostDataWithImg('/Home', dataa, (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percentCompleted);
      });
      console.log(response);
      if (response.status === 201) {
        setloadingcreate(false);
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
      setloadingcreate(true);
      const response = await UpdateDataWithImg(`/Home/${data[0]?._id}`, dataa, (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percentCompleted);
      });
      console.log(response);
      if (response.status === 200) {
        setloadingcreate(false);
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
    setloadingcreate(false);
    if(error.message=='Request failed with status code 413'){
      toast({
        title: 'warning',
        description: 'image must be less than 1mb',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      }); 
    }
   
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















    
    
      const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setFileName(selectedFile.name);
      };
    
      const handleDragOver = (event) => {
        event.preventDefault();
      };
    
      const handleDrop = (event) => {
        event.preventDefault();
        const selectedFile = event.dataTransfer.files[0];
        setFile(selectedFile);
        setFileName(selectedFile.name);
      };
    
      // const handleInputChange = (event) => {
      //   setFile(null);
      //   setFileName(event.target.value);
      // };
    
    
    

    return (
//         <div>
         
//             <Box bg={"white"}  p={"10px"}mt={"10px"} mb={"10px"} >


//    <Text m={'10px'} fontSize='3xl'>Section {header}</Text>
//    <Box display={'flex'} flexWrap={'wrap'}>




// <Box border={'1px solid red'} mt={"20px"} h={"20vh"} w={"48%"}>

// <label
//       htmlFor="fileInput"
//       className="flex justify-center items-center px-16 py-11 mt-3 text-sm font-light leading-5 text-cyan-600 whitespace-nowrap bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:px-5 max-md:max-w-full cursor-pointer"
//       onDragOver={handleDragOver}
//       onDrop={handleDrop}
//     >
//       <div className="flex flex-col max-w-full h-30 w-full">
//       {file || data[0]?.images ? (
//     <img
//       loading="lazy"
//       src={
//         file
//           ? URL.createObjectURL(file)
//           : `${Url}/HomePage/${data[0]?.images}`
//       }
//       alt="Uploaded File"
//       className="self-center aspect-[0.78] h-20 w-full mb-2"
//     />
//   ) : (
//     <img
//       loading="lazy"
//       src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4be2e426e23efa98427d9869151ccd96fcb788b80b933dbdf88add445b8a9?"
//       alt="Placeholder"
//       className="self-center aspect-[0.78] w-[38px]"
//     />
//   )}
//         <div className="ml-20 mt-4">
//           <span>{file ? fileName : 'Upload your design file'}</span>
//         </div>
//       </div>
//       <input
//         type="file"
//         id="fileInput"
//         name='images'
//         accept=".jpg, .jpeg, .png"
//         onChange={handleFileChange}
//         className="hidden"
//       />
  
//     </label>


//     </Box>


//    <Box m={"10px"} p={"10px"} w={"48%"} >
//    <FormControl>
//   <FormLabel>Text</FormLabel>
//   <Input   type="text"
//   name="title"
//   value={formData.title}
//   onChange={handleInputChange}/>
  
//   <Text   type="text"
//   mb='8px'>Description</Text>
//       <Textarea
       
//        name="subTitle"
//        value={formData.subTitle}
//        onChange={handleInputChange}
//         placeholder='Here is a sample placeholder'
//         size='sm'
//       />
// </FormControl>
    
//    </Box>
//    <Box>
// <Button onClick={handleSubmitSection1} colorScheme='teal' size='sm'>
//     save
//   </Button>
//   <Button variant='ghost'>Secondary Action</Button>
// </Box>
//    </Box>
//    <Box w={"full"} textAlign={'center'}>
// <CircularProgress value={uploadProgress} color='green.400'>
//   <CircularProgressLabel>{uploadProgress}%</CircularProgressLabel>
// </CircularProgress>
// </Box>
//             </Box>


//         </div>












<>


<div className="px-8 py-9 bg-white max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-xl font-semibold text-neutral-600 max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full ">Section 1</div>
            {/* <img
              loading="lazy"
              srcSet="..."
            /> */}


 <label
      htmlFor="fileInput"
      className="flex bg-transparent justify-center items-center px-16 py-11 mt-3 text-sm font-light leading-5 text-cyan-600 whitespace-nowrap bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:px-5 max-md:max-w-full cursor-pointer"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="flex flex-col max-w-full  w-full">
      {file || data[0]?.images ? (
    <img
      loading="lazy"
      src={
        file
          ? URL.createObjectURL(file)
          : `${Url}/HomePage/${data[0]?.images}`
      }
      alt="Uploaded File"
      className="mt-8 w-full aspect-[2.13] max-md:max-w-full"

      // className="self-center aspect-[0.78] h-20 w-full mb-2"
    />
  ) : (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4be2e426e23efa98427d9869151ccd96fcb788b80b933dbdf88add445b8a9?"
      alt="Placeholder"
      className="self-center aspect-[0.78] w-[38px]"
    />
  )}
        <div className="text-center mt-4">
          <span>{file ? fileName : 'Upload your image'}</span>
        </div>
      </div>
      <input
        type="file"
        id="fileInput"
        name='images'
        accept=".jpg, .jpeg, .png"
        onChange={handleFileChange}
        className="hidden"
      />
  
    </label>

          </div>
        </div>
        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-11 text-sm font-semibold leading-5 whitespace-nowrap text-slate-500 max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full">Title</div>
            <div className="flex justify-center items-start py-5 pr-16 pl-4 mt-3 bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:pr-5 max-md:max-w-full">
  <input
  name="title"
  value={formData.title}
  onChange={handleInputChange}
    className="w-full bg-transparent border-none focus:outline-none"
  />
</div>
            <div className="mt-6 max-md:max-w-full">Text</div>
            <div className="items-start pt-5 pr-16 pb-32 pl-4 mt-3 bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:pr-5 max-md:pb-10 max-md:max-w-full">
       <textarea
              name="subTitle"
       value={formData.subTitle}
       onChange={handleInputChange}
        placeholder='Here is a sample placeholder'
    className="w-full bg-transparent border-none focus:outline-none"
       
       ></textarea>
            </div>
          </div>
           <Button isLoading={loadingcreate} onClick={handleSubmitSection1} colorScheme='teal' size='sm'>
     save
   </Button>
        </div>
      </div>
    </div>













</>
    );
}

export default Section1;


