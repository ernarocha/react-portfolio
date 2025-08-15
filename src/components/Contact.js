import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handles changes to inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' }); // reset form
  };

  return (
    <>
      <section id="contact">
        <div className="container wide">
          <h2 className="text-center mb-4">
            Contact <span className="white-text">Me</span>
          </h2>
          <h5 className="text-center mb-4">
            Got ideas or questions? Get in touch!</h5>
          <form
            id="contactForm"
            className="mx-auto"
            style={{ maxWidth: '600px' }} 
            onSubmit={handleSubmit} 
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name} //  Bind value
                onChange={handleChange} //  Handle changes
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email} 
                onChange={handleChange} 
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="concern" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="concern"
                name="message"
                rows="4"
                placeholder="Type your message here..."
                required
                value={formData.message} 
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary custom-text w-100"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;