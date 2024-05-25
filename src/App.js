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

export default App;
