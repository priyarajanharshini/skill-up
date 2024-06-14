import React from "react";
import aboutusvideo from '../Images/Aboutusvideo.svg'
import playIcon from '../Images/PlayIcon.svg'


const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col relative items-center gap-6 mt-12 sm:mt-20 md:mt-20 lg:mt-20 overflow-hidden">
        <div className="flex flex-col items-center">
          <h1 className="font-clash text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold leading-67.2px sm:leading-67.2px text-center">
            About <span className="text-sky-blue">us</span>
          </h1>
          <p className="font-outfit text-lg sm:text-2xl lg:text-xl w-full font-regular leading-8 sm:leading-8 text-center text-black mt-4 sm:mt-6 p-1 xs:px-120px sm:px-120px md:px-20 lg:px-1">
            Our mission is to accelerate your career and help you explore new technologies.
          </p>
        </div>
        <div className="lg:mx-10 md:mx-2.5 sm:mx-5 mx-6 rounded-40px overflow-hidden px-4 sm:px-6 ">
          <img className=" rounded-2xl sm:rounded-3xl md:rounded-28px lg:rounded-32px object-cover" src={aboutusvideo} alt="Outer" />
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <img className="object-contain p-4 w-28 h-28 xs:w-28 xs:h-28 sm:w-36 sm:h-36 md:w-44 md:h-36  lg:w-48 lg:h-44" src={playIcon} alt="Play Icon" />
          </div> */}
        </div>
      </div>
      <div class="container mx-auto mt-16 sm:mt-24 md:mt-24 lg:mt-24 px-4 sm:px-6 md:px-8">
        <div class="flex flex-wrap justify-start justify-center -mx-2">
          <div class="w-full flex flex-wrap justify-start -mx-2 mb-10">
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-8">
              <div class="border border-white-100 shadow-custom-box rounded-3xl p-0.5">
                <div class="bg-[#e7f4ff] p-10 rounded-3xl mx-auto text-center h-40">
                  <p class="font-clash text-5xl font-semibold leading-72 text-left">2020</p>
                  <p class="font-clash text-base font-medium leading-6 text-left text-gray-400 pt-2">founded</p>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-8">
              <div class="border border-gray-100 shadow-custom-box rounded-3xl p-0.5">
                <div class="bg-[#e7f4ff] p-10 rounded-3xl mx-auto h-40">
                  <p class="font-clash text-5xl font-semibold leading-72 text-left">1,560+</p>
                  <p class="font-clash text-base font-medium leading-6 text-left text-gray-400  pt-2 ">satisfied students</p>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-8">
              <div class="border border-white-100 shadow-custom-box rounded-3xl p-0.5">
                <div class="bg-[#e7f4ff] p-10 rounded-3xl mx-auto text-center h-40">
                  <p class="font-clash text-5xl font-semibold leading-72 text-left">50+</p>
                  <p class="font-clash text-base font-medium leading-6 text-left text-gray-400  pt-2">personlized courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
export default AboutUs;

