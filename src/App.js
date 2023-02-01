import { Route } from "react-router";
import { Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from './pages/Home'
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import { PortfolioProvider } from "./context/PortfolioContext ";

function App() {
  return (
    <PortfolioProvider>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Navbar />} />
          <Route path="" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Skills" element={<Skill />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
    </PortfolioProvider>
  );
}

export default App;
