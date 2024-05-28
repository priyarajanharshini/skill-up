import logo from './logo.svg';
import './App.css';
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Things from './Components/Things';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Things />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// export default App;

import React from "react";
import 'tailwindcss/tailwind.css';
import Hii from './whyus';
import Glimb from "./Component/glimb";
import GetStarted from './component/GetStarted'
function App(){
  return(
    <>
    <Hii/>
    <Glimb/>
    <GetStarted/>
    </>
  )
}
 export default App;