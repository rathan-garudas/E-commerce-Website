import React, { Fragment } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomecarouselData } from "./HomeCarouselData";



const HomeCarousel = () => {

    const items = HomecarouselData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image} alt=''/>);

    return (
        <div>
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={2000}
                infinite
            />
        </div>
    );
};

export default HomeCarousel;