import './App.css';
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Things from './Components/Things';
import Hii from './whyus';
import Glimb from "./Component/glimb";
import GetStarted from "./Component/GetStarted";
import Topbar from './Component/Topbar';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <BrowserRouter>

        <Routes>
          <Route path="/Things" element={<Things />}></Route>
          <Route path="/Hii" element={<Hii/>}></Route>
          <Route path="/Glimb" element={<Glimb />}></Route>
          <Route path="/GetStarted" element={<GetStarted />}></Route>
          <Route path="/Home" element={<Home />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;