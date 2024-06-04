import React from "react";
import Fount from '../Images/Fount.svg';

function Founter() {
    return (
        <div className="container mx-auto p-4">
            <div className="text-center my-8">
                <p className="font-clash text-5xl font-semibold text-custom-gray">
                    <span className="mr-4">Our</span>
                    <span className="text-blue-600">Founder’s message</span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 items-center gap-4 ">
                <div className="flex justify-center ">
                    <img src={Fount} alt="Fount" className="w-full h-full " />
                </div>
               
                <div className="bg-custom-gray p-6 rounded-40 border-white flex flex-col justify-center w-full h-full">
                    <div className="text-2xl font-satisfy mb-8 leading-9">
                        <p>
                            Education is a dynamic and never-ending process. In today's fast-changing world, the philosophy and essence of education, its priority as well as perception have taken new dimensions in order to meet the challenges thrown by the growing impact of globalization. In order to achieve success, we just need to set a goal and work for it with our heart and soul.
                        </p>
                        <p>
                            We aim to plan and implement education policies by shaping the minds and hearts of our students, thereby imparting value-aided quality education.
                        </p>
                    </div>
                    <div className="pt-8">
                        <p className="font-clash font-semibold text-2xl">
                            Immanuvel Suthakaran
                        </p>
                        <p className="font-outfit font-light text-base leading-5 text-slate-400 pt-2">
                            Founder, S3 Remotica Technologies
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Founter;






