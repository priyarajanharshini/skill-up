// import React, { useState } from "react";
// import first from '../Icons/first.png';
// import python from '../Icons/python.svg';
// import Frame from '../Icons/Frame.svg'; 
// import FLUTTER from '../Icons/FLUTTER.svg';
// import react from '../Icons/react.svg';
// import JAVA from '../Icons/JAVA .svg';

// function Trial() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleMobileMenuToggle = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <div className="container mx-auto min-h-screen mt-3">
//         <nav className="bg-gray-100 rounded-lg">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="relative flex h-20 items-center justify-between">
//               <div className="flex items-center">
//                 <img className="h-8 w-auto" src={first} alt="Your Company" />
//                 <span className="text-black ml-2 font-extrabold">S3 Skill Up</span>
//               </div>
//               <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
//                 <div className="" >
//                   <a className="text-blue-500 px-3 py-2 text-lg font-semibold leading-7" style={{ textDecoration: 'none',fontFamily: 'Clash Display', fontSize: '16px', lineHeight: '22.4px' }} >
//                     Home
//                   </a>
//                   <a href="#" className="text-black px-3 py-2 text-lg font-semibold leading-7" style={{ textDecoration: 'none',fontFamily: 'Clash Display', fontSize: '16px', lineHeight: '22.4px'  }} >
//                     Courses
//                   </a>
//                   <a href="#" className="text-black px-3 py-2 text-lg font-semibold leading-7" style={{ textDecoration: 'none',fontFamily: 'Clash Display', fontSize: '16px', lineHeight: '22.4px'  }} >About
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
//             className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"} h-screen bg-gray-100 flex flex-col justify-between container mx-auto`}
//             id="mobile-menu"
//             style={{ height: "85vh", }}
//           >
//             <div className="px-2 pt-2 space-y-1 text-center">
//               <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
//                 Home
//               </a>
//               <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
//                 Courses
//               </a>
//               <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
//                 About
//               </a>
//             </div>
//             <button className="bg-blue-500 text-white font-bold py-2 rounded mx-2" style={{ fontFamily: 'Clash Display', lineHeight: '22.6px' }}>
//             Contact Us
//             </button>
//           </div>
//         </nav>

       
//         <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-3">

// <div className="md:order-1 lg:order-2 flex justify-center w-full lg:w-auto">
//         <button className=" h-14 mt-8 bg-white-500 text-black border border-semi-transparent-black font-bold rounded-full flex items-center space-x-2">          
//             <span className="text-black font-medium ext-base leading-8 text-center flex items-center justify-center px-10 py-4" style={{ fontFamily: 'Clash Display', lineHeight: '25.6px' }}>
//                 Top Courses by Top Mentors
//             </span>
//             <img className="w-18 h-18" src={Frame} alt="Frame" />
//         </button>
//     </div>

//     <div className="md:order-2 lg:order-1 flex justify-start" >
//         <img className="w-20 h-20 my-4 lg:my-0 ml-20" src={python} alt="Python" />
//     </div>

//   <div className="order-3 lg:order-3 flex justify-end" >
//         <img className="w-20 h-20 my-4 lg:my-0 mr-20" src={FLUTTER} alt="Flutter" />
//     </div>
// </div>

//      <div className=" text-center mt-7">
//             <p class="font-clash font-semibold text-6xl leading-tight text-center" style={{ lineHeight: '86.4px' }}>
//              Specialize in<span class="text-blue-600"> high-demand </span></p>
//              <p className="font-clash font-sm text-6xl  leading-none lg:leading-tight "style={{marginTop:"-19px"}}>technical courses</p>
           

//              <div class="flex justify-center items-center mt-2">
//                 <div class="font-outfit text-lg font-thin leading-8 text-center text-base max-w-xs mx-auto md:max-w-full">
              

//     <p> Discover our dynamic curriculum tailored to empower you with the </p>
//     <p style={{marginTop:"-19px"}}> essential skills needed to thrive in today's bustling job market.</p>
//     </div>
//    </div>

//    <div className="flex justify-between items-center">

//     <div>
//     <img className="ml-20" src={JAVA} />
//     </div>
//     <div >
//                 <button className="bg-blue-500  text-white text-xl py-2 px-4 rounded-md text-sm w-[236px] h-[66px]">
//                   Get Started
//                 </button>
//               </div>

//     <div class="mt-14">
//     <img src={react} class="mr-14" style={{marginTop:"-140px"}} />
//     </div>
//    </div>
//  </div>  

//  <div class="container mx-auto mt-10 px-4 sm:px-6 md:px-8">
//   <div class="flex flex-wrap justify-center -mx-4">
//    <div class="w-full flex flex-wrap justify-center -mx-4 mb-10">
//       <div class="w-full lg:w-1/3 px-4 mb-8">
//     <div class=""style={{border: "1px solid white",boxShadow:"0px 0px 12px 0px rgba(0, 0, 0, 0.1)", borderRadius: "1rem", padding: "2px"}}>
//         <div class="bg-[#CEEAFF] p-6 rounded-2xl mx-auto text-center shadow-sm">
//           <p  class="font-display text-5xl font-semibold leading-72 text-left">15,635+</p>
//           <p  class="font-display text-base font-medium leading-6 text-left text-gray-700">students enrolled</p>
//         </div>
//         </div>
//       </div>

//       <div class="w-full lg:w-1/3 px-4 mb-8">
//       <div class=""style={{border: "1px solid white",boxShadow:"0px 0px 12px 0px rgba(0, 0, 0, 0.1)", borderRadius: "1rem", padding: "2px"}}>
//         <div class="bg-[#CEEAFF] p-6 rounded-2xl mx-auto text-center shadow-sm ">
//           <p class="font-display text-5xl font-semibold leading-72 text-left">60+</p>
//           <p class="font-display text-base font-medium leading-6 text-left text-gray-700">best selling courses</p>
//         </div>
//         </div>
//       </div>

      
//       <div class="w-full lg:w-1/3 px-4 mb-8"> 
//       <div class=""style={{border: "1px solid white",boxShadow:"0px 0px 12px 0px rgba(0, 0, 0, 0.1)", borderRadius: "1rem", padding: "2px"}}> 
//         <div class="bg-[#CEEAFF] p-6 rounded-2xl mx-auto text-center shadow-sm">
//         <p class="font-display text-5xl font-semibold leading-72 text-left">200+</p>
//           <p class="font-display text-base font-medium leading-6 text-left text-gray-700">expert Instructors</p>
//         </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>


        

//       </div>
//     </>
//   );
// }

// export default Trial;



import React, { useState } from "react";
import first from '../Icons/first.png';
import python from '../Icons/python.svg';
import Frame from '../Icons/Frame.svg'; 
import FLUTTER from '../Icons/FLUTTER.svg';
import react from '../Icons/react.svg';
import JAVA from '../Icons/JAVA .svg';

function Trial() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="container mx-auto  mt-3">
        
        <nav className="bg-gray-100 rounded-lg ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="flex items-center">
                <img className="h-8 w-auto" src={first} alt="Your Company" />
                <span className="text-black ml-2 font-extrabold">S3 Skill Up</span>
              </div>
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
                <div className="" >
                  <a className="text-blue-500 px-3 py-2 text-lg font-semibold leading-7  no-underline font-clash text-base lg:text-xl leading-6 lg:leading-7">
                    Home
                  </a>
                  <a href="#" className="text-black px-3 py-2 text-lg font-semibold leading-7 text-no-underline font-clash text-base leading-6" >
                    Courses
                  </a>
                  <a href="#" className="text-black px-3 py-2 text-lg font-semibold leading-7 no-underline font-clash text-base leading-6" >About
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
                  <span className="absolute -inset-0.5"></span>
                  <svg
                    className={isMobileMenuOpen ? "hidden h-6 w-6" : "block h-6 w-6"}
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
                    className={isMobileMenuOpen ? "block h-6 w-6" : "hidden h-6 w-6"}
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
                              {/* mobile Navbar */}
          <div 
            className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}  bg-gray-100  flex flex-col justify-between container mx-auto h-screen `}
            id="mobile-menu">
            <div className="px-2 pt-2 space-y-1 text-center">
              <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium" >
                Home
              </a>
              <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium" >
                Courses
              </a>
              <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium" >
                About
              </a>
            </div>
            <button className="bg-blue-500 text-white font-bold py-2 rounded mx-2">
            Contact Us
            </button>
          </div>
        </nav>

       
        <div className="mx-auto mt-11 text-center relative">
                                   {/* Laptop */}
        <div>
        <button className="mx-auto h-14 mt-8 bg-white-500 text-black border border-semi-transparent-black font-bold rounded-full flex items-center space-x-2">          
            <span className="text-black font-medium ext-base leading-8 text-center flex items-center justify-center px-10 py-4" >
                Top Courses by Top Mentors
            </span>
            <img className="w-18 h-18" src={Frame} alt="Frame" />
        </button>
        </div>
                              {/* XS */}
          {/* <div>
        <button className="mx-auto h-14 mt-8 bg-white-500 text-black border border-semi-transparent-black font-light-400 rounded-full flex items-center space-x-2">          
            <span className="text-black font-medium ext-base leading-8 text-center flex items-center justify-center px-10 py-4" >
                Top Courses by Top Mentors
            </span>
            <img className="w-18 h-18" src={Frame} alt="Frame" />
        </button>
        </div> */}

       <div className=" text-center mt-7">
            <p class="font-clash font-bold text-6xl leading-tight text-center">
             Specialize in<span class="text-blue-600"> high-demand </span></p>
             <p className="font-clash font-sm text-6xl  leading-none lg:leading-tight ">technical courses</p>
        </div>
           
       <div class="flex justify-center items-center mt-3">
                <div class="font-outfit text-lg font-thin leading-8 text-center text-base max-w-xs mx-auto md:max-w-full">
              
     <p> Discover our dynamic curriculum tailored to empower you with the </p>
    <p > essential skills needed to thrive in today's bustling job market.</p>
    </div>
        </div>

        <div className=" mt-7">
                <button className="bg-blue-500  text-white text-xl py-2 px-4 rounded-md text-sm w-[236px] h-[66px]">
                  Get Started
                </button>
        </div>

   
<div>
              {/* Laptop */}
     {/* <div className="absolute inset-y-0 left-20 -top-4">
  <img className="w-10 h-10 md:h-24 sm:w-20 sm:h-20 md:w-24 " src={python} alt="Python" />
</div>
 
  <div className="absolute inset-y-0 right-28" >
    <img className="w-10 h-10 md:h-24 sm:w-20 sm:h-20 md:w-24" src={FLUTTER} alt="Flutter" />
  </div>

  <div className="absolute top-64 left-20" >
    <img className="" src={JAVA} alt="Java" />
  </div>

  <div className="absolute top-60 right-24">
    <img className="" src={react} alt="React"/>
  </div> */}
 
  
               {/* XS */}
<div className="absolute inset-y-0 left-4 top-16">
  <img className="w-10 h-10 md:h-24 sm:w-20 sm:h-20 md:w-24 " src={python} alt="Python" />
</div>
          
  <div className="absolute inset-y-0 top-28 right-0" >
    <img className="w-10 h-10" src={FLUTTER} alt="Flutter" />
  </div>
         

  <div className="absolute top-80 inset-y-0 left-1" >
    <img className="w-16 h-16" src={JAVA} alt="Java" />
  </div>

  <div className="absolute  bottom-60 right-4">
    <img className="w-10 h-10" src={react} alt="React"/>
  </div>
 

</div>

   
   </div>


 <div class="container mx-auto mt-10 px-4 sm:px-6 md:px-8">
  <div class="flex flex-wrap justify-center -mx-4">
   <div class="w-full flex flex-wrap justify-center -mx-4 mb-10">
      <div class="w-full lg:w-1/3 px-4 mb-8">
    <div class="border border-white shadow-md rounded-lg p-0.5">
        <div class="bg-[#CEEAFF] p-6 rounded-2xl mx-auto text-center shadow-sm">
          <p  class="font-display text-5xl font-semibold leading-72 text-left">15,635+</p>
          <p  class="font-display text-base font-medium leading-6 text-left text-gray-700">students enrolled</p>
        </div>
        </div>
      </div>

      <div class="w-full lg:w-1/3 px-4 mb-8">
      <div class="border border-white shadow-md rounded-lg p-0.5">
        <div class="bg-[#CEEAFF] p-6 rounded-2xl mx-auto text-center shadow-sm ">
          <p class="font-display text-5xl font-semibold leading-72 text-left">60+</p>
          <p class="font-display text-base font-medium leading-6 text-left text-gray-700">best selling courses</p>
        </div>
        </div>
      </div>

      
      <div class="w-full lg:w-1/3 px-4 mb-8"> 
      <div class="border border-white shadow-md rounded-lg p-0.5"> 
        <div class="bg-[#CEEAFF] p-6 rounded-2xl mx-auto text-center shadow-sm">
        <p class="font-display text-5xl font-semibold leading-72 text-left">200+</p>
          <p class="font-display text-base font-medium leading-6 text-left text-gray-700">expert Instructors</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>


        

      </div>
    </>
  );
}

export default Trial;



