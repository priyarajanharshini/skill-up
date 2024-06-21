import book from '../Images/book (1).svg'
import clock1 from '../Images/clock (2).svg';
import clipboard from '../Images/clipboard-text.svg'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Modules() {
  const location = useLocation();
  const { state } = location;
  const [modules, setModules] = useState(null);
  const course_Id = state;
  const [openLesson, setOpenlessonIndex] = useState(0);


  useEffect(() => {
      axios.post('http://localhost:2000/get/get-module-by-course', { course_Id })
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
            <div className="bg-black text-white w-full p-6 rounded-2xl">
            <div className="flex justify-between items-center">
                <p className="font-clash font-semibold text-2xl">Module {modules.ModuleId} :{modules.moduleTitle}</p>
                <button className="font-clash font-semibold text-2xl" onClick={() => toggleModule(index)}> {openLesson === index ? '-' : '+'}</button>
              </div>
              <div className="flex flex-wrap  justify-start mt-4 gap-8">
                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={book} alt="Level" />
                  <p className="ml-4 font-outfit font-normal text-base text-lightwhite leading-8">{modules.totalLessons} Lessons</p>
                </div>
                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={clock1} alt="Duration" />
                  <p className="ml-4 font-outfit font-normal text-base text-lightwhite leading-4">{modules.ModuleDuration.hours} hour {modules.ModuleDuration.minutes} minute</p>
                </div>
                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={clipboard} alt="Assessments" />
                  <p className="ml-4 font-outfit font-normal text-base text-lightwhite leading-4">{modules.totalAssessment} Assessments</p>
                </div>
              </div>
            </div>
          </div>
          {openLesson === index && (
          <div className="p-6">
          {modules.Lesson.map((lesson, lessonIndex) => {
             return (
              <div    className="flex justify-between">
                <p  key={lessonIndex}className="font-clash font-medium text-xl leading-10">{modules.ModuleId}.{lesson.LessonTitle}</p>
                <p className="font-clash font-medium text-xl leading-10 text-sky-blue">{lesson.LessonDuration}</p>
              </div>
             );
          })}
          </div>
          )}
        </div>
        ))}
      
      </div>


    </>
  );
}

export default Modules;
