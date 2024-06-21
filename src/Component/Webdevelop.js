// import React from "react";
// import elipse1 from '../Images/Ellipse 6.svg';
// import cup from '../Images/cup.svg';
// import clock1 from '../Images/clock (1).svg';
// import book from '../Images/book.svg';
// import calender from '../Images/calendar.svg';
// import user from '../Images/profile-2user (1).svg';
// import star from '../Images/star.svg';
// import html from '../Images/HTML5.svg';
// import javascript from '../Images/JAVASCRIPT.svg';
// import Modules from "./CourseModules";
// import Otherpopular from "./Otherpopular";
// function Webdevelop() {
//     return (
//         <>
//             <div className="container mx-auto">
//                 <div className="relative">
//                     <div className="absolute top-18 left-3.5 inset-y-0 lg:-top-4 lg:left-36 md:left-10 md:-top-12 sm:-top-18">
//                         <img className="w-18 h-14 sm:w-20 sm:h-14 md:w-16 md:h-16 lg:w-24 lg:h-24" src={html} alt="html" />
//                     </div>
//                     <div className="absolute top-48 lg:top-48 right-4 lg:right-28 md:right-4 sm:right-4 sm:top-64">
//                         <img className="w-18 h-14 sm:w-20 sm:h-14 md:w-16 md:h-16 lg:w-24 lg:h-24" src={javascript} alt="javascript" />
//                     </div>
//                 </div>
//                 <div className="mt-16 text-center lg:w-7/12 w-10/12 mx-auto">
//                     <p className="font-clash font-semibold text-5xl px-4 leading-tight">
//                         HTML, CSS, and Javascript for
//                         <span className="text-blue-600"> Web Developers </span>
//                     </p>
//                     <p className="font-outfit font-light text-xl leading-8 text-black mt-6">
//                         Prove that you can integrate HTML, CSS, and JavaScript into a website
//                     </p>
//                     <div className="flex items-center justify-center mt-6">
//                         <img className="w-10 h-10 rounded-full" src={elipse1} alt="Instructor" />
//                         <p className="ml-4 font-clash font-medium text-xl leading-6">Dan Scott</p>
//                     </div>
//                     <button className="bg-blue-500 font-semibold text-xl text-white py-5 px-12 rounded-2xl mt-8 font-clash">
//                         Contact us
//                     </button>
//                 </div>
//                 <div className="flex flex-wrap justify-center mt-16 gap-8">
//                     <div className="sm:flex-auto md:flex-47 lg:flex-45">
//                         <div className="w-full h-full shadow shadow-gray-500 rounded-3xl overflow-hidden border-2 border-white m-4 bg-custom-lightgray p-10">
//                             <p className="font-clash font-semibold text-2xl">Courses Details</p>
//                             <p className="border-b border-gray-300 mt-6"></p>
//                             <div className="flex  justify-between mt-8">
//                                 <div className="w-full">
//                                     <p className="font-outfit font-normal text-base text-gray-500 ">Level</p>
//                                     <div className="flex items-center mt-2">
//                                         <img className="w-6 h-6" src={cup} alt="Level" />
//                                         <p className="ml-4 font-clash font-semibold text-xl leading-none">Beginner</p>
//                                     </div>
//                                 </div>
//                                 <div className="w-full">
//                                     <p className="font-outfit font-normal text-base text-gray-500 ">Duration</p>
//                                     <div className="flex items-center mt-2">
//                                         <img className="w-6 h-6" src={clock1} alt="Duration" />
//                                         <p className="ml-4 font-clash font-semibold text-xl leading-none">19 hours</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flex justify-between mt-8">
//                                 <div className="w-full">
//                                     <p className="font-outfit font-normal text-base text-gray-500 ">Lessons</p>
//                                     <div className="flex items-center mt-2">
//                                         <img className="w-6 h-6" src={book} alt="Lessons" />
//                                         <p className="ml-4 font-clash font-semibold text-xl leading-none">15 lessons</p>
//                                     </div>
//                                 </div>
//                                 <div className="w-full">
//                                     <p className="font-outfit font-normal text-base text-gray-500 ">Schedule</p>
//                                     <div className="flex items-center mt-2">
//                                         <img className="w-6 h-6" src={calender} alt="Schedule" />
//                                         <p className="ml-4 font-clash font-semibold text-xl leading-none">Flexible Schedule</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flex justify-between mt-8">
//                                 <div className="w-full">
//                                     <p className="font-outfit font-normal text-base text-gray-500 ">Enrolled Students</p>
//                                     <div className="flex items-center mt-2">
//                                         <img className="w-6 h-6" src={user} alt="Enrolled Students" />
//                                         <p className="ml-4 font-clash font-semibold text-xl leading-none">969,123</p>
//                                     </div>
//                                 </div>
//                                 <div className="w-full">
//                                     <p className="font-outfit font-normal text-base text-gray-500 ">Ratings</p>
//                                     <div className="flex items-center mt-2">
//                                         <img className="w-6 h-6" src={star} alt="Ratings" />
//                                         <p className="ml-4 font-clash font-semibold text-xl leading-none">4.8<span className="text-sm font-medium"> (73,096 views)</span></p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="sm:flex-auto md:flex-47 lg:flex-45">
//                         <div className="w-full h-full shadow shadow-gray-500 rounded-3xl overflow-hidden border-2 border-white m-4 bg-custom-lightgray p-10">
//                             <p className="font-clash font-semibold text-2xl">Courses Objective</p>
//                             <p className="border-b border-gray-300 mt-6"></p>
//                             <div className="mt-6">
//                                 <ul className="list-disc list-inside">
//                                     <li className="font-outfit font-light text-base">Prove that you can integrate HTML, CSS, and JavaScript into a website.</li>
//                                     <li className="font-outfit font-light text-base">Showcase other works that you have already done and other online presence.</li>
//                                     <li className="font-outfit font-light text-base">Provide further information about your qualifications, references, and contact information.</li>
//                                 </ul>
//                             </div>
//                             <p className="font-outfit font-normal text-base text-gray-500 mt-3">Skills</p>
//                             <div className="flex flex-wrap gap-2 mt-3">
//                                 <button className="py-3 px-4 text-blue-600 border-2 rounded-2xl border-zinc-500 font-clash font-medium text-xl leading-6">HTML and CSS</button>
//                                 <button className="py-3 px-4 text-blue-600 border-2 rounded-2xl border-zinc-500 font-clash font-medium text-xl leading-6">Web Design</button>
//                                 <button className="py-3 px-4 text-blue-600 border-2 rounded-2xl border-zinc-500 font-clash font-medium text-xl leading-6">JavaScript</button>

//                             </div>
//                         </div>
//                     </div>
//                 </div>



//                 <Modules/>
//                 <Otherpopular/>
//             </div>


//         </>
//     );
// }

// export default Webdevelop;


import React, { useEffect, useState } from "react";
import axios from "axios";
import elipse1 from '../Images/Ellipse 6.svg';
import cup from '../Images/cup.svg';
import clock1 from '../Images/clock (1).svg';
import book from '../Images/book.svg';
import calender from '../Images/calendar.svg';
import user from '../Images/profile-2user (1).svg';
import star from '../Images/star.svg';
import html from '../Images/HTML5.svg';
import javascript from '../Images/JAVASCRIPT.svg';
import Modules from "./CourseModules";
import Otherpopular from "./Otherpopular";
import { useLocation } from "react-router-dom";

function Webdevelop() {

    const location = useLocation();
    const { state } = location;
    console.log("state",state)

    const [web, setWeb] = useState(null);
    const course_Id = state;


    useEffect(() => {
        axios.post('http://localhost:2000/get_course_by_Id', { course_Id })
            .then(response => {
                console.log("API response:", response.data.getCourse);
                setWeb(response.data.getCourse);
            })
            .catch(error => {
                console.error("Error fetching course details:", error);
            });
    }, [course_Id]);

    console.log("Web", web);

    return (
        <>
            <div className="container mx-auto">
                <div className="relative">
                    <div className="absolute top-18 left-3.5 inset-y-0 lg:-top-4 lg:left-36 md:left-10 md:-top-12 sm:-top-18">
                        <img className="w-18 h-14 sm:w-20 sm:h-14 md:w-16 md:h-16 lg:w-24 lg:h-24" src={html} alt="html" />
                    </div>
                    <div className="absolute top-48 lg:top-48 right-4 lg:right-28 md:right-4 sm:right-4 sm:top-64">
                        <img className="w-18 h-14 sm:w-20 sm:h-14 md:w-16 md:h-16 lg:w-24 lg:h-24" src={javascript} alt="javascript" />
                    </div>
                </div>
                <div className="mt-16 text-center lg:w-7/12 w-10/12 mx-auto">
                    <p className="font-clash font-semibold text-5xl px-4 leading-tight">
                        HTML, CSS, and Javascript for
                        <span className="text-blue-600"> Web Developers </span>
                    </p>
                    <p className="font-outfit font-light text-xl leading-8 text-black mt-6">
                        Prove that you can integrate HTML, CSS, and JavaScript into a website
                    </p>
                    <div className="flex items-center justify-center mt-6">
                        <img className="w-10 h-10 rounded-full" src={elipse1} alt="Instructor" />
                        <p className="ml-4 font-clash font-medium text-xl leading-6">Dan Scott</p>
                    </div>
                    <button className="bg-blue-500 font-semibold text-xl text-white py-5 px-12 rounded-2xl mt-8 font-clash">
                        Contact us
                    </button>
                </div>
                <div className="flex flex-wrap justify-center mt-16 gap-8">
                    <div className="sm:flex-auto md:flex-47 lg:flex-45 w-11/12">
                        <div className="w-full h-full shadow shadow-gray-500 rounded-3xl overflow-hidden border-2 border-white bg-custom-lightgray p-10">
                            <p className="font-clash font-semibold text-2xl">Courses Details</p>
                            <p className="border-b border-gray-300 mt-6"></p>
                            <div className="flex  justify-between mt-8">
                                <div className="w-full">
                                    <p className="font-outfit font-normal text-base text-gray-500 ">Level</p>
                                    <div className="flex items-center mt-2">
                                        <img className="w-6 h-6" src={cup} alt="Level" />
                                        <p className="ml-4 font-clash font-semibold text-xl leading-none">Beginner</p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="font-outfit font-normal text-base text-gray-500 ">Duration</p>
                                    <div className="flex items-center mt-2">
                                        <img className="w-6 h-6" src={clock1} alt="Duration" />
                                        <p className="ml-4 font-clash font-semibold text-xl leading-none">19 hours</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-8">
                                <div className="w-full">
                                    <p className="font-outfit font-normal text-base text-gray-500 ">Lessons</p>
                                    <div className="flex items-center mt-2">
                                        <img className="w-6 h-6" src={book} alt="Lessons" />
                                        <p className="ml-4 font-clash font-semibold text-xl leading-none">15 lessons</p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="font-outfit font-normal text-base text-gray-500 ">Schedule</p>
                                    <div className="flex items-center mt-2">
                                        <img className="w-6 h-6" src={calender} alt="Schedule" />
                                        <p className="ml-4 font-clash font-semibold text-xl leading-none">Flexible Schedule</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-8">
                                <div className="w-full">
                                    <p className="font-outfit font-normal text-base text-gray-500 ">Enrolled Students</p>
                                    <div className="flex items-center mt-2">
                                        <img className="w-6 h-6" src={user} alt="Enrolled Students" />
                                        <p className="ml-4 font-clash font-semibold text-xl leading-none">969,123</p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="font-outfit font-normal text-base text-gray-500 ">Ratings</p>
                                    <div className="flex items-center mt-2">
                                        <img className="w-6 h-6" src={star} alt="Ratings" />
                                        <p className="ml-4 font-clash font-semibold text-xl leading-none">4.8<span className="text-sm font-medium"> (73,096 views)</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex-auto md:flex-47 lg:flex-45 w-11/12">
                        <div className="w-full h-full shadow shadow-gray-500 rounded-3xl overflow-hidden border-2 border-white  bg-custom-lightgray p-10">
                            <p className="font-clash font-semibold text-2xl">Courses Objective</p>
                            <p className="border-b border-gray-300 mt-6"></p>
                            <div className="mt-6">
                                <ul className="list-disc list-inside">
                                    <li className="font-outfit font-light text-base">Prove that you can integrate HTML, CSS, and JavaScript into a website.</li>
                                    <li className="font-outfit font-light text-base">Showcase other works that you have already done and other online presence.</li>
                                    <li className="font-outfit font-light text-base">Provide further information about your qualifications, references, and contact information.</li>
                                </ul>
                            </div>
                            <p className="font-outfit font-normal text-base text-gray-500 mt-3">Skills</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <button className="py-3 px-4 text-blue-600 border-2 rounded-2xl border-zinc-500 font-clash font-medium text-xl leading-6">HTML and CSS</button>
                                <button className="py-3 px-4 text-blue-600 border-2 rounded-2xl border-zinc-500 font-clash font-medium text-xl leading-6">Web Design</button>
                                <button className="py-3 px-4 text-blue-600 border-2 rounded-2xl border-zinc-500 font-clash font-medium text-xl leading-6">JavaScript</button>

                            </div>
                        </div>
                    </div>
                </div>



                <Modules />
                <Otherpopular />
            </div>


        </>
    );
}

export default Webdevelop;