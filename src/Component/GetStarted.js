import React from "react"
import lefthand from "../Images/lefthand.svg";
import righthand from "../Images/righthand.svg"


const GetStarted = () => {
  
    return (
      <>
      <div className="container flex flex-col relative lg:w-[1024px] sm:w-[640px] md:w-[768px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[562px] bg-black rounded-[20px] sm:rounded-[40px] md:rounded-[40px] lg:rounded-[40px] text-white overflow-hidden mx-auto mt-[50px]">
        <div className="absolute flex flex-col items-center gap-6 lg:w-[943px] sm:w-[559px] md:w[688px] xs:h-[200px] sm:h-[250px] md:h-[300px] lg:h-[322px] left-[4px] sm:left-[8px] md:left-[16px] lg:left-[100pxpx] lg:top-[120px] sm:top-[15px] md:top-[16px] xs:top-[10px]">
          <h1 className="font-clash-display text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl  font-semibold text-center text-white  xs:top-[40px] xs:md-[35px]">Make the most of your<br />Online learning experience</h1>
          <p className="font-outfit font-light leading-8 text-lg text-center text-white">
            Our Online Learning Resource Centre has tips, tricks and<br />inspiring stories to help you learn while staying home.
          </p>
          <button className="px-6 sm:px-8 md:px-[60px] py-3 sm:py-4 md:py-5 rounded-[16px] bg-blue-500 hover:bg-blue-700">
            Get Started
          </button>
        </div>
        <img className="absolute w-[60px] h-[40px] sm:w-[80px] sm:h-[200px] md:w-[150px] md:h-[300px] lg:w-[200px] lg:h-[150px] right-0 top-4 lg:top-[70px]" src={righthand} alt="Righthand" />
        <img className="absolute w-[88px] h-[114px] sm:w-[133px] sm:h-[172px] md:w-[177px] md:h-[229px] bottom-4 left-4 lg:top-[333px] lg:left-[70px]" src={lefthand} alt="Lefthand" />
      </div>
     </>
    );
  };
      
export default GetStarted




