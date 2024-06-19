import './App.css';
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FAQ from './Component/FAQ';
import Whyus from './Component/whyus';
import Glimb from './Component/Glimb';
import GetStarted from './Component/GetStarted';
import Topbar from './Component/Topbar';
import Home from './Component/Home';
import AboutUs from'./Component/AboutUs';
import StudentSays from './Component/StudentSays';
import Footer from './Component/Footer';
import Founder from './Component/Founder';
import Contactus from './Component/Contactus';
import Viewall from './Component/Viewallglimb';
import Mentors from './Component/Mentors';
import PeopleSays from './Component/PeopleSays';
import Howwestarted from './Component/Howwestarted';
import Webdevelop from './Component/Webdevelop';
import Modules from './Component/CourseModules';
import Otherpopular from './Component/Otherpopular';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Whyus" element={<Whyus />} />
          <Route path="/Glimb" element={<Glimb />} />
          <Route path="/GetStarted" element={<GetStarted />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Founder" element={<Founder />} />
          <Route path="/StudentSays" element={<StudentSays />} />
          <Route path="/Contactus" element={<Contactus/>}></Route>
          <Route path="/Viewallglimb" element={<Viewall />} />
          <Route path="/PeopleSays" element={<PeopleSays/>}></Route>
          <Route path="/Mentors" element={<Mentors/>}></Route>
          <Route path="/Howwestarted" element={<Howwestarted/>}></Route>
          <Route path="/Webdevelop" element={<Webdevelop />} />
          <Route path="/CourseModules" element={<Modules />} />
          <Route path="/Otherpopular" element={<Otherpopular />} />
        </Routes>
        <Footer />
         
        
      </BrowserRouter>
    </div>
  );
}

export default App;
