import React, { useState, useCallback, useRef } from 'react';

function Projects() {
  const [bgColor, setBgColor] = useState("#f8f9fa");
  //const sectionRef = useRef(null);

const randomizeContainerColor = (e) => {
  // Prevent changing background if clicking inside a modal or on the backdrop
  if (
    e.target.closest('.modal') || // click inside modal content
    e.target.classList.contains('modal-backdrop') || // click on backdrop
    e.target.closest('button, a, input, textarea') ||
    e.target.classList.contains('projects-title')
  ) {
    return;
  }

  const randomHue = Math.floor(Math.random() * 360);
  setBgColor(`hsl(${randomHue}, 70%, 85%)`);
};


  return (
    <>
    <section
      id="projects"
      style={{ backgroundColor: bgColor, transition: 'background-color 0.4s ease' }}
    >
      <h2 className="project-text-center mb-5">
        <span className="pink-text">Past &</span>{' '}
        <span className="white-text">Future Projects</span>
      </h2>
      <div className="container wide"style={{backgroundColor: bgColor}} onClick={randomizeContainerColor}>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <img src="/images/allocoin-project.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5
                  className="card-title project-title"
                  //onClick={handleProjectTitleClick}
                  data-bs-target="#project1Modal"
                >
                  AlloCoin
                </h5>
                <p className="card-text">
                  A budgeting and expense-tracking app that helps users manage budgets, monitor spending,
                  and gain insights to control their finances and save for future goals, all designed for busy lifestyles.
                </p>
                <button
                  className="btn btn-primary custom-text"
                  data-bs-toggle="modal"
                  data-bs-target="#project1Modal"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <img src="/images/coffe-project.jpg" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5
                  className="card-title project-title"
                  //onClick={handleProjectTitleClick}
                  data-bs-target="#project2Modal"
                >
                  Cafe & Co.
                </h5>
                <p className="card-text">
                  Cafe & Co. is a cozy online shop offering premium, sustainably sourced coffee beans,
                  artisanal blends, and brewing essentials for both casual drinkers and coffee enthusiasts.
                </p>
                <button
                  className="btn btn-primary custom-text"
                  data-bs-toggle="modal"
                  data-bs-target="#project2Modal"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <img src="/images/flower-project.jpg" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5
                  className="card-title project-title"
                  //onClick={handleProjectTitleClick}
                  data-bs-target="#project3Modal"
                >
                  Floral Atelier
                </h5>
                <p className="card-text">
                  A flower shop website where users can browse and purchase flowers, view prices,
                  and have orders delivered, even to customers outside their local area.
                </p>
                <button
                  className="btn btn-primary custom-text"
                  data-bs-toggle="modal"
                  data-bs-target="#project3Modal"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
     
      {/* Modals - Make sure Bootstrap CSS & JS are properly loaded in your project */}
      <div
        className="modal fade"
        id="project1Modal"
        tabIndex="-1"
        aria-labelledby="project1ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="project1ModalLabel">AlloCoin</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              An app focused on budgeting and tracking expenses. It allows users to create and manage budgets, track expenses,
              and get insights on spending habits. Designed for busy lifestyles, empowering control over finances and savings.
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="project2Modal"
        tabIndex="-1"
        aria-hidden="true"
        
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cafe & Co.</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Cafe & Co. offers premium, sustainably sourced coffee beans, artisanal blends, and brewing essentials.
              Perfect for casual drinkers and coffee enthusiasts alike.
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="project3Modal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Floral Atelier</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              A flower shop website allowing users to browse and purchase flowers, view prices,
              and have orders delivered locally or to other areas.
            </div>
          </div>
        </div>
      </div>

      </>
  );
}

export default Projects;