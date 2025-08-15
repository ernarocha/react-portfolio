import React from 'react';

function App() {
  return (
    <>
        <section id="footer" className="text-center">
        <div className="container wide py-4">
            <p>© 2025 Ernalene Rocha. All rights reserved.</p>
            <div className="social-icons">
            <a href="http://github.com" target="_blank" aria-label="GitHub">
                <i className="fa-brands fa-github fa-lg"></i>
            </a>
            <a href="http://linkedin.com" target="_blank" aria-label="LinkedIn" className="ms-3">
                <i className="fa-brands fa-linkedin fa-lg"></i>
            </a>
            <a href="mailto:ernarocha30@gmail.com" aria-label="Email" className="ms-3">
                <i className="fa-solid fa-envelope fa-lg"></i>
            </a>
            </div>
        </div>
        </section>
    </>
  );
}

export default App;