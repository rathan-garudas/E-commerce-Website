import React, { Fragment } from "react";
import snowImg from "../../../Assets/WhatsApp Image 2022-02-03 at 8.44.10 PM.jpeg";

const HomeSectionCard = (props) => {
    return (
        
        <div key={props.key} className="cursor-pointer  flex  flex-col  items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black">
            
            <div className="h-[13rem] w-[10rem]">
                <img className="object-cover object-top w-full h-full" src={snowImg} alt=""/>
            </div>
            
            <div className='p-4'>
                <h3 className= 'text-1g font-medium text-gray-900'>Nofilter {props.index}</h3>
                <p className='mt-2 text-sm text-gray-500'>Men Solid Pure Cotton Straight Kurta</p>
            </div>

        </div>
    );
};

export default HomeSectionCard;
