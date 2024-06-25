import React from 'react';
import 'tailwindcss/tailwind.css';
import Arrow from '../Icons/Arrow.svg';
import buildings from '../Icons/buildings.svg';
import sms from '../Icons/sms.svg';
import call from '../Icons/call.svg';



function Contactus() {
  const mapUrl = "https://maps.google.com/maps?q=8.9434556,77.4659909&hl=es&z=14&output=embed&iwloc=0&markers=color:red|8.9434556,77.4659909";
  return (
    <>
      <div className=" flex items-center justify-center p-6">
        <div className="w-full sm:w-10/12 md:w-10/12 lg:w-7/12">

          <div className="text-center mt-12 mb-24 sm:mb-16 md:mb-20 lg:mb-20">
            <div>
              <label className="font-bold text-4xl sm:text-5xl md:text-6xl leading-10">
                Let’s <span className="text-blue-600">talk!</span>
              </label>
              <div class="font-thin leading-8 h-16 font-outfit text-base font-normal text-gray-700 mt-8">
                <p >If you have any questions, just reach out to us and we’ll respond as soon as we can. </p>
                <p >Please provide as much information as possible.</p>
              </div>
            </div>
          </div>

          <form className="text-left">
            <div className="mb-6">
              <label htmlFor="name" className="font-normal block text-gray-700 text-lg mb-4">What’s your name?</label>
              <input
                type="text"
                id="name"
                className="w-full px-6 border-[#959595] border rounded-xl lg:h-20 md:h-20 sm:h-20 h-16 font-clash text-xl font-medium leading-7"
                placeholder="Enter name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="font-normal block text-gray-700 text-lg mb-4">What’s your email address?</label>
              <input
                type="email"
                id="email"
                className="w-full px-6 border-[#959595] border rounded-xl lg:h-20 md:h-20 sm:h-20 h-16 font-clash text-lg font-medium leading-7"
                placeholder="Enter email address"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="query" className="font-normal block text-gray-700 text-lg mb-4">What are you looking for</label>
              {/* <div class="px-6 border-[#959595] border rounded-lg h-20 mt-4 gap-0 flex justify-between items-center">
                <p class="font-clash text-xl font-medium text-gray-400 leading-7">
                  Select a query
                </p>
                <div>
                  <img src={Arrow} class="text-lg mt-2 text-gray-500 leading-7" />
                </div>
              </div> */}

              <select
                id="query"
                className="w-full p-4 border-[#959595] border rounded-xl lg:h-20 md:h-20 sm:h-20 h-16 font-clash text-lg font-medium leading-7 text-gray-400"
              >
                <option value="" className="">Select a query</option>
                <option value="query1" className="text-gray-800">Query 1</option>
                <option value="query2" className="text-gray-800">Query 2</option>
                <option value="query3" className="text-gray-800">Query 3</option>
              </select>

            </div>
            <div className="mb-6">
              <label htmlFor="explanation" className="font-normal block text-gray-800 text-lg mb-4">Can you explain briefly?</label>
              <textarea
                id="explanation"
                className="w-full p-8 border-[#959595] border rounded-xl h-48 font-clash text-lg font-medium leading-7 text-gray-500 py-8"
                placeholder="Explain briefly..."
              ></textarea>
            </div>

            <div class="mt-8 pb-24">
              <button class="bg-blue-500 w-full h-20 rounded-xl text-white font-semibold text-xl"> Send your query</button>
            </div>
          </form>

        </div>
      </div>
      {/* Get in touch */}
      <div class="container mx-auto -mt-8 sm:mt-0 md:mt-0 lg:-mt-12 px-4 sm:px-6 sm:py-10 md:px-8 md:py-12">
        <div class="text-center mb-0">
          <div class="text-center">
            <label class="font-clash font-semibold text-4xl sm:text-5xl md:text-6xl leading-10">
              Get in touch<span class="text-blue-600 tracking-tighter"> with us!</span>
            </label>
            <div class="font-thin leading-8 h-16 font-outfit font-normal leading-8 mt-4 sm:mt-12 md:mt-12 lg:mt-8 mb-8 sm:mb-0 md:mb-0 lg:mb-0">
              <p class="text-slate-800 text-lg tracking-wider">Need support or have a question about your career? We’re here to help.</p>
            </div>
          </div>


        </div>

        <div class="flex flex-col lg:flex-row gap-6 sm:gap-10 md:gap-10 lg:gap-10 jusify-between">

          <div class="w-full h-96 lg:h-auto rounded-50px bg-gray-200">
            <div class="w-full h-full p-1">
              <div class="w-full h-full">
                <iframe class="w-full h-full rounded-50px" src={mapUrl} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

          <div class="w-full h-full rounded-50px bg-gray-50">
            <div class="text-left px-8 lg:px-16 py-8">
              <p class="font-outfit text-normal font-normal leading-5 text-gray-500 mb-4">Address:</p>
              <div class="flex items-center mt-1 mb-4">
                <img src={buildings} class="mr-2" alt="Buildings icon" />
                <p class="pl-1 font-clash-display text-xl font-medium leading-7 text-black">Apt. 484 40581 Cortez Estates,NV 15857</p>
              </div>

              <p class="font-outfit text-normal font-normal leading-5 text-gray-500 mt-8 mb-4 ">Email address:</p>
              <div class="flex items-center mt-1 mb-8">
                <img src={sms} class="mr-2" alt="Email icon" />
                <p class="pl-1 font-clash-display text-xl font-medium leading-7 text-black">email@gmail.com</p>
              </div>

              <p class="font-outfit text-normal font-normal leading-5 text-gray-500 mt-2 ">Phone:</p>
              <div class="flex items-center mt-4 mb-12">
                <img src={call} class="mr-2" alt="Phone icon" />
                <p class="pl-1 font-clash-display text-xl font-medium leading-7 text-black">+919876543210</p>
              </div>

              <div class="flex gap-4 pt-0">

                <div class="w-14 h-14 text-blue-500 border border-black rounded-full flex justify-center items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" fill="#0075FF" />
                  </svg>
                </div>


                <div class="w-14 h-14 text-blue-500 border border-black rounded-full flex justify-center items-center">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 4.00002C22.5 4.00002 21.8 6.10002 20.5 7.40002C22.1 17.4 11.1 24.7 2.5 19C4.7 19.1 6.9 18.4 8.5 17C3.5 15.5 1 9.60002 3.5 5.00002C5.7 7.60002 9.1 9.10002 12.5 9.00002C11.6 4.80002 16.5 2.40002 19.5 5.20002C20.6 5.20002 22.5 4.00002 22.5 4.00002Z" fill="#0075FF" />
                  </svg>
                </div>


                <div class="w-14 h-14 text-blue-500 border border-black rounded-full flex justify-center items-center">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 8C18.0913 8 19.6174 8.63214 20.7426 9.75736C21.8679 10.8826 22.5 12.4087 22.5 14V21H18.5V14C18.5 13.4696 18.2893 12.9609 17.9142 12.5858C17.5391 12.2107 17.0304 12 16.5 12C15.9696 12 15.4609 12.2107 15.0858 12.5858C14.7107 12.9609 14.5 13.4696 14.5 14V21H10.5V14C10.5 12.4087 11.1321 10.8826 12.2574 9.75736C13.3826 8.63214 14.9087 8 16.5 8Z" fill="#0075FF" />
                    <path d="M6.5 9H2.5V21H6.5V9Z" fill="#0075FF" />
                    <path d="M4.5 6C5.60457 6 6.5 5.10457 6.5 4C6.5 2.89543 5.60457 2 4.5 2C3.39543 2 2.5 2.89543 2.5 4C2.5 5.10457 3.39543 6 4.5 6Z" fill="#0075FF" />
                  </svg>
                </div>


                <div class="w-14 h-14 text-blue-500 border border-black rounded-full flex justify-center items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#0075FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16 11.3701C16.1234 12.2023 15.9812 13.0523 15.5937 13.7991C15.2062 14.5459 14.5931 15.1515 13.8416 15.5297C13.0901 15.908 12.2384 16.0397 11.4077 15.906C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5923C7.96035 11.7616 8.09202 10.91 8.47028 10.1584C8.84854 9.40691 9.45414 8.7938 10.2009 8.4063C10.9477 8.0188 11.7977 7.87665 12.63 8.00006C13.4789 8.12594 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z" stroke="#0075FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17.5 6.5H17.51" stroke="#0075FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactus;