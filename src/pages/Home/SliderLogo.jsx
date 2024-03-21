import React from 'react';
import Slider from 'react-infinite-logo-slider'
import { useEffect, useState } from 'react';
import logo from "../../assets/logo.jpg"
import Url from '../../api/ApiUrl';
const SliderLogo = ({logo}) => {
    console.log(logo);
    const [urlimg, setUrlimg] = useState([])

useEffect(() => {
  
  setUrlimg(logo)
},[logo])
console.log(`$http://143.110.153.206/HomePage/${urlimg[0]?.images}`)
    return (
        <Slider
            width="250px"
            duration={5}
            pauseOnHover={true}
            blurBorders={true}
            blurBoderColor={'#fff'}
        >
           {logo&&logo.map((el,i)=>
           (

<Slider.Slide >

                <img  width={"200px"} src={`http://143.110.153.206/HomePage/${urlimg[i]?.images}`} alt="any" className='w-36'  loading='lazy'/>
                
            </Slider.Slide>

           ))} 
          
        </Slider>
    )
}              
                     
export default SliderLogo