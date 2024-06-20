import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import clock from '../Images/clock.svg';
import profile from '../Images/profile-2user.svg';

import Viewall from './Viewallglimb';

function Glimb() {
  const [showMore, setShowMore] = useState(false);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:2000/get/get-course')
      .then(response => {
        console.log("API response:", response.data.getCourse);
        if (Array.isArray(response.data.getCourse)) {
          setCourses(response.data.getCourse);
        } else {
          console.error("Expected an array but got:", response.data);
        }
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  console.log("course", courses);

  const handleViewAllClick = () => {
    setShowMore(!showMore);
  };

  const handleCardClick = (course_Id) => {
    console.log("course_Id", course_Id)
    if (course_Id) {
      navigate('/CouresDetails',{state:course_Id});
    }
  };

  return (
    <>
      {showMore ? (
        <Viewall />
      ) : (
        <>
          <div className="mt-14">
            <h3 className="text-center font-clash font-semibold text-5xl">
              A glimpse on <span className="text-blue-600 block mt-3 clash">what we offer</span>
            </h3>
          </div>
          <div className="lg:px-10 flex flex-wrap mt-10 m-0 gap-y-20px">
            {Array.isArray(courses) && courses.map((card, index) => (
              <div key={index} className="sm:flex-100 md:flex-50 lg:flex-1" onClick={() => handleCardClick(card.id)}>
                <div className="shadow-xl rounded-3xl overflow-hidden border-2 border-white h-full p-4 m-4 bg-custom-lightgray">
                  <div className="relative">
                    <div className="">
                      <img className="w-full h-full object-fill" src={card.CourseIcon} alt="CourseIcon" />
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
                      <span className="font-semibold text-xl">4.8</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="h-14 overflow-hidden">
                      <label className="font-clash font-semibold text-2xl leading-7 line-clamp-2">
                        {card.CourseName}
                      </label>
                    </div>
                    <div className="flex items-center mt-6">
                      <img className="w-10 h-10 rounded-full" src={card.AuthorProfile} alt="AuthorProfile" />
                      <p className="ml-4 font-clash font-semibold text-xl leading-none">{card.AuthorName}</p>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                      <div className="flex items-center">
                        <img className="w-6 h-6" src={clock} alt="Clock" />
                        <span className="ml-2 font-normal lightgray outfit">{card.TotalDuration.hours}hr{card.TotalDuration.minutes}min</span>
                      </div>
                      <div className="flex items-center">
                        <img className="w-6 h-6" src={profile} alt="Profile" />
                        <span className="ml-2 text-gray-500">{card.TotalReviews} </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12 mb-12">
            <Link to="/Viewallglimb" className="bg-blue-500 text-white py-5 px-10 rounded-2xl" onClick={handleViewAllClick}>
              {showMore ? '' : 'View All'}
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default Glimb;
