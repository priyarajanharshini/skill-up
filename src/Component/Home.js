import React from "react";
import PYTHON from '../Icons/python.svg'
import Frame from '../Icons/Frame.svg';
import Frame1 from '../Icons/Frame1.svg';
import FLUTTER from '../Icons/FLUTTER.svg';
import react from '../Icons/react.svg';
import JAVA from '../Icons/JAVA .svg';
import Glimb from "./Glimb";
import WhyUs from "./whyus";
import FAQ from "./FAQ";
import GetStarted from "./GetStarted";
import { Fa0 } from "react-icons/fa6";

function Home() {

    return (
        <>
            <div className="container mx-auto mt-4">

                <div className="mx-auto  mt-12 sm:mt-20 md:mt-20 lg:mt-20  text-center">
                    <div className="flex justify-center mb-4">
                        <button className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md h-14 bg-white-500 text-black border border-gray-500 font-bold rounded-full flex items-center justify-between px-4 sm:px-8 md:px-8 lg:px-12">
                            <span className="text-black font-medium text-sm md:text-lg lg:text-lg leading-8">
                                Top Courses by Top Mentors
                            </span>
                            <img className="w-10 h-10 hidden sm:block md:hidden lg:hidden" src={Frame1} alt="Frame1" />
                            <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 block lg:h-24 lg:block md:block sm:hidden " src={Frame} alt="Frame" />
                        </button>
                    </div>
                    <div className="relative">
                        <div className="absolute top-18 left-3.5 inset-y-0  lg:-top-16 lg:left-16 md:left-10 md:-top-12 sm:-top-16">
                            <img className="w-10 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-24 lg:h-24" src={PYTHON} alt="Python" />
                        </div>
                        <div className="absolute inset-y-0 right-4 lg:-top-24 sm:right-8 sm:-top-24 md:right-10 md:-top-24 lg:right-12">
                            <img className="w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-24 lg:h-24" src={FLUTTER} alt="Flutter" />
                        </div>
                        <div className="absolute top-40 lg:top-56 md:top-72 sm:top-64 left-2 lg:left-10 md:left-10 md:left-1  ">
                            <img className="w-14 h-14 lg:w-28 lg:h-28 md:w-20 md:h-20 sm:w-24 sm:h-24" src={JAVA} alt="Java" />
                        </div>

                        <div className="absolute top-48 right-4 lg:right-20 md:right-4 sm:right-4 sm:top-56">
                            <img className="w-14 h-14  sm:w-20 sm:h-20 md:w-16 md:h-16 lg:w-24 lg:h-24" src={react} alt="React" />
                        </div>


                    </div>

                    <div className="text-center mt-14 mx-2 sm:mx-4">
                        <p class=" px-4 font-clash font-bold text-5xl xs:text-5xl sm:text-5xl md:text-6xl leading-tight lg:text-6xl lg:leading-snug">
                            Specialize in<span class="text-blue-600"> high-demand </span>
                        </p>
                        <p className="px-4 font-clash font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight lg:leading-snug">
                            technical courses
                        </p>
                    </div>
                    <div class="flex justify-center items-center mt-3">
                        <div class="font-outfit text-base font-thin leading-8 text-center max-w-xs mx-auto md:max-w-full">
                            <p>Discover our dynamic curriculum tailored to empower you with the</p>
                            <p>essential skills needed to thrive in today's bustling job market.</p>
                        </div>

                    </div>
                    <div className=" mt-7">
                        <button className="bg-blue-500  text-white text-xl py-2 px-4 rounded-xl text-sm w-60 min-h-16">
                            Get Started
                        </button>
                    </div>

                </div>


                <div class="container mx-auto mt-24 px-4 sm:px-6 md:px-8">
                    <div class="flex flex-wrap justify-center -mx-2">
                        <div class="w-full flex flex-wrap justify-center -mx-2 mb-10">
                            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-8">
                                <div class="border border-gray-100 shadow-lg rounded-3xl p-0.5">
                                    <div class="bg-[#e7f4ff] p-6 rounded-3xl mx-auto text-center shadow-sm h-40">
                                        <p class="font-display text-5xl font-semibold leading-72 text-left pl-5 pb-2">15,635+</p>
                                        <p class="font-display text-base font-medium leading-6 text-left text-gray-600 pl-5 pt-2">students enrolled</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-8">
                                <div class="border border-gray-100 shadow-lg rounded-3xl p-0.5">
                                    <div class="bg-[#e7f4ff] p-6 rounded-3xl mx-auto text-center shadow-sm h-40">
                                        <p class="font-display text-5xl font-semibold leading-72 text-left pl-5 pb-2">60+</p>
                                        <p class="font-display text-base font-medium leading-6 text-left text-gray-600 pl-5 pt-2">best selling courses</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-8">
                                <div class="border border-gray-100 shadow-lg rounded-3xl p-0.5">
                                    <div class="bg-[#e7f4ff] p-6 rounded-3xl mx-auto text-center shadow-sm h-40">
                                        <p class="font-display text-5xl font-semibold leading-72 text-left pl-5 pb-2">200+</p>
                                        <p class="font-display text-base font-medium leading-6 text-left text-gray-600 pl-5 pt-2">expert Instructors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            <WhyUs />
            <Glimb />
            <FAQ />
            <GetStarted />

            </div>
        </>
    );
}

export default Home;



