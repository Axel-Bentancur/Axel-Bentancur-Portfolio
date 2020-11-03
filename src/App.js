import React from 'react';
import './App.css';

import HomePage from './Components/Home/HomePage';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div>
      <HomePage />
      <About />
      <Skills /> 
      <Projects />
    </div>
  );
}

export default App;
