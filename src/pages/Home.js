import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skill from '../components/Skill'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <About/>
        <Skill/>
        <Projects/>
        <Contact/>
    </div>
  )
}
