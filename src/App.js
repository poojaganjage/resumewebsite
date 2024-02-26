import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/home/Home";
import Skills from "./components/pages/skills/Skills";
import Experiences from "./components/pages/experiences/Experiences";
import Educations from "./components/pages/educations/Educations";
import Portfolios from "./components/pages/portfolios/Portfolios";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/educations" element={<Educations />} />
          <Route path="/portfolios" element={<Portfolios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
