// src/components/Header.js
import React, { useState, useEffect, useRef } from 'react';
//import './styles.css'; // adjust path if needed

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);

  // Close when clicking/touching outside or pressing Escape
  useEffect(() => {
    function handleOutside(e) {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    function handleKey(e) {
      if (e.key === 'Escape') setMenuOpen(false);
    }

    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [menuOpen]);

  // Focus first link when menu opens
  useEffect(() => {
    if (menuOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [menuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <nav className="w-100">
        <div className="d-flex justify-content-between align-items-center w-100">
          <p className="title mb-0">Portfolio</p>

          <div className="links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="right">
            <div className="desktop-links">
              <a href="http://github.com/ernarocha" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
                <span>Github</span>
              </a>
              <a href="https://www.linkedin.com/in/ernalene-rocha-828442320/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-square-linkedin"></i>
                <span>Linkedin</span>
              </a>
              <a href="mailto:ernarocha30@gmail.com">
                <i className="fa-solid fa-envelope"></i>
                <span>Email</span>
              </a>
            </div>

            {/* Hamburger Menu */}
            <div
              className={`hamburger-menu ${menuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              ref={menuRef}
            >
              <div className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="dropdown-menu">
                <a
                  href="https://github.com/ernarocha"
                  target="_blank"
                  rel="noreferrer"
                  ref={firstLinkRef}
                  onClick={handleLinkClick}
                >
                  <i className="fa-brands fa-github"></i>
                  <span>Github</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ernalene-rocha-828442320/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleLinkClick}
                >
                  <i className="fa-brands fa-square-linkedin"></i>
                  <span>Linkedin</span>
                </a>
                <a
                  href="mailto:ernarocha30@gmail.com"
                  onClick={handleLinkClick}
                >
                  <i className="fa-solid fa-envelope"></i>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
