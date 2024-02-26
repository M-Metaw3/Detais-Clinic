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

import Cookies from 'js-cookie';
import {Navigate, NavLink, useNavigate } from 'react-router-dom';

const AboutUSMangment = ({islogin,isjwt}) => {






    const { isPending, error, data } = useQuery({
        queryKey: ['about us'],
        queryFn: () =>
        GetData("/about")
      })
      if (!islogin&&!isjwt) return <Navigate to={'/daschboard/login'} />;
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
