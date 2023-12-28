import React, { Fragment } from "react";
import HomeCarousel from "../../HomeCarousel/HomeCarousel";
import HomeSectionCarousel from "../../HomeSectionCarousel/HomeSectionCarousel";


const HomePage = () => {

    return (
        <Fragment>
            <HomeCarousel/>
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarousel sectionName = {"Men's Kurtas"}/>
                <HomeSectionCarousel sectionName = {"Men's Shoes"}/>
                <HomeSectionCarousel sectionName = {"Men's Shirts"}/>
                <HomeSectionCarousel sectionName = {"Men's T-shirts"}/>
                <HomeSectionCarousel sectionName = {"Women's Sarees"}/>
                <HomeSectionCarousel sectionName = {"Women's Dresses"}/>
            </div>
        </Fragment>
    );
};

export default HomePage;