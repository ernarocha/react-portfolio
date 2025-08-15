import React from 'react';

function About() {
  return (
    <>
      <section className="hero-section" id="about">
        <div className="hero container wide d-flex align-items-center">
          <div className="row w-100 gx-2">
            <div className="col-md-4 text-center">
              <div className="glassDiv">
                <div className="liquidGlassOverlay"></div>
              <img
                src="/images/ernaa.png"
                alt="Your Portrait"
                className="img-fluid hero-photo"
                />
              </div>
            </div>

            <div className="col-md-8">
              <div
                style={{display: 'flex', alignItems: 'center',gap: '12px', marginBottom: '1rem',}}
              >
                <p className="first-name fw-bold mb-0">Ernalene</p>
                <p className="last-name fw-bold mb-0">Rocha</p>
              </div>

              <div className="desc-block d-flex align-items-start">
                <div className="vert-line me-3"></div>
                <p className="description mb-0">
                  Hi! I'm currently a third-year BS Computer Science student
                  with a strong passion for software engineering. I aspire to
                  become a skilled software engineer who builds clean,
                  efficient, and user-friendly websites and applications. Welcome to
                  my portfolio where you can see some of my works and skills
                  and get in touch!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
