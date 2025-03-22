import React from 'react';

const Header = () => {
  return (

    <div>
    <header style={styles.header}>
      <h1 style={styles.title}>Lane Mapping app</h1>
      <nav style={styles.nav}>
        <a href="/" style={styles.link}>Home</a>
      </nav>
    </header>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    textAlign: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Centers content
    alignItems: 'center',
    position: 'fixed', // Keeps it in place
    top: 0,  // Sticks to the top
    left: 0,
    right: 0,
    width: '100%', // Full width
    zIndex: 1000,

  },
  title: {
    color: 'white',
    fontSize: '2.5rem', // Slightly larger font size
    margin: '0',
    fontFamily: "'Roboto', sans-serif", // Modern font
    fontWeight: 'bold', // Bold for emphasis
  },
  nav: {
    marginTop: '10px',
  },
  link: {
    color: 'white',
    margin: '0 10px',
    textDecoration: 'none',
    fontSize: '1.1rem', // Slightly larger font size
    fontFamily: "'Open Sans', sans-serif", // Clean and readable font
    fontWeight: '500', // Medium weight for better visibility
    transition: 'color 0.3s', // Smooth hover effect
  },
  linkHover: {
    color: '#61dafb', // Highlight color on hover
  },
};

export default Header;