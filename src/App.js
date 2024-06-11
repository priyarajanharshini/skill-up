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
import Founter from './Component/Founter';
import Contactus from './Component/Contactus';
import Viewall from './Component/Viewallglimb';

import Mentors from './Component/Mentors';
import PeopleSays from './Component/PeopleSays';
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
          <Route path="/Founter" element={<Founter />} />
          <Route path="/StudentSays" element={<StudentSays />} />
          <Route path="/Contactus" element={<Contactus/>}></Route>
          <Route path="/Viewallglimb" element={<Viewall />} />
          <Route path="/PeopleSays" element={<PeopleSays/>}></Route>
          <Route path="/Mentors" element={<Mentors/>}></Route>
        </Routes>
        <Footer />
         
        
      </BrowserRouter>
    </div>
  );
}

export default App;
