import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

