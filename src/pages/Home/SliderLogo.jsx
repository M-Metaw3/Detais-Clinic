import React from 'react';
import Slider from 'react-infinite-logo-slider'

import logo from "../../assets/logo.jpg"
const SliderLogo = () => {
    
    return (
        <Slider
            width="250px"
            duration={5}
            pauseOnHover={true}
            blurBorders={true}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide >
                <img src={logo} alt="any" className='w-36' />
                <p>aaaaa</p>
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/any2.png" alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/any3.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <div>
                    Other component...
                </div>
            </Slider.Slide>
        </Slider>
    )
}              
                     
export default SliderLogo