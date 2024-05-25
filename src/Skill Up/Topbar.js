// import React from "react";
// import first from '../Icons/first.png';
// import python from '../Icons/python.svg';
// import Frame from '../Icons/Frame.svg'; 
// import FLUTTER from '../Icons/FLUTTER.svg';

// const Navbar = () => {
//   return (
//     <div>
//     <nav className="bg-gray-100 p-5 m-8 rounded-lg flex items-center justify-between">
//       <div className="flex items-center">
//         <img src={first} alt="Icon" className="w-8 h-8 mr-2" />
//         <div className="text-black text-lg font-bold "> S3 skill up  </div>
//          </div>

//       <ul className="flex space-x-4">
//         <li>
//           <a href="#" className="text-blue-500 font-clash font-semibold text-base leading-28 text-left">Home</a>
//         </li>
//         <li>
//           <a href="#" className="text-black-500 font-clash font-semibold text-base leading-28 text-left">About</a>
//         </li>
//         <li>
//           <a href="#" className="text-black-500 font-clash font-semibold text-base leading-28 text-left">Courses</a> 
//         </li>
//       </ul>
//       <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg font-clash text-base font-medium leading-28 text-left">
//         Contact us
//       </button>
//     </nav>

//     <div className="flex items-center justify-between mt-16 ">

//         <div className="ml-20  ">
//         <img src={python} />
//         </div>

//         <div>
//             <button className="bg-white-500 text-black border border-semi-transparent-black font-bold rounded-full flex items-center space-x-2">
//      <span  className="text-black font-bold flex items-center justify-center px-10 py-4" >
//         Top Courses by Top Mentors</span>
//           <img src={Frame} />
//           </button></div>

        
//         <div className="mr-20  ">
//   <img src={FLUTTER} />
//   </div>
//         </div>
//     </div>
   
//   );
// };

// export default Navbar;




// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import first from '../Icons/first.png'; 
// import FLUTTER from '../Icons/FLUTTER.svg'; 

// function Vesperr() {
//   const [isNavCollapsed, setIsNavCollapsed] = useState(true);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const handleNavCollapse = () => {
//     setIsNavCollapsed(!isNavCollapsed);
//   };

//   const handleNavLinkClick = () => {
//     setMobileMenuOpen(false);
//   };

//   return (
   
    
//         <div className="container">
//           <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-items-center" id="navbar"> 
//             <div className="d-flex align-items-center">
//               <div className="flex items-center">
//                 <img className="h-8 w-auto" src={first} alt="Your Company" />
//                 <span className="text-black ml-2 font-extrabold">S3 Skill Up</span>
//               </div>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarNavDropdown"
//                 aria-controls="navbarNavDropdown"
//                 aria-expanded={!isNavCollapsed ? true : false}
//                 aria-label="Toggle navigation"
//                 onClick={handleNavCollapse}
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//             </div>
//             <div
//               className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-center`}
//               id="navbarNavDropdown"
//             >
//               <ul className="navbar-nav" id="ul-font">
//                 <li className="nav-item active" style={{fontSize:"11px"}}>
//                Home
//                 </li>                  
//                 <li className="nav-item" style={{fontSize:"11px"}}>
//                   About 
//                 </li>
//                 <li className="nav-item" style={{fontSize:"11px"}}>
//                   About
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg font-clash text-base font-medium leading-28 text-left">
//                 Contact us
//               </button>
//             </div>
//           </nav>
//         </div>
      
   
//   );
// }

// export default Vesperr;


// import React, { useState } from "react";
// import first from '../Icons/first.png'; 
// import FLUTTER from '../Icons/FLUTTER.svg'; 

// function Vesperr() {
//   const [isNavCollapsed, setIsNavCollapsed] = useState(true);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const handleNavCollapse = () => {
//     setIsNavCollapsed(!isNavCollapsed);
//     setMobileMenuOpen(!isMobileMenuOpen); // Toggling mobile menu
//   };

//   const handleNavLinkClick = () => {
//     setMobileMenuOpen(false);
//   };

//   return (
//     <div className="container mx-auto">
//       <nav className="flex flex-wrap items-center justify-between bg-gray-100 py-4 px-6">
//         <div className="flex items-center flex-shrink-0">
//           <img className="h-8 w-auto" src={first} alt="Your Company" />
//           <span className="text-black ml-2 font-extrabold hidden lg:inline-block">S3 Skill Up</span>
//         </div>
//         <button
//           className="block lg:hidden border border-solid border-gray-600 rounded px-3 py-1 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-200"
//           onClick={handleNavCollapse}
//         >
//           <svg
//             className="fill-current h-3 w-3"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <title>Menu</title>
//             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//           </svg>
//         </button>
//         <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto`}>
//           <div className=" text-center">
//             <a
//               href="#responsive-header"
//               className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4"
             
//             >
//               Home
//             </a>
//             <a
             
//               className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4"
             
//             >
//               About
//             </a>
//             <a
//               href="#responsive-header"
//               className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800"
              
//             >
//               Services
//             </a>
//           </div>
//           <div>
//             <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg text-base mr-4">
//               Contact us
//             </button>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Vesperr;

// import React, { useState } from "react";
// import first from '../Icons/first.png'; 
// import FLUTTER from '../Icons/FLUTTER.svg'; 

// function Vesperr() {
//   const [isNavCollapsed, setIsNavCollapsed] = useState(true);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const handleNavCollapse = () => {
//     setIsNavCollapsed(!isNavCollapsed);
//     setMobileMenuOpen(!isMobileMenuOpen); // Toggling mobile menu
//   };

//   const handleNavLinkClick = () => {
//     setMobileMenuOpen(false);
//   };

//   return (
//     <div className="container mx-auto"> 
//       <nav className="flex flex-wrap  justify-between bg-gray-100 py-4 px-6">
//         <div className="flex items-center flex-shrink-0">
//           <img className="h-8 w-auto" src={first} alt="Your Company" />
//           <span className="text-black ml-2 font-extrabold hidden lg:inline-block">S3 Skill Up</span>
//         </div>
//         <button
//           className="block lg:hidden border border-solid border-gray-600 rounded px-3 py-1 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-200"
//           onClick={handleNavCollapse}
//         >
//           <svg
//             className="fill-current h-3 w-3"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <title>Menu</title>
//             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//           </svg>
//         </button>
//         <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto lg:justify-center`}>
//           <div className="text-sm lg:flex-grow text-center lg:text-left">
//             <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4">
//               Home
//             </a>
//             <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4">
//               About
//             </a>
//             <a
//               className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800" >
//               Services
//             </a>
//           </div>
//           <div>
//             <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg text-base mr-4">
//               Contact us
//             </button>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Vesperr;


// import React, { useState } from "react";
// import first from '../Icons/first.png'; 
// import FLUTTER from '../Icons/FLUTTER.svg'; 

// function Vesperr() {
//   const [isNavCollapsed, setIsNavCollapsed] = useState(true);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const handleNavCollapse = () => {
//     setIsNavCollapsed(!isNavCollapsed);
//     setMobileMenuOpen(!isMobileMenuOpen); // Toggling mobile menu
//   };

//   const handleNavLinkClick = () => {
//     setMobileMenuOpen(false);
//   };

//   return (
//     <div className="container mx-auto"> 
//       <nav className="flex flex-wrap items-center justify-between bg-gray-100 py-4 px-6">
//         <div className="flex items-center flex-shrink-0">
//           <img className="h-8 w-auto" src={first} alt="Your Company" />
//           <span className="text-black ml-2 font-extrabold hidden lg:inline-block">S3 Skill Up</span>
//         </div>
//         <button
//           className="block lg:hidden border border-solid border-gray-600 rounded px-3 py-1 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-200"
//           onClick={handleNavCollapse}
//         >
//           <svg
//             className="fill-current h-3 w-3"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <title>Menu</title>
//             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//           </svg>
//         </button>
//         <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto lg:justify-center`}>
//           <div className="text-sm lg:flex-grow text-center lg:text-left">
//             <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4">
//               Home
//             </a>
//             <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4">
//               About
//             </a>
//             <a
//               className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800" >
//               Services
//             </a>
//           </div>
//         </div>
//         <div className="lg:flex lg:items-center">
//           <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg text-base mr-4">
//             Contact us
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Vesperr;

import React, { useState } from "react";
import first from '../Icons/first.png'; 
import FLUTTER from '../Icons/FLUTTER.svg'; 

function Vesperr() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navWidth, setNavWidth] = useState(150); // Initial width

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
    setMobileMenuOpen(!isMobileMenuOpen); // Toggling mobile menu
    // Toggle nav width between 150px and 650px
    setNavWidth(navWidth === 150 ? 650 : 150);
  };

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="container mx-auto"> 
      <nav className={`flex flex-wrap items-center justify-between bg-gray-100 py-4 px-6 ${isMobileMenuOpen ? `w-${navWidth}` : ''}`}>
        <div className="flex items-center flex-shrink-0">
          <img className="h-8 w-auto" src={first} alt="Your Company" />
          <span className="text-black ml-2 font-extrabold hidden lg:inline-block">S3 Skill Up</span>
        </div>
        <button
          className="block lg:hidden border border-solid border-gray-600 rounded px-3 py-1 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-200"
          onClick={handleNavCollapse}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto lg:justify-center`}>
          <div className="text-sm lg:flex-grow text-center lg:text-left">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4">
              Home
            </a>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4">
              About
            </a>
            <a
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800" >
              Services
            </a>
          </div>
        </div>
        <div className="lg:flex lg:items-center">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg text-base mr-4">
            Contact us
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Vesperr;
