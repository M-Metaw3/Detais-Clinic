// import React from 'react';
// import SectionOneAboutus from './SectionOneAboutus';
// import SectionTwoAboutus from './SectionTwoAboutus';
// import SectionThreeAboutus from './SectionThreeAboutus';
// import SectionFourAboutus from './SectionFourAboutus';
// import { useParams ,useLocation } from 'react-router-dom';
// import {GetData} from '../../api/apiFactory';
// import {
//     QueryClient,
//     QueryClientProvider,
//     useQuery,
//   } from '@tanstack/react-query'
// import Skeletoncomp from '../../components/Skeletoncomp';
// const AboutUs = () => {
//     const { isPending, error, data } = useQuery({
//         queryKey: ['repoData'],
//         queryFn: () =>
//         GetData("/about")
//       })
//       if(isPending){
//         return <Skeletoncomp/>
//     }

//     if(isPending){
//       return <Skeletoncomp/>
//   }
//   const elementToRenderImage = 1;
//     return (
//         <div>
//        <SectionOneAboutus  />
//        {data&&data?.data?.data?.map((el,index)=>(
//       <>
//           {index === elementToRenderImage ? (
            
// <SectionFourAboutus/>):(
// <SectionTwoAboutus data={el}/>)}
// </>
//        ))
  
           
     
//        }
  
//        {/* <SectionThreeAboutus/> */}
//        </div>
//     );
// }

// export default AboutUs;
import React from 'react';
import SectionOneAboutus from './SectionOneAboutus';
import SectionTwoAboutus from './SectionTwoAboutus';
import SectionThreeAboutus from './SectionThreeAboutus';
import SectionFourAboutus from './SectionFourAboutus';
import { useParams, useLocation } from 'react-router-dom';
import { GetData } from '../../api/apiFactory';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import Skeletoncomp from '../../components/Skeletoncomp';
import { Box } from '@chakra-ui/react';

const AboutUs = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['aboutusData'],
    queryFn: () => GetData("/about"),
  });

  if (isPending) {
    return <Skeletoncomp />;
  }

  if (isPending) {
    return <Skeletoncomp />;
  }

  const elementToRenderImage = 1;

  return (
    <div>
      <SectionOneAboutus />
      <Box  width={'95%'} mr={"auto"} ml={"auto"}>
      {data?.data?.data?.map((el, index) => (
        <React.Fragment key={index}>
          {index === elementToRenderImage && <SectionFourAboutus />}
        {index%2==0&&  <SectionTwoAboutus data={el}  key={index} />}
        {index%2!==0&&  <SectionThreeAboutus data={el}  key={index} />}

        </React.Fragment>
      ))}
      </Box>
    </div>
  );
};

export default AboutUs;