import React, { useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from "react-alice-carousel";
import WestIcon from '@mui/icons-material/West';
import { Button } from "@mui/material";

const HomeSectionCarousel = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({item}) => setActiveIndex(item)

    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => <HomeSectionCard key={index} index={index} />)

    return (
        <div className="border border-black">
            <h2 className="text-2xl font-extrabold text-gray-800 py-5" >{props.sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    responsive={responsive}
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length-5 && <Button onClick={slideNext} variant="contained" className="z-50 bg-white" sx={{position:'absolute', top: '8rem', right:'0rem', transform:'translateX(50%) rotate(90deg)', bgcolor: 'white'}} aria-label="next">
                    <WestIcon sx={{transform:'rotate(90deg)', color: 'black'}}/>
                </Button>}


                {activeIndex !== 0 && <Button onClick={slidePrev} variant="contained" className="z-50 bg-white" sx={{position:'absolute', top: '8rem', left:'0rem', transform:'translateX(-50%) rotate(90deg)', bgcolor: 'white'}} aria-label="next">
                    <WestIcon sx={{transform:'rotate(-90deg)', color: 'black'}}/>
                </Button>}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;