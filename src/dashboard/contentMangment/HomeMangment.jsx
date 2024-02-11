import React,{useState} from 'react';
import NavigationBox from './NavigationBox';
import {  FormControl,Img ,
    FormLabel,Image,
    FormErrorMessage,FormHelperText, FormHelper,Text, Textarea ,Box,Heading,Input,Button,

    CircularProgress, CircularProgressLabel 
} from '@chakra-ui/react'
    import {
        QueryClient,
        QueryClientProvider,
        useQuery,
      } from '@tanstack/react-query'
import {GetData} from '../../api/apiFactory';
import {PostDataWithImg} from '../../api/apiFactory';
import Section1 from '../HomeSections/Section1';
import Section2 from '../HomeSections/Section2';
import Section3Logo from '../HomeSections/Section3Logo';
import Skeletoncomp from '../../components/Skeletoncomp';



const HomeMangment = () => {
//     const [formData, setFormData] = useState({
//         title: '',
//         subTitle: '',
//         images: null,
//       });
//       console.log(formData.images)
//     const [uploadProgress, setUploadProgress] = useState(0);
// console.log(uploadProgress);
//     const handleSubmitSection1 = async () => {
//         const data = new FormData();
//         data.append('title', formData.title);
//         data.append('subTitle', formData.subTitle);
//         data.append('images', formData.images);
//         data.append('section', "landingpage");

            
//         try {
 
    
//         //   const response = await PostDataWithImg('/Home',data,)
//           const response = await PostDataWithImg('/Home', data, (progressEvent) => {
//             const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//             setUploadProgress(percentCompleted);
//           });
//           console.log(response);
//           if(response.status==201){
//             console.log("done")
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       };


//       const handleInputChange = (e) => {
//         const { name, value, type } = e.target;
      
//         setFormData((prev) => {
//           return {
//             ...prev,
//             [name]: type === 'file' ? e.target.files[0] : value,
//           };
//         });
//       };


const { isPending, error, data } = useQuery({
  queryKey: ['Homedashboard'],
  queryFn: () =>
  GetData("/Home")
})
// console.log(data?.data?.data);

const filteringHomedata= (section)=>{

const landing =data?.data?.data.filter((el)=>el.section==section)
return landing
}
console.log(filteringHomedata("section"));
if(isPending){
    return <Skeletoncomp/>
}
    return (
        <div>
            <Box bg={"white"} p={"10px"} >
            <NavigationBox URL={"Home"}/>

            </Box>

            <Section1 header={'1'} data={filteringHomedata("landingpage")} enumsec={'landingpage'} />
            <Section1 header={'2'} data={filteringHomedata("section")} enumsec={'section'} />
            <Section1 header={'3'} data={filteringHomedata("section2")} enumsec={'section2'} />
            <Section2  header={'4'} data={filteringHomedata("doctors")} enumsec={'doctors'} />
            <Section3Logo header={'logo'} data={filteringHomedata("logo")}  enumsec={'logo'}/>

        


           

        </div>
    );
}

export default HomeMangment;


