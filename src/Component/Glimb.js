import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import web from '../Images/Rectangle 34625026 (3).svg';
import course from '../Images/Rectangle 34625026 (4).svg';
import group from '../Images/Rectangle 34625026 (4).svg';
import clock from '../Images/clock.svg';
import profile from '../Images/profile-2user.svg';
import elipse1 from '../Images/Ellipse 6.svg';
import elipse2 from '../Images/Ellipse 6 (2).svg';
import elipse3 from '../Images/Ellipse 6 (3).svg';
import Viewall from './Viewallglimb';

function Glimb() {
  const [showMore, setShowMore] = useState(false);

  const handleViewAllClick = () => {
    setShowMore(!showMore);
  };

  const glimb = [
    {
      image: web,
      title: 'HTML, CSS and Javascript for web developers',
      elipse: elipse1,
      instructor: 'Dan Scott',
      duration: '11 hr 30 min',
      profile: profile,
      viewers: '9,654',
      rating: '4.8',
    },
    {
      image: course,
      title: 'Introduction to Artificial Intelligence and Machine...',
      elipse: elipse2,
      instructor: 'Jane Doe',
      duration: '11 hr 30 min',
      profile: profile,
      viewers: '9,654',
      rating: '4.8',
    },
    {
      image: group,
      title: 'Build Dynamic Websites with React ',
      elipse: elipse3,
      instructor: 'Neha Basin',
      duration: '11 hr 30 min',
      profile: profile,
      viewers: '9,654',
      rating: '4.8',
    },
  ];

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
          <div className="lg:px-10 flex flex-wrap mt-10 m-0 gap-y-20px ">
            {glimb.map((card, index) => (
              <div key={index} className="sm:flex-100 md:flex-50 lg:flex-1">
                <div className="shadow-xl rounded-3xl overflow-hidden border-2 border-white h-full p-4 m-4 bg-custom-lightgray">
                  <div className="relative">
                    <div className="">
                      <img className="w-full h-full object-fill" src={card.image} alt="Card" />
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
                      <span className="font-semibold text-xl">{card.rating}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-clash font-semibold text-2xl leading-7">{card.title}</h3>
                    <div className="flex items-center mt-6">
                      <img className="w-10 h-10 rounded-full" src={card.elipse} alt="Instructor" />
                      <p className="ml-4 font-clash font-semibold text-xl leading-none">{card.instructor}</p>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                      <div className="flex items-center">
                        <img className="w-6 h-6" src={clock} alt="Clock" />
                        <span className="ml-2 font-normal lightgray outfit">{card.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <img className="w-6 h-6" src={profile} alt="Profile" />
                        <span className="ml-2 text-gray-500">{card.viewers}</span>
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
