import Header from "../Header";
import { useState } from "react";

export default function Loader() {
    const [nextActive, setButtonActive] = useState(1); 
    const [prevActive, setPrevActive] = useState('disabled'); 
    const circles = [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 }
    ]
    let filled = ''; 
    function nextClick() {
        if (nextActive > circles.length) {
            setButtonActive(circles.length);
            return;
        }
        if (nextActive > 0) {
            setPrevActive('')
        }
        setButtonActive(prev => prev + 1); 
        
    }

    function prevClick() {
        setButtonActive(prev => {
            const newValue = prev - 1;
            if (newValue <= 1) {
                setPrevActive('disabled');
                return 1;
            }
            return newValue;
        });
    }

    function update() {
        // 
    }
    return (
        <>
            <Header title={"Day 2"} label={"Progress Loader Component"} />
            <div className="container">
                <div className="progress-container flex justify-between relative mb-[30px] max-w-[100%] width-[350px]
                 before:ring-2 before:rounded before:bg-gray-400/60 before:ring-gray-400/60 before:absolute before:top-[50%] before:left-0 before:h-[6px] before:w-[100%] before:z-[-2]
                ">
                    <div className="progress 
                    bg-blue-500 absolute rounded top-[50%] left-0 h-[6px] w-[0%] transform [translateY(-50%)] z-[-1] transition duration-4 ease
                    " id="progress"></div>
                    {circles.map(({ number }, key) => (
                        <div key={key+1} className={'circle relative top-[4px] bg-amber-50 rounded-3xl w-5 h-5 ring-2 ring-gray-400/60 text-sm text-black font-extrabold '}>{number}</div>
                    ))}
                </div>

                <div className="container flex justify-center items-center gap-4 pt-4">
                    <button className="cursor-pointer disabled:bg-gray-400/60 disabled:cursor-not-allowed disabled:ring-gray-400/60 disabled:hover:scale-100 hover:scale-110 transition-transform duration-300 ease-in-out bg-blue-500 font-bold btn rounded ring-1 ring-blue-500 w-[100px]" id="id"
                    disabled={prevActive}
                    onClick={() => prevClick()}>Prev</button>
                    <button className="cursor-pointer disabled:bg-gray-400/60 disabled:cursor-not-allowed disabled:ring-gray-400/60 disabled:hover:scale-100 hover:scale-110 transition-transform duration-300 ease-in-out bg-blue-500 font-bold btn rounded ring-1 ring-blue-500 w-[100px]" id="id"
                    onClick={() => nextClick()}>Next</button>
                </div>
            </div>
        </>
    );
}