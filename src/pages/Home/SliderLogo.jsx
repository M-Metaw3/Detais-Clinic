import React from 'react';
import Slider from 'react-infinite-logo-slider'

import logo from "../../assets/logo.jpg"
import Url from '../../api/ApiUrl';
const SliderLogo = ({logo}) => {
    console.log(logo);
    return (
        <Slider
            width="250px"
            duration={5}
            pauseOnHover={true}
            blurBorders={true}
            blurBoderColor={'#fff'}
        >
           {logo&&logo.map((el)=>
           (

<Slider.Slide >
                <img src={`${Url}/Homepage/${el?.images}`} alt="any" className='w-36' />
                
            </Slider.Slide>

           ))} 
          
        </Slider>
    )
}              
                     
export default SliderLogo