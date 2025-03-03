import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { FaEnvelope, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'; // Include CSS styles
import ContactForm from '../ContactForm/ContactForm.jsx';
import image1 from '../../assets/images/img69.png';
import image2 from '../../assets/images/img72.png';
import image3 from '../../assets/images/img70.png';
import image4 from '../../assets/images/img71.png';
import image5 from '../../assets/images/img68.png';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleQuoteClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:sowdamss@gmail.com";
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open('https://wa.me/917094181144', '_blank'); // Opens WhatsApp with the given number in a new tab
  };

  return (
    <div className='footer-page'>
      <footer className="footer">
      <div className="footer-top">
        <h2>Innovating the Future of Paper Solutions</h2>
        <p>Join over 12,672 customers revolutionizing sustainability and excellence in the paper industry with us.</p>
        <div className="footer-buttons">
          <button className="footer-btn quote-btn" onClick={handleQuoteClick}>Get a Quote</button>
          <a href="/" onClick={handleOpenModal}>
            <button className="footer-btn reach-btn">Contact Us</button>
          </a>
        </div>
      </div>

      <div className="footer-middle">
      <div className="company-info">
  <h1 className="footer-logo">
    <span className="nexus-info" style={{ color: 'white', fontSize: '28px' }}>
      Jaisakthi Papers Private Limited
    </span>
  </h1>
  <p>
    We craft innovative paper solutions, aligning with your vision to promote sustainability and elevate your business in the evolving market.
  </p>
  <div className="social-icons">
    <a href="https://instagram.com" className="icon-circle1" target="_blank" rel="noopener noreferrer">
      <img src={image1} alt="Instagram" />
    </a>
    <a href="https://facebook.com" className="icon-circle2" target="_blank" rel="noopener noreferrer">
      <img src={image2} alt="Facebook" />
    </a>
    <a href="https://www.linkedin.com" className="icon-circle3" target="_blank" rel="noopener noreferrer">
      <img src={image3} alt="LinkedIn" />
    </a>
    <a href="https://wa.me/917094181144" onClick={handleWhatsAppClick} className="icon-circle4" target="_blank" rel="noopener noreferrer">
      <img src={image4} alt="WhatsApp" />
    </a>
    <a href="mailto:sowdamss@gmail.com" className="icon-circle5" target="_blank" rel="noopener noreferrer">
      <img src={image5} alt="Email" />
    </a>
</div>

</div>


  <div className="company-location">
    <div className='location-bar'>
    <h4>Our Location</h4>
    <p>
      <strong>Jaisakthi Papers Private Limited</strong><br />
      13B, Arunachalam Nagar,<br />
      Nalligoundanpalayam,<br />
      Erode, Tamil Nadu, India<br />
      PIN: 638 452<br />
      Contact: +91 7094181144
    </p>
    </div>
    
    
    <div className="map-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62566.44308317593!2d77.37027972007007!3d11.450832717779459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba93d6fc886bc21%3A0xdc21e5cecccbed79!2s13B%2C%20Arunachalam%20nagar%2C%20Nalligoundanpalayam%2C%20Tamil%20Nadu%20638452!3m2!1d11.4508267!2d77.4114539!5e0!3m2!1sen!2sin!4v1734669814684!5m2!1sen!2sin"
        width="100%" 
        height="250" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</div>


      {/* <div className="footer-bottom">
        <p>&copy; Jaisakthi Papers Private Limited | All rights reserved.</p>
      </div> */}

      <ContactForm isOpen={modalOpen} onClose={handleCloseModal} />
    </footer>
    <div className="footer-bottom">
        <p>&copy; Jaisakthi Papers Private Limited | All rights reserved.</p>
      </div>
    
    </div>
    
  );
};

export default Footer;
