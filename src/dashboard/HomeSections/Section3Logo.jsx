
import React,{useState} from 'react';
import {  FormControl,Img ,
    FormLabel,Image,
    FormErrorMessage,FormHelperText, FormHelper,Text, Textarea ,Box,Heading,Input,Button,CloseButton ,
    useToast,
    CircularProgress, CircularProgressLabel 
} from '@chakra-ui/react'
    import {
        QueryClient,
        QueryClientProvider,
        useQuery,
      } from '@tanstack/react-query'
import {DeleteData, GetData} from '../../api/apiFactory';
import {PostDataWithImg} from '../../api/apiFactory';

import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'


const Section3Logo = ({header,data,enumsec} ) => {
  const toast = useToast();

    const [formData, setFormData] = useState({
  
        images: null,
      });
      const [addNew , setaddNew] = useState(false);
     
    const [uploadProgress, setUploadProgress] = useState(0);
console.log(uploadProgress);
    const handleSubmitSection1 = async () => {
        const data = new FormData();
   
        data.append('images', formData.images);
        data.append('section', enumsec);



            
        try {
 
    
        //   const response = await PostDataWithImg('/Home',data,)
          const response = await PostDataWithImg('/Home', data, (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted);
          });
          console.log(response);
          if(response.status==201){
            setFormData({images:null})
            setaddNew(false)
            toast({
              title: 'Section added',
              description: 'Section updated successfully!',
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
    
  window.location.reload('http://localhost:3000/dashboard/contentmangment')
         
            console.log("done")
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


const handeleraddnew= ()=>{
    setFormData({images:null})
    setaddNew(false)
}

const handelerdelete=async(e)=>{
  try {
    const response= await DeleteData(`Home/${e}`)
    if(response.status==204){
      toast({
        title: 'Section deleted',
        description: 'Section updated successfully!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });

window.location.reload('http://localhost:3000/dashboard/contentmangment')
      return;
    }
    console.log(response);

  } catch (error) {
    console.log(error);
  }
}
    return (
        <div>


         
            <Box bg={"white"}  p={"10px"}mt={"10px"} mb={"10px"}>
            <Text m={'10px'}  fontSize='3xl'>{header}</Text>

          


                
<Box 
display={'flex'}
justifyContent={'flex-end'}

>

<Button onClick={()=>setaddNew(true)}  borderRadius={'full'}>


    <AddIcon/>
</Button>
</Box>









<Box display={'flex'} >


  
  



{addNew&&<Box >
   <Box display={'flex'}
justifyContent={'flex-end'}>
   <CloseButton onClick={()=>handeleraddnew()} />
    </Box>     

    <Box w={"48%"} m={"10px"} p={"10px"} >

{formData.images&&(

<Image boxSize='150px' w={'95%'} borderRadius={'5px'} src={URL?.createObjectURL(formData.images)?URL?.createObjectURL(formData.images):''} alt='Dan Abramov' />)}

<Input
name="images"
onChange={handleInputChange}
type="file"
/>
{formData.images && (
<p>Selected file: {formData.images.name}</p>
)}

</Box>
<Box m={"10px"} textAlign={'center'} >
<Button w={'full'} onClick={handleSubmitSection1} colorScheme='teal' size='sm'>
    save
  </Button>

</Box>
   </Box>}









{data&&data.map((el,indx)=>(
  <Box key={indx} m={"10px"} width={"13%"} bgColor={'rgba(220, 222, 228, 0.25)'}>
    <Text fontSize={'20px'} m={"5px"}>Logo {indx+1}</Text>
<Box p={'10px'} margin={'auto'} mb={"5px"}  width={'75%'} >
  <Image m={'auto'} borderRadius={'5px'} mb={"10px"} boxSize='150px' src={`http://localhost:3111/Homepage/${el.images}`} alt='logo' />
</Box>
<Button onClick={()=>handelerdelete(el._id)}>Delete</Button>
</Box>

))
}
</Box>
            </Box>
        </div>
    );
}

export default Section3Logo;


