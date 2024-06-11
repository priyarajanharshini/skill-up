import React from "react";
import 'tailwindcss/tailwind.css';
import anil from '../Images/Anilstudentsay.svg';
import noor from '../Images/noorstudentsay.svg';
import veena from '../Images/veenastudentsay.svg';
import priya from '../Images/priyastudentsay.svg';

function StudentSays() {
    return (
        <>
            <div className="text-center mb-20 mt-20">
                <label className="font-clash text-4xl sm:text-5xl md:text-6xl leading-10 font-semibold">
                    What our
                    <span className="text-blue-600"> students say</span>...
                </label>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
                <div id="card-one"
                    className="-ml-2 flex flex-col items-start p-6 border rounded-[32px] shadow-lg h-[310px] w-[610px]">
                    <p className="leading-8 font-outfit font-light text-start mb-4 text-lg mt-4 mx-4">
                        “S3 transformed my life! I started with the Python for
                        <br /> Beginners course, and now I’m a data science wizard.
                        <br /> The flexibility to learn at my own pace was a game-changer.
                        <br /> Plus, the certificates make my LinkedIn profile shine!”
                    </p>

                    <div className="flex items-center">
                        <img className="w-20 h-20 rounded-full mb-4 mr-5 ml-6" src={anil} alt="Anil Kumar" />
                        <div>
                            <p className="font-clash text-black text-xl font-semibold">Anil Kumar</p>
                            <p className="font-outfit font-light text-base">Lead AI Designer at Google</p>
                        </div>
                    </div>
                </div>

                <div id="card-two" className="ml-2 flex flex-col items-start p-6 border rounded-[32px] shadow-lg h-[470px] w-[610px]">
                    <p className="leading-8 font-outfit font-light text-start mb-4 text-lg mt-4 mx-4">
                        “As a marketing professional, I needed to upskill. Coursera’s
                        Digital Marketing Specialization was my secret weapon. The
                        hands-on projects and expert instructors gave me the edge I
                        needed. Now I’m rocking my job interviews!<br></br> <br></br>
                        I’m a self-taught coder, and Coursera’s Full Stack Web
                        Development track was my compass. The practical
                        assignments and peer feedback kept me motivated. I even<br></br>
                        built my portfolio website using what I learned!”
                    </p>

                    <div className="flex items-center">
                        <img className="w-20 h-20 rounded-full mb-4 mr-5 ml-6" src={noor} alt="Noor Chahal" />
                        <div>
                            <p className="font-clash text-black text-xl font-semibold">Noor Chahal</p>
                            <p className="font-outfit font-light text-base">CMO at PortfolioBuilder</p>
                        </div>
                    </div>
                </div>

                <div id="card-three" className="-ml-2 flex flex-col items-start p-6 border rounded-[32px] shadow-lg h-[470px] w-[610px] lg:mt-[-160px]">
                    <p className="leading-8 font-outfit font-light text-start mb-4 text-lg mt-4 mx-4">
                        “As a marketing professional, I needed to upskill. Coursera’s
                        Digital Marketing Specialization was my secret weapon. The
                        hands-on projects and expert instructors gave me the edge I
                        needed. Now I’m rocking my job interviews! <br></br><br></br>
                        I’m a self-taught coder, and Coursera’s Full Stack Web
                        Development track was my compass. The practical
                        assignments and peer feedback kept me motivated. I even<br></br>
                        built my portfolio website using what I learned!”
                    </p>

                    <div className="flex items-center">
                        <img className="w-20 h-20 rounded-full mb-4 mr-5 ml-6" src={veena} alt="Veena Raj" />
                        <div>
                            <p className="font-clash text-black text-xl font-semibold">Veena Raj</p>
                            <p className="font-outfit font-light text-base">Product Designer at Microsoft</p>
                        </div>
                    </div>
                </div>

                <div id="card-four"
                    className="ml-2 flex flex-col items-start p-6 border rounded-[32px] shadow-lg h-[310px] w-[610px]">
                    <p className="leading-8 font-outfit font-light text-start mb-4 text-lg mt-4 mx-4">
                        “S3 transformed my life! I started with the Python for<br></br>
                        Beginners course, and now I’m a data science wizard.<br></br>
                        The flexibility to learn at my own pace was a game-changer.<br></br>
                        Plus, the certificates make my LinkedIn profile shine!”
                    </p>

                    <div className="flex items-center">
                        <img className="w-20 h-20 rounded-full mb-4 mr-5 ml-6" src={priya} alt="Priya Rajput" />
                        <div>
                            <p className="font-clash text-black text-xl font-semibold">Priya Rajput</p>
                            <p className="font-outfit font-light text-base">CTO at CRED</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentSays;
