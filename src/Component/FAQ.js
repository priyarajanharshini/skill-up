import React, { useState } from "react";

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const questions = [
    "Can I collaborate effectively with my peers?",
    "How can I check for understanding?",
    "What open-ended creation tools are available?",
    "How can I check for understanding?",
    "Is the platform user-friendly?"
  ];

  const answers = [
    "Yes, the platform includes various tools to enhance collaboration such as shared workspaces, live chats, and real-time document editing.",
    "To check for understanding, you can use interactive quizzes, feedback forms, and progress tracking features available on the platform.",
    "There are multiple open-ended creation tools such as customizable templates, media upload options, and project-based learning modules.",
    "You can check for understanding through quizzes, assignments, and interactive activities that provide instant feedback.",
    "Yes, the platform is designed to be intuitive and user-friendly, with easy navigation, help guides, and customer support."
  ];

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="Things">
      <div className="font-clash text-4xl font-semibold text-center mt-16  lg-mb-10 sm:mb-4 md:mb-8 mb-4 text-custom-gray sm:text-3xl md:text-5xl">
        <div className="pb-2 inline-block mb-1">Things, you</div>
        <div>may wonder:
          <span className="text-blue-600/100">
            FAQs
          </span></div>
      </div>
      <div className="pt-7 mb-16">
        {questions.map((question, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-between gap-0 rounded-3xl divide-solid p-8 font-clash text-base shadow-custom-box2 mb-[20px] w-100% lg:mx-10 md:mx-6  sm:mx-6 mx-6">
        
            <div className="flex items-center justify-between w-full">
              <p className="font-clash text-base  lg:text:xl sm:text-xl md:text-2xl font-bold leading-7 text-center p-3">
                {question}
              </p>
              <p className="text-xl sm:text-1xl md:text-2xl font-bold leading-7 text-center p-3 cursor-pointer"
                onClick={() => handleExpand(index)}>
                {expandedIndex === index ? "-" : "+"}
              </p>
            </div>
            {expandedIndex === index && (
              <div className="font-clash text-xs  md:text-lg lg:text-lg  sm:text-base font-semibold leading-7 pl-9 p-3">
                {answers[index]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;

