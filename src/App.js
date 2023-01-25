import { Route } from "react-router";
import { Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import { PortfolioProvider } from "./context/PortfolioContext";

function App() {
  return (
    <div className="App">
      <PortfolioProvider>
        <Routes>
          <Route path="/*" element={<Navbar />} />
          <Route path="" element={<HeroSection />} />
          <Route path="About" element={<About />} />
          <Route path="Skill" element={<Skill />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Footer" element={<Footer />} />
        </Routes>
      </PortfolioProvider>
    </div>
  );
}

export default App;
