import React, { useState, useEffect } from 'react';
import clock from '../Images/clock.svg';
import profile from '../Images/profile-2user.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import '../index.css';
import axiosInstance from '../config';
function Otherpopular() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axiosInstance.get('/get/get-course')
      .then(response => {
        console.log("API response:", response.data.getCourse);
        if (Array.isArray(response.data.getCourse)) {
          const activeCourse = response.data.getCourse.filter(course => course.Status !== 0);
          setCourses(activeCourse);
        } else {
          console.error("Expected an array but got:", response.data);
        }
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <>
      <div className="mt-14">
        <p className="text-center font-clash font-semibold text-5xl">
          Other  <span className="text-blue-600"> Popular Courses</span>
        </p>
      </div>
      <div className="lg:block md:block sm:hidden hidden">
        <div className="lg:px-10 flex flex-wrap mt-10 m-0 gap-y-20px">
          {Array.isArray(courses) && courses.map((course, index) => (
            <div key={index} className="sm:flex-100 md:flex-50 lg:flex-1">
              <div className="shadow-xl rounded-3xl overflow-hidden border-2 border-white h-full p-4 m-4 bg-custom-lightgray">
                <div className="relative">
                  <div className="">
                    <img className="w-full h-full object-fill" src={course.CourseIcon} alt="Card" />
                  </div>
                  <div className="w-88px h-12 rounded-xl p-2 bg-white absolute bottom-0 right-0 mr-6 mb-6 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="orange"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="orange"
                      className="w-6 h-6 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 17.25l6.16 3.727-1.69-7.197 5.53-4.797-7.33-.637L12 1.5 9.33 8.346l-7.33.637 5.53 4.797-1.69 7.197L12 17.25z"
                      />
                    </svg>
                    <span className="font-semibold text-xl text-orange">{course.Ratings}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-14 overflow-hidden">
                    <label className="font-clash font-semibold text-2xl leading-7 line-clamp-2">
                      {course.CourseName}
                    </label>
                  </div>
                  <div className="flex items-center mt-6">
                    <img className="w-10 h-10 rounded-full" src={course.AuthorProfile} alt="Instructor" />
                    <p className="ml-4 font-clash font-medium text-xl leading-none">{course.AuthorName}</p>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center">
                      <img className="w-6 h-6" src={clock} alt="Clock" />
                      <span className="ml-2 font-normal text-xl text-lightgray font-outfit leading-6">{course.TotalDuration.hours} hr {course.TotalDuration.minutes} min </span>
                    </div>
                    <div className="flex items-center">
                      <img className="w-6 h-6" src={profile} alt="Profile" />
                      <span className="ml-2 font-normal text-xl text-lightgray font-outfit leading-6">{course.TotalReviews}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="lg:hidden md:hidden sm:block block">
        <Slider {...settings}>
          {Array.isArray(courses) && courses.map((course, index) => (
            <div key={index} className="sm:flex-100 md:flex-50 lg:flex-1">
              <div className="shadow-xl rounded-3xl overflow-hidden border-2 border-white h-full p-4 m-4 bg-custom-lightgray">
                <div className="relative">
                  <div className="">
                    <img className="w-full h-full object-fill" src={course.CourseIcon} alt="Card" />
                  </div>
                  <div className="w-88px h-12 rounded-xl p-2 bg-white absolute bottom-0 right-0 mr-6 mb-6 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="orange"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="orange"
                      className="w-6 h-6 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 17.25l6.16 3.727-1.69-7.197 5.53-4.797-7.33-.637L12 1.5 9.33 8.346l-7.33.637 5.53 4.797-1.69 7.197L12 17.25z"
                      />
                    </svg>
                    <span className="font-semibold text-xl text-orange">{course.Ratings}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-14 overflow-hidden">
                    <label className="font-clash font-semibold text-2xl leading-7 line-clamp-2">
                      {course.CourseName}
                    </label>
                  </div>
                  <div className="flex items-center mt-6">
                    <img className="w-10 h-10 rounded-full" src={course.AuthorProfile} alt="Instructor" />
                    <p className="ml-4 font-clash font-medium text-xl leading-none">{course.AuthorName}</p>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center">
                      <img className="w-6 h-6" src={clock} alt="Clock" />
                      <span className="ml-2 font-normal text-xl text-lightgray font-outfit leading-6">{course.TotalDuration.hours} hr {course.TotalDuration.minutes} min </span>
                    </div>
                    <div className="flex items-center">
                      <img className="w-6 h-6" src={profile} alt="Profile" />
                      <span className="ml-2 font-normal text-xl text-lightgray font-outfit leading-6">{course.TotalReviews}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}
export default Otherpopular;