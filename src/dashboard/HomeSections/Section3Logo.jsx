
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
import Url from '../../api/ApiUrl';


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
//         <div>


         
//             <Box bg={"white"}  p={"10px"}mt={"10px"} mb={"10px"}>
//             <Text m={'10px'}  fontSize='3xl'>{header}</Text>

          


                
// <Box 
// display={'flex'}
// justifyContent={'flex-end'}

// >

// <Button onClick={()=>setaddNew(true)}  borderRadius={'full'}>


//     <AddIcon/>
// </Button>
// </Box>









// <Box display={'flex'} >


  
  



// {addNew&&<Box >
//    <Box display={'flex'}
// justifyContent={'flex-end'}>
//    <CloseButton onClick={()=>handeleraddnew()} />
//     </Box>     

//     <Box w={"48%"} m={"10px"} p={"10px"} >

// {formData.images&&(

// <Image boxSize='150px' w={'95%'} borderRadius={'5px'} src={URL?.createObjectURL(formData.images)?URL?.createObjectURL(formData.images):''} alt='Dan Abramov' />)}

// <Input
// name="images"
// onChange={handleInputChange}
// type="file"
// />
// {formData.images && (
// <p>Selected file: {formData.images.name}</p>
// )}

// </Box>
// <Box m={"10px"} textAlign={'center'} >
// <Button w={'full'} onClick={handleSubmitSection1} colorScheme='teal' size='sm'>
//     save
//   </Button>

// </Box>
//    </Box>}









// {data&&data.map((el,indx)=>(
//   <Box key={indx} m={"10px"} width={"13%"} bgColor={'rgba(220, 222, 228, 0.25)'}>
//     <Text fontSize={'20px'} m={"5px"}>Logo {indx+1}</Text>
// <Box p={'10px'} margin={'auto'} mb={"5px"}  width={'75%'} >
//   <Image m={'auto'} borderRadius={'5px'} mb={"10px"} boxSize='150px' src={`${Url}/Homepage/${el.images}`} alt='logo' />
// </Box>
// <Button onClick={()=>handelerdelete(el._id)}>Delete</Button>
// </Box>

// ))
// }
// </Box>
//             </Box>
//         </div>













<>





           <Box bg={"white"}  p={"10px"}mt={"10px"} mb={"10px"}>

<div className="px-7 pt-5 pb-12 bg-white max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-3.5 max-md:mt-10 max-md:max-w-full">
            <div className="text-xl font-semibold text-neutral-600 max-md:max-w-full">
              Section 5
            </div>
            <div className="mt-9 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
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
               {data&&data.map((el,indx)=>( <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-4 py-6 w-full text-base font-bold rounded shadow-sm bg-zinc-200 bg-opacity-30 text-blue-700 text-opacity-40 max-md:mt-7">
                    <div>Logo {indx+1}</div>
                    <img
                      loading="lazy"
                      src={`${Url}/Homepage/${el.images}`} alt='logo'
                      className="mt-6 w-full aspect-[1.47]"
                    />
                  </div>
 <Button onClick={()=>handelerdelete(el._id)}>Delete</Button>

                </div>))}
             
               
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
            <button onClick={()=>setaddNew(true)} >
          <div className="flex flex-col text-base font-bold text-blue-700 text-opacity-40 max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dbe5b45f64af45165da82b99e1e2fc819844ea1a3b91687197ad89bb23061a8?"
              className="self-end w-10 aspect-square"
            />
          </div>
       </button>
        </div>
      </div>
    </div>



             </Box>








</>












    );
}

export default Section3Logo;


