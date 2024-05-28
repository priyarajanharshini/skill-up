import React from "react";


function Things() {
  const questions = [
    "Can I  collaborate effectively with my peers?",
    "How can I check for understanding?",
    "What open-ended creation tools are available?",
    "How can I check for understanding?",
    "Is the platform user-friendly?"
  ];

  return (
    <div className="Things">
      <div className="heading ">

        <p className="font-clash text-5xl font-extrabold text-center my-8 text-custom-gray">
          <span className="pb-2 inline-block mb-1">Things, you</span>
          <br />
          <span>may wonder:</span>
          <span className="text-blue-600/100">
            FAQ<span>s</span>
          </span>
        </p>

      </div>
      <div className="pt-7">
        {questions.map((question, index) => (
          <div
            key={index}
            className="group flex items-center  justify-between  gap-0 rounded-3xl  divide-solid   hover:border-white p-7  hover:bg-white font-Arial sans-serif text-base shadow-custom mx-auto mb-[20px] max-w-[85%] "
          >
            <p className="font-clash   text-xl  font-bold  leading-7  text-center p-3" >
              {question}
            </p>
            <p className="text-xl  font-bold  leading-7  text-center p-3">
              +
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Things;






