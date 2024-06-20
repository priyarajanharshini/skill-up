import React, { useEffect, useState } from "react";
import clock from '../Images/clock.svg';
import profile from '../Images/profile-2user.svg';
import FAQ from "./FAQ";
import GetStarted from "./GetStarted";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Viewall() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:2000/get/get-course')
      .then(response => {
        console.log("response", response.data.getCourse);
        if (Array.isArray(response.data.getCourse)) {
          setCourses(response.data.getCourse);        
        } else {
          console.error('Error', response.data);
        }
      })
      .catch(error => {
        console.error("catch error", error);
      });
  }, []);

  const handleCardClick = (course_Id) => {
    console.log("course_Id", course_Id)
    if (course_Id) {
      navigate('/CouresDetails',{state:course_Id});
    }
  };

  return (
    <>
      <div className="mt-10">
        <h3 className="text-center font-clash font-semibold text-5xl">
          Our <span className="text-blue-600 clash">Popular Courses</span>
        </h3>
      </div>
      <div className="px-4 flex flex-wrap mt-10 md:px-16 gap-y-20">
        {Array.isArray(courses) && courses.map((CourseName,index) => (
          <div key={index} className="sm:flex-100 md:flex-35 lg:flex-48 "onClick={() => handleCardClick(CourseName.id)}>
            <div className='shadow-xl rounded-3xl overflow-hidden border-2 border-white p-4 m-4 bg-custom-lightgray h-full'>
              <div className='relative'>
                <div className="">
                  <img className="w-full h-full object-fill" src={CourseName.CourseIcon} alt="Card" />
                  </div>
                  <div className="w-88px h-12 rounded-xl bg-white p-2 absolute bottom-0 right-0 mr-6 mb-6  flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5"  stroke="orange"  className="w-6 h-6 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l6.16 3.727-1.69-7.197 5.53-4.797-7.33-.637L12 1.5 9.33 8.346l-7.33.637 5.53 4.797-1.69 7.197L12 17.25z"/>
                  </svg>
                  <span className='font-semibold text-xl'>4.8</span>
                      </div>
                </div>         
                <div className="mt-4">
                  <div className="h-14 overflow-hidden">
                    <label className="font-clash font-semibold text-2xl leading-7 line-clamp-2">
                      {CourseName.CourseName}
                    </label>
                  </div>
                  <div className="flex items-center mt-6">
                    <img className="w-10 h-10 rounded-full" src={CourseName.AuthorProfile} alt="Instructor" />
                    <p className="ml-4 font-clash font-semibold text-xl leading-none">{CourseName.AuthorName}</p>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                        <div className="flex items-center">
                          <img className="w-6 h-6" src={clock} alt="Clock" />
                          <span className="ml-2 font-normal text-xl text-lightgray font-outfit leading-6">{CourseName.TotalDuration.hours} hr {CourseName.TotalDuration.minutes} min </span>
                        </div>
                        <div className="flex items-center">
                          <img className="w-6 h-6" src={profile} alt="Profile" />
                          <span className="ml-2 font-normal text-xl text-lightgray font-outfit leading-6">{CourseName.TotalReviews}</span>
                        </div>
                      </div>
                </div>
            </div>
          </div>
        ))}
    </div >

      <FAQ />
      <GetStarted />

    </>
  )
}
export default Viewall;