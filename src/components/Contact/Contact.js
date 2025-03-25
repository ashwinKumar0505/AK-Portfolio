import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./contact.css";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, message: "Please fill all fields." });
      return;
    }

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        "default_service", // Replace with your EmailJS Service ID
        "template_rvgmyvu", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "iYs3kzCkyTO7CbKCu" // Replace with your EmailJS Public Key
      );

      console.log("Email sent:", response);
      setStatus({ success: true, message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        success: false,
        message: "Something went wrong. Try again.",
      });
    }
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <div className="text-center">
        <h1 className="title">
          Let's <span>Connect</span>
        </h1>
        <p className="subtitle">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out
          through any platform below.
        </p>
      </div>

      <div className="grid">
        {/* Contact Information */}
        <div className="contact-card">
          <h2 className="card-title">Contact Information</h2>

          <div className="contact-item">
            <div className="icon">
              <FaPhone />
            </div>
            <div>
              <p className="contact-info phone-number">+91 9894616092</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon">
              <FaEnvelope />
            </div>
            <div>
              <p className="contact-info">ashwin.gps@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="contact-info">Bangalore, India</p>
            </div>
          </div>

          <h3 className="card-title">Connect with me</h3>
          <div className="contact-social-icons">
            <a
              href="https://www.linkedin.com/in/ashwin-kumar-bb53ba187/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ashwinKumar0505"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/jjashwinkumar/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-card">
          <h2 className="card-title">Send me a message</h2>
          {status && (
            <p className={status.success ? "success-message" : "error-message"}>
              {status.message}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default App;
