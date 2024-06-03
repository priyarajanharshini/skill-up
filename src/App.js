import './App.css';
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Things from './Component/Things';
import Whyus from './Component/whyus';
import Glimb from "./Component/glimb";
import GetStarted from './Component/GetStarted';
import Topbar from './Component/Topbar';
import Home from './Component/Home';
import AboutUs from'./Component/AboutUs';
import StudentSays from './Component/StudentSays';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <BrowserRouter>
          
          <Routes>
          <Route path="/Things" element={<Things />}></Route>
          <Route path="/Whyus" element={<Whyus/>}></Route>
          <Route path="/Glimb" element={<Glimb />}></Route>
          <Route path="/GetStarted" element={<GetStarted />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
          <Route path="/StudentSays" element={<StudentSays/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;