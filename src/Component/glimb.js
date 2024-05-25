import React, { useState } from 'react';
import web from '../Images/Rectangle 34625026 (3).svg';
import course from '../Images/Rectangle 34625026 (4).svg';
import group from '../Images/Rectangle 34625026 (1).svg';
import clock from '../Images/clock.svg';
import profile from '../Images/profile-2user.svg';
import elipse1 from '../Images/Ellipse 6.svg';
import elipse2 from '../Images/Ellipse 6 (2).svg';
import elipse3 from '../Images/Ellipse 6 (3).svg'
function Glimb() {
  const [showMore, setShowMore] = useState(false);

  const handleViewAllClick = () => {
    setShowMore(!showMore);
  };

  const cards = [
    {
      image: web,
      title: 'HTML, CSS and Javascript for web developers',
      elipse: elipse1,
      instructor: 'Dan Scott',
      duration: '11 hr 30 min',
      profile: profile,
      viewers: '9,654',
    },
    {
      image: course,
      title: 'Introduction to Artificial Intelligence and Machine Learning',
      elipse: elipse2,
      instructor: 'Jane Doe',
      duration: '11 hr 30 min',
      profile: profile,
      viewers: '9,654',
    },
    {
      image: web,
      title: 'HTML, CSS and Javascript for web developers',
      elipse: elipse1,
      instructor: 'Dan Scott',
      duration: '11 hr 30 min',
      profile: profile,
      viewers: '9,654',
    },
    {
      image: course,
      title: 'Introduction to Artificial Intelligence and Machine Learning',
      elipse: elipse2,
      instructor: 'Jane Doe',
      duration: '11 hr 30 min',
      profile: profile,
      viewers: '9,654',
    },
    {
      image: web,
      title: 'HTML, CSS and Javascript for web developers',
      elipse: elipse1,
      instructor: 'Dan Scott',
      duration: '11 hr 30 min',
      profile: profile,
      viewers: '9,654',
    },
    {
      image: course,
      title: 'Introduction to Artificial Intelligence and Machine Learning',
      elipse: elipse2,
      instructor: 'Jane Doe',
      duration: '11 hr 30 min',
      profile: profile,
      viewers: '9,654',
    },
    {
      image: web,
      title: 'HTML, CSS and Javascript for web developers',
      elipse: elipse1,
      instructor: 'Dan Scott',
      duration: '11 hr 30 min',
      profile: profile,
      viewers: '9,654',
    },
    {
      image: course,
      title: 'Introduction to Artificial Intelligence and Machine Learning',
      elipse: elipse2,
      instructor: 'Jane Doe',
      duration: '11 hr 30 min',
      profile: profile,
      viewers: '9,654',
    },
  ];

  const glimb = [
    {
      image: web,
      title: 'HTML, CSS and Javascript for web developers',
      elipse: elipse1,
      instructor: 'Dan Scott',
      duration: '11 hr 30 min',
      profile: profile,
      viewers: '9,654',
    },
    {
      image: course,
      title: 'Introduction to Artificial Intelligence and Machine Learning',
      elipse: elipse2,
      instructor: 'Jane Doe',
      duration: '11 hr 30 min',
      profile: profile,
      viewers: '9,654',
    },
    // {
    //   image: group,
    //   title: ' Build Dynamic Websites with React',
    //   elipse: elipse3,
    //   instructor: 'Neha Basin',
    //   duration: '11 hr 30 min',
    //   profile: profile,
    //   viewers: '9,654',
    // },
  ];

  return (
    <>
      {showMore ? (
        <>
          <div className='mt-10'>
            <h3 className="text-center clash font-semibold text-5xl">
              Our <span className="text-blue-600 clash">Popular Courses</span>
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-10 md:px-24">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-grow max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-2 p-4 shadow-xl rounded-lg overflow-hidden border-2 border-white"
                style={{ backgroundColor: "#F6F6F6" }} 
              >
                <div>
                  <img className="w-full h-full" src={card.image} alt="Card Image" />
                </div>
                <div className="mt-4">
                  <h3 className="clash font-semibold text-2xl leading-7">{card.title}</h3>
                  <div className="flex items-center mt-2">
                    <img className="w-10 h-10 rounded-full" src={card.elipse} alt="Instructor" />
                    <p className="ml-4 clash font-semibold text-sm leading-none">{card.instructor}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
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
            ))}
          </div>
        </>
      ) : (
        <>
          <div className='mt-4'>
            <h3 className="text-center clash font-semibold text-5xl">
              A glimpse on <span className="text-blue-600 block mt-3 clash">what we offer</span>
            </h3>
          </div>
          <div
           className=" flex flex-wrap justify-center gap-4 mt-10 p-2">
            {glimb.map((card, index) => (
              <div
                key={index}
                className="p-4 shadow-xl rounded-lg overflow-hidden max-w-lg  border-2 border-white" 
                style={{ backgroundColor: "#F6F6F6", }}
              >
                <div className=''>
                  <img className="object-fill w-full " src={card.image} alt="Card Image" />
                </div>
                <div className="mt-4">
                  <h3 className="clash font-semibold text-2xl leading-7">{card.title}</h3>
                  <div className="flex items-center mt-2">
                    <img className="w-10 h-10 rounded-full" src={card.elipse} alt="Instructor" />
                    <p className="ml-4 clash font-semibold text-sm leading-none">{card.instructor}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
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
            ))}

<div className="p-4 shadow-xl rounded-lg overflow-hidden w-64  border-2 border-white" style={{backgroundColor:"#F6F6F6"}}>
<div className=''>
          <img className="object-fill w-full " src={group} alt="Rectangle Image" />
          </div>
          <div className="mt-4 w-60">
            <h3 className="clash font-semibold text-2xl leading-7">
              Build Dynamic Websites with React
            </h3>
            <div className="flex items-center mt-2">
              <img className="w-10 h-10 rounded-full" src={elipse3} alt="Instructor"/>
              <p className="ml-4 clash font-semibold text-sm leading-none">
                Neha Basin
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <img className="w-6 h-6" src={clock} alt="Clock"/>
                <span className="ml-2 font-normal lightgray outfit">11 hr 30 min</span>
              </div>
             
            </div>
          </div>
        </div>

        
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 text-white py-5 px-9 rounded" onClick={handleViewAllClick}>
              {showMore ? '' : 'View All'}
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Glimb;
