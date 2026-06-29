import React, { useState, useEffect } from 'react';
import { FiPhone, FiMapPin, FiMail, FiClock } from 'react-icons/fi';
import { getBusinessInfo } from '../api/api';
import '../styles/contact.css';

const Contact = () => {
  const [businessInfo, setBusinessInfo] = useState(null);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchBusinessInfo();
  }, []);

  const fetchBusinessInfo = async () => {
    try {
      const response = await getBusinessInfo();
      setBusinessInfo(response.data.data);
    } catch (error) {
      console.error('Error fetching business info:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setMessage('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! Reach out to us for any queries.</p>

          {businessInfo && (
            <div className="info-cards">
              <div className="info-card">
                <FiPhone className="icon" />
                <h3>Phone</h3>
                <p>{businessInfo.phone}</p>
              </div>
              <div className="info-card">
                <FiMapPin className="icon" />
                <h3>Address</h3>
                <p>{businessInfo.address}</p>
              </div>
              <div className="info-card">
                <FiMail className="icon" />
                <h3>Email</h3>
                <p>{businessInfo.email}</p>
              </div>
              <div className="info-card">
                <FiClock className="icon" />
                <h3>Hours</h3>
                <p>Mon - Fri: 10 AM - 6 PM<br />Sat - Sun: 12 PM - 5 PM</p>
              </div>
            </div>
          )}
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your email" required />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Subject" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="5"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

            {submitted && (
              <div className="success-message">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;