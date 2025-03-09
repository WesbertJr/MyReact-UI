import Header from "../Header";

export default function Loader() {
    return (
        <>
            <Header title={"Day 2"} label={"Progress Loader Component"} />
            <div className="container">
                <div className="progress-container flex justify-between relative mb-[30px] max-w-[100%] width-[350px]">
                    <div className="progress 
                    bg-blue-500 absolute top-[50%] left-0 h-[4px] w-[50%] transform [translateY(-50%)] z-[-1] transition duration-4 ease
                    before:bg-gray-500 before:absolute before:top-[50%] before:left-0 before:h-[4px] before:w-[200%] before:z-[02]
                    " id="progress"></div>
                    <div className="circle active">1</div>
                    <div className="circle">2</div>
                    <div className="circle">3</div>
                    <div className="circle">4</div>
                </div>

                <div className="container flex justify-center items-center gap-4 pt-4">
                    <button className="cursor-pointer hover:bg-white hover:text-black btn rounded ring-1 ring-white w-[100px]" id="id" disabled>Prev</button>
                    <button className="cursor-pointer hover:bg-white hover:text-black btn rounded ring-1 ring-white w-[100px]" id="id">Next</button>
                </div>
            </div>
        </>
    );
}