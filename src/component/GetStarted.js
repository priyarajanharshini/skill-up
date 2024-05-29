import React from "react"
import lefthand from "../Images/lefthand.svg";
import righthand from "../Images/righthand.svg"


const GetStarted  = () => {
  
    return (
      <>
        <div className="container flex flex-col relative w-[1200px] h-[562px] bg-black   rounded-x1 radius-[40px] text-white overflow-hidden mx-auto">
      <div className="absolute flex flex-col items-center gap-6 w-[943px] h-[322px] left-[148px] top-[120px]">
        <h1 className="font-clash-display text-4xl sm:text-5xl w-full font-semibold text-center text-white">
          Make the most of your<br />Online learning experience
        </h1>
        <p className="font-outfit font-light leading-8 text-lg text-center text-white">
          Our Online Learning Resource Centre has tips, tricks and<br />inspiring stories to help you learn while staying home.
        </p>
        <button className="px-[60px] py-5 rounded-16 bg-blue-500 hover:bg-blue-700">
          Get Started
        </button>
      </div>
      <img className=" absolute w-[200px] h-[300px] right-[0px] top-[20px] "src={righthand} alt="Righthand"/>
      <img className="absolute w-[177px] h-[229px] top-[333px] left-[70px]" src={lefthand} alt="Lefthand"/>
      </div>    
      </>
    );
  };
      
export default GetStarted




