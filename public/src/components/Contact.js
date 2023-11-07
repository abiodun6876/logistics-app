import React, { useState } from "react";
import Header from './Header';
import Nav from  './Nav';
import Banner from  './banner';
import Footer from "./Footer";

import './Contact.css'; // Import the CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can add your logic here)
  };

  return (
    <div>
      <Header />
      <Nav />
      <Banner />

      {/* Contact Information or Form */}
      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us using the following information:</p>
          <address>
            <p>Address: Gwarinpa, Abuja,Nigeria</p>
            <p>Email: peakreach@gmail.com</p>
            <p>Phone: 08128224769, 07042744334</p>
          </address>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
