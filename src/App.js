import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "green";

  return (
    <>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Education color={color} />
      <Projects color={color} />
      <Experience color={color} />
      <Skills color={color} />
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;
