// import React, { useState } from "react";
// import s3 from '../Icons/s3.svg';


// function Topbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleMobileMenuToggle = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <div className="container mx-auto mt-3">
//         <nav className="bg-gray-100 rounded-lg ">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="relative flex h-20 items-center justify-between">
//               <div className="flex items-center">
//                 <img className="h-8 w-auto" src={s3} alt="Your Company" />
//               </div>
//               <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
//                 <div className="" >
//                   <a className="text-blue-500 px-3 py-2 text-lg font-semibold leading-7  no-underline font-clash text-base lg:text-xl leading-6 lg:leading-7">
//                     Home
//                   </a>
//                   <a href="#" className="text-black px-3 py-2 text-lg font-semibold leading-7 text-no-underline font-clash text-base leading-6" >
//                     Courses
//                   </a>
//                   <a href="#" className="text-black px-3 py-2 text-lg font-semibold leading-7 no-underline font-clash text-base leading-6" >About
//                   </a>
//                 </div>
//               </div>
//               <div className="hidden sm:flex sm:items-center sm:justify-end">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                   Contact Us
//                 </button>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
//                 <button
//                   type="button"
//                   className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                   aria-controls="mobile-menu"
//                   aria-expanded={isMobileMenuOpen ? "true" : "false"}
//                   onClick={handleMobileMenuToggle}
//                 >
//                   <span className="absolute -inset-0.5"></span>
//                   <svg
//                     className={isMobileMenuOpen ? "hidden h-6 w-6" : "block h-6 w-6"}
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                     />
//                   </svg>
//                   <svg
//                     className={isMobileMenuOpen ? "block h-6 w-6" : "hidden h-6 w-6"}
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
                            
//           <div 
//             className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-gray-100  flex flex-col justify-between container mx-auto h-dvh`}
//             id="mobile-menu">
//             <div className="px-2 pt-2 space-y-1 text-center">
//               <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium" >
//                 Home
//               </a>
//               <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium" >
//                 Courses
//               </a>
//               <hr></hr>
//               <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium" >
//                 About
//               </a>
//             </div>
//             <button className="bg-blue-500 text-white mb-24 font-bold py-2 rounded mx-2">
//             Contact Us
//             </button>
//           </div>
//         </nav>
    

//       </div>
//     </>
//   );
// }

// export default Topbar;


// import React, { useState } from "react";
// import s3 from '../Icons/s3.svg';

// function Topbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleMobileMenuToggle = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <div className="container mx-auto mt-3">
//         <nav className="bg-gray-100  xs:bg-white xs:rounded-2xl">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="relative flex h-20 items-center justify-between">
//               <div className="flex items-center">
//                 <img className="h-8 w-auto" src={s3} alt="Your Company" />
//               </div>
//               <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
//                 <div>
//                   <a href="#" className="text-blue-500 px-3 py-2 text-lg font-semibold leading-7 no-underline font-clash text-base lg:text-xl leading-6 lg:leading-7">
//                     Home
//                   </a>
//                   <a href="#" className="text-black px-3 py-2 text-lg font-semibold leading-7 no-underline font-clash text-base leading-6">
//                     Courses
//                   </a>
//                   <a href="#" className="text-black px-3 py-2 text-lg font-semibold leading-7 no-underline font-clash text-base leading-6">
//                     About
//                   </a>
//                 </div>
//               </div>
//               <div className="hidden sm:flex sm:items-center sm:justify-end">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                   Contact Us
//                 </button>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
//                 <button
//                   type="button"
//                   className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                   aria-controls="mobile-menu"
//                   aria-expanded={isMobileMenuOpen ? "true" : "false"}
//                   onClick={handleMobileMenuToggle}
//                 >
//                   <span className="absolute -inset-0.5"></span>
//                   <svg
//                     className={isMobileMenuOpen ? "hidden h-6 w-6" : "block h-6 w-6"}
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                     />
//                   </svg>
//                   <svg
//                     className={isMobileMenuOpen ? "block h-6 w-6" : "hidden h-6 w-6"}
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
                            
//           <div 
//             className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-white flex flex-col justify-between container  rounded-2xl  h-dvh mt-2`}
//             id="mobile-menu"
           
//           >
//             <div className="px-2 pt-2 space-y-1 text-center">
//               <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">
//                 Home
//               </a>
//               <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">
//                 Courses
//               </a>
//               <hr></hr>
//               <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">
//                 About
//               </a>
//             </div>
//             <button className="bg-blue-500 text-white mb-28 font-bold py-2 rounded mx-2">
//               Contact Us
//             </button>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// }

// export default Topbar;

import React, { useState } from "react";
import s3 from '../Icons/s3.svg';

function Topbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="container mx-auto mt-3">
        <nav className="bg-gray-100 xs:bg-white xs:rounded-2xl xs:w-11/12 ">
          {/* <nav className="bg-gray-100 "> xs la mattum navbar ku w-11/12 apply aganum md,sm,lg ku vendam */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:px-6">
            <div className="relative flex h-20 items-center justify-between">
              <div className="flex items-center">
                <img className="h-8 w-auto" src={s3} alt="Your Company" />
              </div>
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
                <div>
                  <a href="#" className="text-blue-500 px-3 py-2 text-lg font-semibold leading-7 no-underline font-clash text-base lg:text-xl lg:leading-7">
                    Home
                  </a>
                  <a href="#" className="text-black px-3 py-2 text-lg font-semibold leading-7 no-underline font-clash text-base lg:text-xl lg:leading-7">
                    Courses
                  </a>
                  <a href="#" className="text-black px-3 py-2 text-lg font-semibold leading-7 no-underline font-clash text-base lg:text-xl lg:leading-7">
                    About
                  </a>
                </div>
              </div>
              <div className="hidden sm:flex sm:items-center sm:justify-end">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Contact Us
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen ? "true" : "false"}
                  onClick={handleMobileMenuToggle}
                >
                  <svg
                    className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div 
            className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-white flex flex-col justify-between container rounded-3xl h-svh mt-2 w-11/12 ml-3.5 `}
            id="mobile-menu"
          >
            <div className="px-2 pt-2 space-y-1 text-center">
              <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">
                Courses
              </a>
              <hr />
              <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
            </div>
            <button className="bg-blue-500 text-white mb-28 font-bold py-2 rounded mx-2">
              Contact Us
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Topbar;

