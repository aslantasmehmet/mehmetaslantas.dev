
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <HeroSection/>
        <About/>
        <Skill/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
