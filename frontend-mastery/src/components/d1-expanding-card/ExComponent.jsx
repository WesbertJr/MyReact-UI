import { useState } from 'react'
import ExCard from './ExCard';
import Header from '../Header';

export default function ExComponent() {
    const [activeDiv, setActiveDiv] = useState();

    function handleClick(key) {
        setActiveDiv(key);
    }
    const images = [
        {
        imgSrc: '/images/miami-heat.png',
        label: 'Miami Heat',
        desc: 'Heat Logo',
        color: 'bg-red-950'
        },
        {
        imgSrc: '/images/la-lakers.png',
        label: 'Los Angeles Lakers',
        desc: 'Lakers Logo',
        color: 'bg-yellow-500'
        },
        {
        imgSrc: '/images/ny-knicks.png',
        label: 'New York Knicks',
        desc: 'Knicks Logo',
        color: 'bg-orange-500'
        },
        {
        imgSrc: '/images/sc-kings.png',
        label: 'Sacramento Kings',
        desc: 'Kings Logo',
        color: 'bg-purple-900'
        },
        {
            imgSrc: '/images/gs-warriors.png',
            label: 'Golden State Warriors',
            desc: 'Warriors Logo',
            color: 'bg-yellow-500'
        },
        {
        imgSrc: '/images/mw-bucks.png',
        label: 'Milwauke Bucks',
        desc: 'Bucks Logo',
        color: 'bg-green-900'
        }
    ]
    return (
        <>
        <Header title={"Day 1"} label={"Expanding Card Component"} />
        <div className="container flex justify-center items-center w-[80vw]">
            {images.map(({ imgSrc, label, color }, key) => {
                return (
                    <ExCard key={key} imgSrc={imgSrc} activeDiv={activeDiv} label={label} color={color} id={key} handleClick={handleClick} />
                );
            })}
        </div>
        <p className="text-2xl text-gray-300/60 pt-4">
            Completed on March 7th 2025
        </p>
        
        </>
    )
    
}