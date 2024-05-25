import React, { useState } from 'react';
import web from '../Component/Images/Group 1261154719 (2).svg';
import course from '../Component/Images/Group 1261154720.svg';
import rectangle from '../Component/Images/Group 1261154720 (3).svg';
import ellipse from './Images/Ellipse 6.svg';
import ellipse2 from './Images/Ellipse 6 (2).svg';
import clock from './Images/clock.svg';
import profile from './Images/profile-2user.svg';

function Glimb() {
  const [showMore, setShowMore] = useState(false);

  const handleViewAllClick = () => {
    setShowMore(!showMore);
  };

  return (
    <>
    {
      showMore ?
      <>
      <div className="flex flex-wrap justify-center items-start space-x-0 md:space-x-8 mt-10 px-4">
      {/* Additional Card 1 */}
      <div className="p-4 bg-white shadow-lg rounded-lg overflow-hidden flex-grow max-w-md md:max-w-lg m-2 ">
        <img className="w-full h-auto" src={web} alt="Web Image"/>
        <div className="mt-4">
          <h3 className="font-clash font-semibold text-2xl leading-7">
            HTML, CSS and Javascript for web developers
          </h3>
          <div className="flex items-center mt-2">
            <img className="w-6 h-6 rounded-full" src={ellipse} alt="Instructor"/>
            <p className="ml-4 font-clash font-medium text-sm leading-none">
              Dan Scott
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <img className="w-6 h-6" src={clock} alt="Clock"/>
              <span className="ml-2 text-gray-500">11 hr 30 min</span>
            </div>
            <div className="flex items-center">
              <img className="w-6 h-6" src={profile} alt="Profile"/>
              <span className="ml-2 text-gray-500">9,654</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Card 2 */}
      <div className="p-4 bg-white shadow-lg rounded-lg overflow-hidden flex-grow max-w-md md:max-w-lg m-2">
        <img className="w-full h-auto" src={course} alt="Course Image"/>
        <div className="mt-4">
          <h3 className="font-clash font-semibold text-2xl leading-7">
            Introduction to Artificial Intelligence and Machine Learning
          </h3>
          <div className="flex items-center mt-2">
            <img className="w-6 h-6 rounded-full" src={ellipse2} alt="Instructor"/>
            <p className="ml-4 font-clash font-medium text-sm leading-none">
              Jane Doe
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <img className="w-6 h-6" src={clock} alt="Clock"/>
              <span className="ml-2 text-gray-500">11 hr 30 min</span>
            </div>
            <div className="flex items-center">
              <img className="w-6 h-6" src={profile} alt="Profile"/>
              <span className="ml-2 text-gray-500">9,654</span>
            </div>
          </div>
        </div>
      </div>
</div>

<div className="flex flex-wrap justify-center items-start space-x-0 md:space-x-8 mt-10 px-4">
      {/* Additional Card 3 */}
      <div className="p-4 bg-white shadow-lg rounded-lg overflow-hidden flex-grow max-w-md md:max-w-lg m-2">
        <img className="w-full h-auto" src={web} alt="Web Image"/>
        <div className="mt-4">
          <h3 className="font-clash font-semibold text-2xl leading-7">
            HTML, CSS and Javascript for web developers
          </h3>
          <div className="flex items-center mt-2">
            <img className="w-6 h-6 rounded-full" src={ellipse} alt="Instructor"/>
            <p className="ml-4 font-clash font-medium text-sm leading-none">
              Dan Scott
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <img className="w-6 h-6" src={clock} alt="Clock"/>
              <span className="ml-2 text-gray-500">11 hr 30 min</span>
            </div>
            <div className="flex items-center">
              <img className="w-6 h-6" src={profile} alt="Profile"/>
              <span className="ml-2 text-gray-500">9,654</span>
            </div>
          </div>
        </div>
      </div>

       {/* Additional Card 4 */}
       <div className="p-4 bg-white shadow-lg rounded-lg overflow-hidden flex-grow max-w-md md:max-w-lg m-2">
        <img className="w-full h-auto" src={course} alt="Course Image"/>
        <div className="mt-4">
          <h3 className="font-clash font-semibold text-2xl leading-7">
            Introduction to Artificial Intelligence and Machine Learning
          </h3>
          <div className="flex items-center mt-2">
            <img className="w-6 h-6 rounded-full" src={ellipse2} alt="Instructor"/>
            <p className="ml-4 font-clash font-medium text-sm leading-none">
              Jane Doe
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <img className="w-6 h-6" src={clock} alt="Clock"/>
              <span className="ml-2 text-gray-500">11 hr 30 min</span>
            </div>
            <div className="flex items-center">
              <img className="w-6 h-6" src={profile} alt="Profile"/>
              <span className="ml-2 text-gray-500">9,654</span>
            </div>
          </div>
        </div>
      </div>
</div>

<div className="flex flex-wrap justify-center items-start space-x-0 md:space-x-8 mt-10 px-4">
      {/* Additional Card 5 */}
      <div className="p-4 bg-white shadow-lg rounded-lg overflow-hidden flex-grow max-w-md md:max-w-lg m-2">
        <img className="w-full h-auto" src={web} alt="Web Image"/>
        <div className="mt-4">
          <h3 className="font-clash font-semibold text-2xl leading-7">
            HTML, CSS and Javascript for web developers
          </h3>
          <div className="flex items-center mt-2">
            <img className="w-6 h-6 rounded-full" src={ellipse} alt="Instructor"/>
            <p className="ml-4 font-clash font-medium text-sm leading-none">
              Dan Scott
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <img className="w-6 h-6" src={clock} alt="Clock"/>
              <span className="ml-2 text-gray-500">11 hr 30 min</span>
            </div>
            <div className="flex items-center">
              <img className="w-6 h-6" src={profile} alt="Profile"/>
              <span className="ml-2 text-gray-500">9,654</span>
            </div>
          </div>
        </div>
      </div>

       {/* Additional Card 6 */}
       <div className="p-4 bg-white shadow-lg rounded-lg overflow-hidden flex-grow max-w-md md:max-w-lg m-2">
        <img className="w-full h-auto" src={course} alt="Course Image"/>
        <div className="mt-4">
          <h3 className="font-clash font-semibold text-2xl leading-7">
            Introduction to Artificial Intelligence and Machine Learning
          </h3>
          <div className="flex items-center mt-2">
            <img className="w-6 h-6 rounded-full" src={ellipse2} alt="Instructor"/>
            <p className="ml-4 font-clash font-medium text-sm leading-none">
              Jane Doe
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <img className="w-6 h-6" src={clock} alt="Clock"/>
              <span className="ml-2 text-gray-500">11 hr 30 min</span>
            </div>
            <div className="flex items-center">
              <img className="w-6 h-6" src={profile} alt="Profile"/>
              <span className="ml-2 text-gray-500">9,654</span>
            </div>
          </div>
        </div>
      </div>
</div>
<div className="flex flex-wrap justify-center items-start space-x-0 md:space-x-8 mt-10 px-4">
      {/* Additional Card 7 */}
      <div className="p-4 bg-white shadow-lg rounded-lg overflow-hidden flex-grow max-w-md md:max-w-lg m-2">
        <img className="w-full h-auto" src={web} alt="Web Image"/>
        <div className="mt-4">
          <h3 className="font-clash font-semibold text-2xl leading-7">
            HTML, CSS and Javascript for web developers
          </h3>
          <div className="flex items-center mt-2">
            <img className="w-6 h-6 rounded-full" src={ellipse} alt="Instructor"/>
            <p className="ml-4 font-clash font-medium text-sm leading-none">
              Dan Scott
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <img className="w-6 h-6" src={clock} alt="Clock"/>
              <span className="ml-2 text-gray-500">11 hr 30 min</span>
            </div>
            <div className="flex items-center">
              <img className="w-6 h-6" src={profile} alt="Profile"/>
              <span className="ml-2 text-gray-500">9,654</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Card 8 */}
      <div className="p-4 bg-white shadow-lg rounded-lg overflow-hidden flex-grow max-w-md md:max-w-lg m-2">
        <img className="w-full h-auto" src={course} alt="Course Image"/>
        <div className="mt-4">
          <h3 className="font-clash font-semibold text-2xl leading-7">
            Introduction to Artificial Intelligence and Machine Learning
          </h3>
          <div className="flex items-center mt-2">
            <img className="w-6 h-6 rounded-full" src={ellipse2} alt="Instructor"/>
            <p className="ml-4 font-clash font-medium text-sm leading-none">
              Jane Doe
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <img className="w-6 h-6" src={clock} alt="Clock"/>
              <span className="ml-2 text-gray-500">11 hr 30 min</span>
            </div>
            <div className="flex items-center">
              <img className="w-6 h-6" src={profile} alt="Profile"/>
              <span className="ml-2 text-gray-500">9,654</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
       
       : 
       <>
       <div>
        <h3 className="text-center clash font-semibold text-5xl">
          A glimpse on <span className="text-blue-600">what we offer</span>
        </h3>
      </div>

      <div className="flex flex-wrap justify-center items-start space-x-0 md:space-x-8 mt-10 px-4">
        {/* Card 1 */}
        <div className="p-4 bg-white shadow-lg rounded-lg overflow-hidden flex-grow max-w-xs md:max-w-sm m-2">
          <img className="w-full h-auto" src={web} alt="Web Image"/>
          <div className="mt-4">
            <h3 className="font-clash font-semibold text-2xl leading-7">
              HTML, CSS and Javascript for web developers
            </h3>
            <div className="flex items-center mt-2">
              <img className="w-6 h-6 rounded-full" src={ellipse} alt="Instructor"/>
              <p className="ml-4 font-clash font-medium text-sm leading-none">
                Dan Scott
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <img className="w-6 h-6" src={clock} alt="Clock"/>
                <span className="ml-2 text-gray-500">11 hr 30 min</span>
              </div>
              <div className="flex items-center">
                <img className="w-6 h-6" src={profile} alt="Profile"/>
                <span className="ml-2 text-gray-500">9,654</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-4 bg-white shadow-lg rounded-lg overflow-hidden flex-grow max-w-xs md:max-w-sm m-2">
          <img className="w-full h-auto" src={course} alt="Course Image"/>
          <div className="mt-4">
            <h3 className="font-clash font-semibold text-2xl leading-7">
              Introduction to Artificial Intelligence and Machine Learning
            </h3>
            <div className="flex items-center mt-2">
              <img className="w-6 h-6 rounded-full" src={ellipse2} alt="Instructor"/>
              <p className="ml-4 font-clash font-medium text-sm leading-none">
                Jane Doe
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <img className="w-6 h-6" src={clock} alt="Clock"/>
                <span className="ml-2 text-gray-500">11 hr 30 min</span>
              </div>
              <div className="flex items-center">
                <img className="w-6 h-6" src={profile} alt="Profile"/>
                <span className="ml-2 text-gray-500">9,654</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-4 bg-white shadow-lg rounded-lg overflow-hidden flex-grow max-w-xs md:max-w-sm m-2">
          <img className="w-full" src={rectangle} alt="Rectangle Image" style={{ height: '280px' }} />
          <div className="mt-4">
            <h3 className="font-clash font-semibold text-2xl leading-7">
              Build Dynamic Websites with React
            </h3>
            <div className="flex items-center mt-2">
              <img className="w-6 h-6 rounded-full" src={ellipse} alt="Instructor"/>
              <p className="ml-4 font-clash font-medium text-sm leading-none">
                Neha Basin
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <img className="w-6 h-6" src={clock} alt="Clock"/>
                <span className="ml-2 text-gray-500">11 hr 30 min</span>
              </div>
              <div className="flex items-center">
                <img className="w-6 h-6" src={profile} alt="Profile"/>
                <span className="ml-2 text-gray-500">8,342</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleViewAllClick}>
          {showMore ? 'Show Less' : 'View All'}
        </button>
      </div>
       </>





    }
      

      

      
    </>
  );
}

export default Glimb;