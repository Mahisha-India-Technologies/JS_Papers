import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS for sending emails
import image from '../../assets/images/img59.png';
import './ContactForm.css'; // Include your CSS styles

const ContactForm = ({ isOpen, onClose }) => {
  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValid, setFormValid] = useState(true);
  const [loading, setLoading] = useState(false); // State for loading indication

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, company, subject, message } = formData;

    if (name && email && phone && company && subject && message) {
      setLoading(true); // Show loading state
      try {
        await emailjs.send(
          'service_rbz4jh8', // Replace with your EmailJS Service ID
          'template_2wszx6k', // Replace with your EmailJS Template ID
          {
            name,
            email,
            phone,
            company,
            subject,
            message,
          },
          'GdsdezsTMTZm0luTi' // Replace with your EmailJS Public Key
        );

        setFormSubmitted(true);
      } catch (error) {
        console.error('Email sending failed:', error);
        alert('Failed to send your message. Please try again later.');
      }
      setLoading(false);
    } else {
      setFormValid(false);
    }
  };

  // Close modal and reset form
  const handleClose = () => {
    setFormData(initialFormState);
    setFormSubmitted(false);
    setFormValid(true);
    setLoading(false);
    onClose();
  };

  // Close modal on outside click
  // const handleOutsideClick = (e) => {
  //   if (e.target.classList.contains('modal-container')) {
  //     handleClose();
  //   }
  // };

  return (
    <div className={`modal-container ${isOpen ? 'show' : ''}`}>
      <div className="modal-content">
      <button className="close-btn-top-right" onClick={handleClose}>✖</button>
        {!formSubmitted ? (
          <>
            <h2 className="modal-title">Get in Touch</h2>
            <p className="modal-description">
              At <strong>Jaisakthi Papers</strong>, we specialize in delivering sustainable, high-quality recycled paper products and innovative packaging solutions. Fill out the form below to reach out to our expert team!
            </p>
            {!formValid && <p className="error-message">Please fill out all required fields.</p>}
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name<span className="required-star">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email<span className="required-star">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject<span className="required-star">*</span></label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Enter the subject of your inquiry"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message<span className="required-star">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Describe your requirements or ask your questions here"
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="submit-btn" disabled={loading} style={{ marginRight: '15px' }}>
                  {loading ? 'Sending...' : 'Submit'}
                </button>
                <button type="button" className="close-btn" onClick={handleClose}>Close</button>
              </div>
            </form>
          </>
        ) : (
          <div className="success-message">
            <img src={image} alt="Success" className="success-image" style={{ width: '60px', height: '60px', marginBottom: '10px' }} />
            <p className="success-text">Thank you for contacting Jaisakthi Papers!<br />Our team will respond to your query shortly.</p>
            <button className="close-btn2" onClick={handleClose} style={{ marginTop: '20px' }}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
