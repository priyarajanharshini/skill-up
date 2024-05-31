import React from "react";
import 'tailwindcss/tailwind.css';
import money from '../Images/money.svg';
import notes from '../Images/notes.svg';
import people from '../Images/people.svg';
import books from '../Images/books.svg';
import tools from '../Images/tools.svg';
import support from '../Images/support.svg';

function WhyUs() {
    return (
        <div className="container mx-auto px-4 font-clash">
            <div className="text-center mb-8">
                <label className="font-semibold text-4xl sm:text-5xl md:text-6xl leading-10">
                    Why <span className="text-blue-600">us</span>?
                </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                <div className="personalized-plan border-4 border-white border-opacity-50 shadow-xl overflow-hidden 
                rounded-custom p-4 bg-gradient-to-b from-[#FFDDDD] to-[#E2E2E2] shadow-custom">
                    <div className="flex flex-col gap-4 p-6 ">
                        <img src={notes} alt="Personalized Plan" className="w-16 h-16" />
                        <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl leading-snug">Personalized Plan</p>
                        <p className="font-light text-base font-outfit text-gray-700">
                            A well-structured curriculum tailored to <br></br>industry demands ensures that learners<br></br>
                             acquire relevant skills. It focuses on<br></br> 
                             practical knowledge and up-to-date<br></br> content, preparing students for real-world<br></br> challenges.
                        </p>
                    </div>
                </div>

                <div className="expert-instructors border-4 border-white shadow-xl overflow-hidden border-opacity-50
                 rounded-custom p-4 bg-gradient-to-b from-[#DDFFEB] to-[#E2E2E2] shadow-custom">
                    <div className="flex flex-col gap-4 p-6">
                        <img src={people} alt="Expert Instructors" className="w-16 h-16" />
                        <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl leading-snug">Expert Instructors</p>
                        <p className="font-light text-base font-outfit text-gray-700">
                            Learning from experienced professionals<br></br> who have worked in the field provides <br></br>
                            valuable insights. Expert instructors can <br></br> 
                            share practical examples, industry best<br></br> practices, and mentorship, enhancing <br></br>
                            the learning experience.
                        </p>
                    </div>
                </div>

                <div className="hands-on-learning border-4 border-white shadow-xl overflow-hidden border-opacity-50
                 rounded-custom p-4 bg-gradient-to-b from-[#DDE7FF] to-[#E2E2E2] to-gray-200 shadow-custom">
                    <div className="flex flex-col gap-4 p-6">
                        <img src={books} alt="Hands-on Learning" className="w-16 h-16" />
                        <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl leading-snug">Hands-on Learning</p>
                        <p className="font-light text-base font-outfit text-gray-700">
                            Theory alone isn’t sufficient. Hands-on<br></br> projects allow learners to apply concepts,<br></br>
                             solve problems, and build a portfolio.<br></br> Practical experience reinforces theoretical<br></br>
                              knowledge and boosts confidence.
                        </p>
                    </div>
                </div>

                <div className="access-tools border-4 border-white shadow-xl overflow-hidden border-opacity-50 
                rounded-custom p-4 bg-gradient-to-b from-[#FAFFDD] to-[#E2E2E2] shadow-custom">
                    <div className="flex flex-col gap-4 p-6">
                        <img src={tools} alt="Access to Tools" className="w-16 h-16" />
                        <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl leading-snug">Access to Tools</p>
                        <p className="font-light text-base font-outfit text-gray-700">
                            Exposure to tools and technologies<br></br> commonly used in the industry is crucial.<br></br>
                             Access to software, platforms, and<br></br> development environments ensures students<br></br> 
                             are well-prepared for their future roles.
                        </p>
                    </div>
                </div>

                <div className="affordable-options border-4 border-white shadow-xl overflow-hidden border-opacity-50
                 rounded-custom p-4 bg-gradient-to-b from-[#FFEBDD] to-[#E2E2E2] shadow-custom">
                    <div className="flex flex-col gap-4 p-6">
                        <img src={money} alt="Affordable Options" className="w-16 h-16" />
                        <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl leading-snug">Affordable Options</p>
                        <p className="font-light text-base font-outfit text-gray-700">
                            Learning should be accessible to all.<br></br> Affordable pricing and flexible payment<br></br>
                             plans accommodate diverse learners,<br></br> regardless of financial constraints.
                        </p>
                    </div>
                </div>

                <div className="career-support border-4 border-white shadow-xl overflow-hidden border-opacity-50 
                rounded-custom p-4 bg-gradient-to-b from-[#FFDDF5] to-[#E2E2E2] shadow-custom">
                    <div className="flex flex-col gap-4 p-6">
                        <img src={support} alt="Career Support" className="w-16 h-16 "/>
                        <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl leading-snug">Career Support</p>
                        <p className="font-light text-base font-outfit text-gray-700">
                            Beyond learning, career outcomes matter.<br></br> Job placement services, resume building,<br></br> 
                            interview preparation, and networking <br></br>opportunities help students transition<br></br>
                             successfully into the workforce.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
