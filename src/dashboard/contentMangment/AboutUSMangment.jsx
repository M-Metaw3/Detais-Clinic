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
import AboutUsDashboard from '../AboutUsDashboard';

const AboutUSMangment = () => {






    const { isPending, error, data } = useQuery({
        queryKey: ['about us'],
        queryFn: () =>
        GetData("/about")
      })
      console.log(data?.data?.data);
    return (
        <div>
                   <Box bg={"white"} p={"10px"} >
            <NavigationBox URL={"about"}/>

            </Box>
            <Box>

<AboutUsDashboard data={data?.data?.data}/>

            </Box>
        </div>
    );
}

export default AboutUSMangment;
