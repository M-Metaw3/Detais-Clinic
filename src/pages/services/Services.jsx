import React from 'react';
import SectionOneServices from './SectionOneServices';
import SectionTwoServices from './SectionTwoServices';
import {GetData} from '../../api/apiFactory';

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
import Skeletoncomp from '../../components/Skeletoncomp';
import { Box } from '@chakra-ui/react';
const Services = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['dataServices'],
        queryFn: () =>
        GetData("/service")
      })
      if(isPending){
        return <Skeletoncomp/>
    }
    return (
        <Box >
            <SectionOneServices/>
            <SectionTwoServices dataservices={data?.data?.data}/>
        </Box>
    );
}

export default Services;
