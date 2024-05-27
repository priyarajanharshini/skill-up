// import logo from './logo.svg';
// import './App.css';
// import 'tailwindcss/tailwind.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import 'tailwindcss/tailwind.css';
import Hii from './whyus';
import Glimb from "./Component/glimb";
function App(){
  return(
    <>
    <Hii/>
    <Glimb/>
    </>
  )
}
export default App;