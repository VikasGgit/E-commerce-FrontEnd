import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarosalData } from './HomeCarosalData';


const items = CarosalData.map((item)=><img src={item.image} className='w-screen p-2 cursor-pointer max-h-96 -z-40' role='presentation' />)

export const Carousel = () => (
    <AliceCarousel
        items={items}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        
    />
   
);