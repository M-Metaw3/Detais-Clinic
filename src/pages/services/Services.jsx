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
        <div>
            <SectionOneServices/>
            <SectionTwoServices dataservices={data?.data?.data}/>
        </div>
    );
}

export default Services;
