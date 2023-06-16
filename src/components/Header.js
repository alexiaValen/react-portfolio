import React from 'react';
import '../styles/Header.css';



const styles = {
  headerStyle: {
    background: '#dfd3c3',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

// JSX curly braces to evaluate the style object

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Alexia Valenzuela</h1>
    </header>
  );
}

export default Header;
