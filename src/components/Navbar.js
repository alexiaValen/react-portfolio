import React from 'react';
import '../styles/Navbar.css';

const styles = {
  navbarStyle: {
    background: '#dfd3c3',
    justifyContent: 'flex-end',
  },
};

//JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">Home</a>
      <a href="https://github.com/alexiaValen?tab=repositories">Github</a>
      <a href="/projects">Projects</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}

export default Navbar;
