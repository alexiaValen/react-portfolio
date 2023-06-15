import React from 'react';
import '../styles/Navbar.css';

const styles = {
  navbarStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};

//JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">Home</a>
    </nav>
  );
}

export default Navbar;
