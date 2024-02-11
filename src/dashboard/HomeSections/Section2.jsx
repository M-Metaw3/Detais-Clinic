
import React,{useState} from 'react';
import {   FormControl,Img ,
  FormLabel,Image,
  FormErrorMessage,FormHelperText, FormHelper,Text, Textarea ,Box,Heading,Input,Button,CloseButton ,

  CircularProgress, CircularProgressLabel ,useToast
} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

    import {
        QueryClient,
        QueryClientProvider,
        useQuery,
      } from '@tanstack/react-query'
import {DeleteData, GetData} from '../../api/apiFactory';
import {PostDataWithImg} from '../../api/apiFactory';



const Section2 = ({header, data, enumsec} ) => {
  const toast = useToast();
  // const nav= useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        link: '',
        spacilist : '',

        images: null,
      });
      const [addNew , setaddNew] = useState(false);
      const [btn , setbtn] = useState(false);


      console.log(formData.images)
    const [uploadProgress, setUploadProgress] = useState(0);
console.log(uploadProgress);
    const handleSubmitSection1 = async () => {
        const data = new FormData();
        data.append('link', formData.link);
        data.append('name', formData.name);

        data.append('spacilist', formData.spacilist);
        data.append('images', formData.images);
        data.append('section', enumsec);

            
        try {
 
    
      
          const response = await PostDataWithImg('/Home', data, (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted);
          });
          console.log(response);

          
       
          if(response.status==201){
            toast({
              title: 'Section Updated',
              description: 'Section updated successfully!',
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
    
window.location.reload('http://localhost:3000/dashboard/contentmangment')

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
         
            <Box bg={"white"}  p={"10px"}mt={"10px"} mb={"10px"} >
            <Text m={'10px'} fontSize='3xl'>Section {header}</Text>







            <Box 
display={'flex'}
justifyContent={'flex-end'}

>

<Button onClick={()=>setaddNew(true)}  borderRadius={'full'}>


    <AddIcon/>
</Button>
</Box>











  




















{/* card */}

<Box display={'flex'} flexWrap={'wrap'}  p={'20px'}>





{addNew&&<Box m={"10px"} bgColor={'rgba(220, 222, 228, 0.25)'} p={"20px"} width={"25%"} >
<Box display={'flex'}
justifyContent={'flex-end'}>
   <CloseButton onClick={()=>handeleraddnew()} />
    </Box>     

<Box mb={"10px"} >
{formData.images&&(

<Image  boxSize={'200px'} borderRadius={'15px'} w={"100%"} src={URL?.createObjectURL(formData.images)?URL?.createObjectURL(formData.images):''} alt='Dan Abramov' />)}

<Input
name="images"
onChange={handleInputChange}
type="file"
/>
{formData.images && (
<p>Selected file: {formData.images.name}</p>
)}
</Box>
<FormControl>
  <FormLabel>name</FormLabel>
  <Input 
    name="name"
    value={formData.name}
    onChange={handleInputChange} type='text' />
  
  <FormLabel>spacilist</FormLabel>
  <Input   name="spacilist"
    value={formData.spacilist}
    onChange={handleInputChange}  type='text' />
  
  <FormLabel>Link</FormLabel>
  <Input 
   name="link"
   value={formData.link}
   onChange={handleInputChange}type='text' />
</FormControl>
<Box mt={"10px"} textAlign={'center'} >
<Button w={'full'} onClick={handleSubmitSection1} colorScheme='teal' size='sm'>
    save
  </Button>

</Box>
<Box>

</Box>

</Box>}


















  {data&&data?.map((el)=>(

<Box m={'10px'} bgColor={'rgba(220, 222, 228, 0.25)'} p={"20px"} width={"25%"} >
<Box mb={"10px"} >
  <Image boxSize={'200px'} borderRadius={'15px'} w={"100%"} src={el&&el.images&&`http://localhost:3111/Homepage/${el.images}`} alt='Dan Abramov' />
</Box>
<FormControl>
  <FormLabel>Name</FormLabel>
  <Input value={el?.name} type='Text' />
  
  <FormLabel>Specialist</FormLabel>
  <Input value={el?.spacilist} type='text' />
  
  <FormLabel>LinkedIn</FormLabel>
  <Input value={el?.link} type='text' />
</FormControl>

<Box>
<Button onClick={()=>handelerdelete(el._id)} >Delete</Button>
</Box>

</Box>


  ))}


</Box>

{/* card */}





 
            </Box>
        </div>
    );
}

export default Section2;


