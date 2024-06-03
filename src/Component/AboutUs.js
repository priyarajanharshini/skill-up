import React from "react";
import aboutusvideo from '../Images/Aboutusvideo.svg'
import playIcon from '../Images/PlayIcon.svg'


const AboutUs = () => {
  return (
    <>
    <div className="flex flex-col items-center gap-6 absolute w-full h-[647px] top-[184px] overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="font-clash-display text-4xl sm:text-5xl font-semibold leading-[48px] sm:leading-[67.2px] text-center w-[280px] sm:w-[831px] h-[auto] sm:h-[67px] gap-0">
          About <span className="text-sky-blue">us</span>
        </h1>
        <div className="font-outfit text-lg sm:text-2xl font-light leading-6 sm:leading-8 text-center text-black w-[280px] sm:w-[855px] h-[auto] sm:h-[32px] gap-0 opacity-100">
          Our mission is to accelerate your career and help you explore new technologies.
        </div>
      </div>
      <div className="relative w-[380px] sm:w-[540px] md:w-[720px] lg:w-[1080px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] mx-auto">
        <img className="w-full h-full rounded-[16px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] object-cover" src={aboutusvideo} alt="Outer Image" />
        <div className="absolute inset-0 flex items-center justify-center">
        <img className="w-50 h-50 object-contain p-4" src={playIcon} alt="Play Icon" />        </div>
      </div>
    </div>
</>
  )

}
export default AboutUs;

