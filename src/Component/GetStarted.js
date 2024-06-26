import React, {  useEffect } from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import lefthand from "../Images/lefthand.svg";
import righthand from "../Images/righthand.svg"


const GetStarted = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleClick = () => {
    if (location.pathname === '/course') {
      window.scrollTo(0, 0);
    } else {
      navigate('/course');
    }
  };
  return (
    <>
      <div className="lg:mx-10 md:mx-2.5 sm:mx-5 mx-6 lg:px-6 md:px-4 sm:px-3 xs:px-1.5 px-2 xs:pt-8 sm:pt-12 md:pt-12 lg:pt-24 pt-75px  xs:pb-8 sm:pb-12 md:pb-16 lg:pb-24 pb-75px flex flex-col relative bg-black rounded-40px text-white overflow-hidden mt-14 lg:mt-20 mb-14">
        <div className="relative flex flex-col items-center mx-0.5">
          <h1 className="font-clash font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-center text-white px-4 sm:px-8 md:px-28 lg:px-114px xl:px-40">
            Make the most of your Online learning experience
          </h1>
          <p className="font-outfit font-light leading-8 text-lg text-center text-white mt-5 px-4 sm:px-12 md:px-20 lg:px-52 xl:px-350px">
            Our Online Learning Resource Centre has tips, tricks and inspiring stories to help you learn while staying home.
          </p>
          <button onClick={handleClick} className="font-clash font-semibold px-6 sm:px-8 md:px-60px py-3 text-xl sm:py-4 md:py-5 w-60 rounded-2xl bg-blue-500  mt-8">
            Get Started
          </button>
        </div>
        <img className="hidden sm:hidden md:hidden lg:block absolute w-15 h-10 sm:w-20 sm:h-200px md:w-150px md:h-230px lg:w-210px lg:h-150px right-0 top-20 xs:top-0 sm:top-px md:top-5 lg:top-14" src={righthand} alt="Righthand" />
        <img className="hidden sm:hidden md:hidden lg:block absolute w-88px h-px sm:w-133 sm:h-172px md:w-44 md:h-56 lg:w-44 lg:h-56 bottom-0 left-28 " src={lefthand} alt="Lefthand" />
      </div>
    </>
  );
};
export default GetStarted




