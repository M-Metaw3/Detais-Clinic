import React from 'react';
import SectionOneAboutus from './SectionOneAboutus';
import SectionTwoAboutus from './SectionTwoAboutus';
import SectionThreeAboutus from './SectionThreeAboutus';
import SectionFourAboutus from './SectionFourAboutus';
import { useParams ,useLocation } from 'react-router-dom';

const AboutUs = () => {
    // const s = useP()
    const location = useLocation();
    console.log(location);
    return (
        <div>
       <SectionOneAboutus/>
       <SectionTwoAboutus/>
       <SectionFourAboutus/>
       <SectionThreeAboutus/>
       </div>
    );
}

export default AboutUs;
