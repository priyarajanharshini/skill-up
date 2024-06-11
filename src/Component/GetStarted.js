import React from "react"
import lefthand from "../Images/lefthand.svg";
import righthand from "../Images/righthand.svg"


const GetStarted = () => {

  return (
    <>
      <div className="sm:pt-75px md:pt-14 lg:pt-120px pb-75px sm:pb-75px md:pb-14 lg:pb-120px flex flex-col relative w-11/12 lg:w-10/12 md:w-9/12 sm:w-8/12 bg-black rounded-40px text-white overflow-hidden mx-auto mt-50px mb-50px pt-75px">
        <div className="relative flex flex-col items-center">
          <h1 className="font-clash font-semibold text-2xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-6xl text-center text-white leading-tight px-8 lg:px-40">
            Make the most of your Online learning experience
          </h1>
          <p className="font-outfit font-light leading-8 text-lg text-center text-white mt-5 px-6 sm:px-12 md:px-20 lg:px-80">
            Our Online Learning Resource Centre has tips, tricks and inspiring stories to help you learn while staying home.
          </p>
          <button className="px-6 sm:px-8 md:px-60px py-3 sm:py-4 md:py-5 w-60 rounded-2xl bg-blue-500 hover:bg-blue-700 mt-8">
            Get Started
          </button>
        </div>
        <img className="hidden sm:hidden md:hidden lg:block absolute w-15 h-10 sm:w-20 sm:h-200px md:w-150px md:h-230px lg:w-210px lg:h-150px right-0 top-20 xs:top-0 sm:top-px md:top-5 lg:top-20" src={righthand} alt="Righthand" />
        <img className="hidden sm:hidden md:hidden lg:block absolute w-88px h-px sm:w-133 sm:h-172px md:w-44 md:h-56 lg:w-44 lg:h-56 bottom-0 left-16 " src={lefthand} alt="Lefthand" />
      </div>
    </>
  );
};
export default GetStarted




