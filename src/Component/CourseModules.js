import React from "react";
import book from '../Images/book (1).svg'
import clock1 from '../Images/clock (2).svg';
import clipboard from '../Images/clipboard-text.svg'
import book2 from '../Images/book (2).svg'
import clock2 from '../Images/clock (3).svg';
import clipboard1 from '../Images/clipboard-text (1).svg'
function Modules() {
  return (
    <>
      <div className="mt-20">
        <h3 className="text-center font-clash font-semibold text-5xl">
          Course <span className="text-blue-600 ">Modules</span>
        </h3>
      </div>

      <div className="flex flex-wrap justify-center mt-16">
        <div className=" rounded-3xl overflow-hidden   m-4 bg-custom-lightgray lg:w-3/4 sm:w-full">

          <div className="flex justify-center p-4">
            <div className="bg-black text-white w-full p-6 rounded-2xl">
            <div className="flex justify-between items-center">
                <p className="font-clash font-semibold text-2xl">Module 1 : Explore and Identify Website’s Layout and Design</p>
                <p className="font-clash font-semibold text-2xl">-</p>
              </div>


              <div className="flex flex-wrap  justify-start mt-4 gap-8">
        
                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={book} alt="Level" />
                  <p className="ml-4 font-outfit font-normal text-base text-lightwhite leading-4">7 Lessons</p>
                </div>

                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={clock1} alt="Duration" />
                  <p className="ml-4 font-outfit font-normal text-base text-lightwhite leading-4">1 hour 40 minutes</p>
                </div>

                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={clipboard} alt="Assessments" />
                  <p className="ml-4 font-outfit font-normal text-base text-lightwhite leading-4">5 Assessments</p>
                </div>
               
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between ">
              <p className="font-clash font-medium text-xl leading-6">1.1 Lesson</p>
              <p className="font-clash font-medium text-xl leading-6 text-sky-blue"> 24 minus</p>
            </div>

            <div className="flex justify-between mt-6">
              <p className="font-clash font-medium text-xl leading-6">1.1 Lesson</p>
              <p className="font-clash font-medium text-xl leading-6 text-sky-blue"> 24 minus</p>
            </div>

            <div className="flex justify-between  mt-6">
              <p className="font-clash font-medium text-xl leading-6">1.1 Lesson</p>
              <p className="font-clash font-medium text-xl leading-6 text-sky-blue"> 24 minus</p>
            </div>

            <div className="flex justify-between  mt-6">
              <p className="font-clash font-medium text-xl leading-6">1.1 Lesson</p>
              <p className="font-clash font-medium text-xl leading-6 text-sky-blue"> 24 minus</p>
            </div>

            <div className="flex justify-between  mt-6">
              <p className="font-clash font-medium text-xl leading-6">1.1 Lesson</p>
              <p className="font-clash font-medium text-xl leading-6 text-sky-blue"> 24 minus</p>
            </div>
          </div>
        </div>

        <div className=" rounded-3xl overflow-hidden   m-4 bg-custom-lightgray lg:w-3/4 sm:w-full">
          <div className=" flex justify-center p-4">
            <div className="bg-white text-white w-full p-6 rounded-2xl">
              <div className="flex justify-between items-center">
                <p className="font-clash font-semibold text-2xl text-black">Module 2 : Retrieve and Organize Website Resources</p>
                <p className="font-clash font-semibold text-2xl text-black" >+</p>
              </div>

              <div className="flex flex-wrap  justify-start mt-4 gap-8">
           
                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={book2} alt="Level" />
                  <p className="ml-4 font-outfit font-normal text-base  leading-4 text-black">7 Lessons</p>
                </div>

                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={clock2} alt="Duration" />
                  <p className="ml-4 font-outfit font-normal text-base leading-4 text-black">1 hour 40 minutes</p>
                </div>

                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={clipboard1} alt="Assessments" />
                  <p className="ml-4 font-outfit font-normal text-base leading-4 text-black">5 Assessments</p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-3xl overflow-hidden  m-4 bg-custom-lightgray lg:w-3/4 sm:w-full">
          <div className=" flex justify-center p-4">
            <div className="bg-white text-white w-full p-6 rounded-2xl">
              <div className="flex justify-between items-center">
                <p className="font-clash font-semibold text-2xl text-black">Module 3 : Retrieve and Organize Website Resources</p>
                <p className="font-clash font-semibold text-2xl text-black" >+</p>
              </div>
              <div className="flex flex-wrap justify-start mt-4 gap-8">
               
                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={book2} alt="Level" />
                  <p className="ml-4 font-outfit font-normal text-base  leading-4 text-black">7 Lessons</p>
                </div>

                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={clock2} alt="Duration" />
                  <p className="ml-4 font-outfit font-normal text-base leading-4 text-black">1 hour 40 minutes</p>
                </div>

                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={clipboard1} alt="Assessments" />
                  <p className="ml-4 font-outfit font-normal text-base leading-4 text-black">5 Assessments</p>
                </div>
              
              </div>
            </div>



          </div>

        </div>

        <div className=" rounded-3xl overflow-hidden   m-4 bg-custom-lightgray lg:w-3/4 sm:w-full">
          <div className="flex justify-center p-4">
            <div className="bg-white text-white w-full p-6 rounded-2xl">
              <div className="flex justify-between items-center">
                <p className="font-clash font-semibold text-2xl text-black">Module 4 : Retrieve and Organize Website Resources</p>
                <p className="font-clash font-semibold text-2xl text-black" >+</p>
              </div>


              <div className="flex flex-wrap  justify-start mt-4 gap-8">
           
                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={book2} alt="Level" />
                  <p className="ml-4 font-outfit font-normal text-base  leading-4 text-black">7 Lessons</p>
                </div>

                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={clock2} alt="Duration" />
                  <p className="ml-4 font-outfit font-normal text-base leading-4 text-black">1 hour 40 minutes</p>
                </div>

                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={clipboard1} alt="Assessments" />
                  <p className="ml-4 font-outfit font-normal text-base leading-4 text-black">5 Assessments</p>
                </div>
               
              </div>
            </div>



          </div>

        </div>

        <div className=" rounded-2xl overflow-hidden   m-4 bg-custom-lightgray lg:w-3/4 sm:w-full">
          <div className="flex justify-center p-4">
            <div className="bg-white text-white w-full p-6 rounded-2xl">
              <div className="flex justify-between items-center">
                <p className="font-clash font-semibold text-2xl text-black">Module 5 : Retrieve and Organize Website Resources</p>
                <p className="font-clash font-semibold text-2xl text-black" >+</p>
              </div>


              <div className="flex flex-wrap  justify-start mt-4 gap-8">
             
                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={book2} alt="Level" />
                  <p className="ml-4 font-outfit font-normal text-base  leading-4 text-black">7 Lessons</p>
                </div>

                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={clock2} alt="Duration" />
                  <p className="ml-4 font-outfit font-normal text-base leading-4 text-black">1 hour 40 minutes</p>
                </div>

                <div className="flex items-center mt-2">
                  <img className="w-6 h-6" src={clipboard1} alt="Assessments" />
                  <p className="ml-4 font-outfit font-normal text-base leading-4 text-black">5 Assessments</p>
                </div>
               
              </div>
            </div>



          </div>

        </div>
      </div>


    </>
  );
}

export default Modules;
