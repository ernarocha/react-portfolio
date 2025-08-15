// src/App.js
import React from 'react';
import './styles.css'; // Your global CSS (if you have one)

// Import your components
import Header from './components/Header';
import Home from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
