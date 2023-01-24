
import './App.css';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <HeroSection/>
        <About/>
        <Skill/>
    </div>
  );
}

export default App;
