import book from '../Images/book (1).svg'
import clock1 from '../Images/clock (2).svg';
import clipboard from '../Images/clipboard-text.svg'
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from '../config';

function Modules() {
  const location = useLocation();
  const { state } = location;
  const [modules, setModules] = useState(null);
  const course_Id = state;
  const [openLesson, setOpenlessonIndex] = useState(0);


  useEffect(() => {
    axiosInstance.post('/get/get-module-by-course', { course_Id })
      .then(response => {
        console.log("response Modules:", response.data.modules);
        setModules(response.data.modules);
      })
      .catch(error => {
        console.error("Error fetching course details:", error);
      });
  }, [course_Id]);
  console.log("Modules", modules);

  const toggleModule = (index) => {
    setOpenlessonIndex(openLesson === index ? -1 : index);
  };

  return (
    <>
      <div className="mt-20">
        <h3 className="text-center font-clash font-semibold text-5xl">
          Course <span className="text-blue-600 ">Modules</span>
        </h3>
      </div>
      <div className="flex flex-wrap justify-center mt-16">
        {Array.isArray(modules) && modules.map((modules, index) => (
          <div key={index} className=" rounded-3xl overflow-hidden  m-4 bg-custom-lightgray lg:w-3/4 sm:w-full">
            <div className="flex justify-center p-4">
              <div className={`w-full p-6 rounded-2xl ${openLesson === index ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}>
                <div className="flex justify-between items-center">
                  <p className="font-clash font-semibold text-2xl">Module {modules.ModuleId} :{modules.moduleTitle}</p>
                  <button className="font-clash font-semibold text-2xl" onClick={() => toggleModule(index)}> {openLesson === index ? '-' : '+'}</button>
                </div>
                <div className="flex flex-wrap  justify-start mt-4 gap-8">
                  <div className="flex items-center mt-2">
                    <img className={`w-6 h-6 ${openLesson === index ? '' : 'filter invert'}`} src={book} alt="Level" />
                    <p className={`ml-4 font-outfit font-normal text-base leading-8 ${openLesson === index ? 'text-lightwhite' : 'text-black'}`}>{modules.totalLessons} Lessons</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <img className={`w-6 h-6 ${openLesson === index ? '' : 'filter invert'}`} src={clock1} alt="Duration" />
                    <p className={`ml-4 font-outfit font-normal text-base leading-4 ${openLesson === index ? 'text-lightwhite' : 'text-black'}`}>{modules.ModuleDuration.hours} hour {modules.ModuleDuration.minutes} minute</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <img className={`w-6 h-6 ${openLesson === index ? '' : 'filter invert'}`} src={clipboard} alt="Assessments" />
                    <p className={`ml-4 font-outfit font-normal text-base leading-4 ${openLesson === index ? 'text-lightwhite' : 'text-black'}`}>{modules.totalAssessment} Assessments</p>
                  </div>
                </div>
              </div>
            </div>
            {openLesson === index && (
              <div className="p-6">
                {modules.Lesson.map((lesson, lessonIndex) => (
                  <div key={lessonIndex} className="flex justify-between">
                    <p className="font-clash font-medium text-xl leading-10">{modules.ModuleId}.{lesson.LessonTitle}</p>
                    <p className="font-clash font-medium text-xl leading-10 text-sky-blue">{lesson.LessonDuration}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Modules;
