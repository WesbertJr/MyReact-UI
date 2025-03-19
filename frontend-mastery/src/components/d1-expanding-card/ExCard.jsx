import { useState } from "react";

export default function ExCard({ imgSrc, label, color, activeDiv, id, handleClick }) {
    return (
        <div className={`panel object-contain flex-[0.5] m-2 relative bg-auto bg-no-repeat bg-center cursor-pointer rounded-xl  h-[35vh] transition-flex duration-125 ease-in overflow-hidden hover:active  ${color} ${activeDiv === id ? 'active' : ''}`}
        style={{ backgroundImage: `url(${imgSrc})`, backgroundSize: '140px 140px' }}
        key={id}
        onClick={() => handleClick(id)}>  
            
        <div className="text-black w-full font-bold absolute transition-opacity duration-325 ease-in bottom-0 bg-white h-[5vh] opacity-0 grid place-items-center">
            <h3 className="text-black font-bold relative ">
                {label}
            </h3>
        </div>
            
        </div>

    )
}