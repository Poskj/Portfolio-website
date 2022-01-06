import React from 'react';

import './App.css';
import TopBar from "./topbar/TopBar"
import Intro from './components/intro/Intro';
import Preface from './components/preface/Preface';
import Vision from './components/vision/Vision';
import About from './components/about/About';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Outro from './components/outro/Outro';
import {Link} from 'react-scroll';



const App = () => {
  return (
    
    
  <div className='app'>
    
     <TopBar/>
     <section id="intro">
     <Intro/>
     </section>

     <section id="about">
     <About/>
     </section>

     <section id="preface">
     <Preface/>
     </section>
 
     <section id="attitude">
     <Vision/>
     </section>

     <section id="education">
     <Education/>
     </section>

     <section id="experience">
     <Experience/>
     </section>

     <section id="skill">
     <Skills/>
     </section>

     <section >
     <Outro/>
     </section>
      
    </div>
    
    );
};

export default App;
