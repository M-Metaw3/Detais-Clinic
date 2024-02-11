import React from 'react';
import SectionOneHome from './SectionOneHome';
import SectionTwoHome from './SectionTwoHome';
import SectionThreeHome from './SectionThreeHome';
import SectionFourHome from './SectionFourHome';
import SectionFiveHome from './SectionFiveHome';
import SectionSixHome from './SectionSixHome';
import SectionSevenHome from './SectionSevenHome';
import {GetData} from '../../api/apiFactory';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
import Skeletoncomp from '../../components/Skeletoncomp';
import Section8 from './Section8';

const HomePage = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
        GetData("/Home")
      })
console.log(isPending);

// const filteringHomedata= (section)=>{

//     const landing =data?.data?.data?.filter((el)=>el.section==section)
//     return landing
// }
const filteringHomedata = (section) => {
    const landing = data?.data?.data;
  
    // Check if landing is an array before applying filter
    if (Array.isArray(landing)) {
      return landing.filter((el) => el.section === section);
    } else {
      console.error("Data structure is not as expected");
      return [];
    }
  };
  
console.log(filteringHomedata("section"));
console.log(filteringHomedata("landingpage"));
console.log(filteringHomedata("logo"));

if(isPending){
    return <Skeletoncomp/>
}
return (
        <div>
            <SectionOneHome data={filteringHomedata("landingpage")}/>
            <SectionTwoHome data={filteringHomedata("section")}/>
            <SectionThreeHome data={filteringHomedata("section2")}/>
            <SectionFourHome/>
            <SectionFiveHome />
            <SectionSevenHome data={filteringHomedata("doctors")}/>
            <SectionSixHome data={filteringHomedata("logo")}/>
            <Section8/>
        </div>

    );
}

export default HomePage;
