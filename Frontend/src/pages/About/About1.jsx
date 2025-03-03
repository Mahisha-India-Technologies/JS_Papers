import React, { useEffect, useState } from "react";
import "./About1.css";

const About1 = () => {
  // Array for scrolling topics
  const aboutUsOptions = [
    'Our Story',
    'Our Mission',
    'Our Values',
    'Meet the Team',
    'Company History',
    'Careers',
    'Testimonials',
    'Press and Media',
    'Community Involvement',
    'Sustainability Efforts',
  ];

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open('https://wa.me/917094181144', '_blank'); // Opens WhatsApp with the given number in a new tab
  };

  // State to trigger animations on page load
  const [inView, setInView] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    setInView(true); // Trigger animations immediately on mount
  }, []);

  return (
    <div className={`webdev-page-container5 ${inView ? "animate" : ""}`}>
      <div className="webdev-content-section">
        <h1 className="webdev-title">About Us</h1>
        <p className="webdev-subtext">
          Welcome to our paper factory, where innovation meets sustainability. 
          For decades, we have been committed to producing high-quality paper recycled products while 
          prioritizing environmental responsibility. Our mission is to lead the industry 
          towards a greener future by integrating cutting-edge technology, sustainable practices, 
          and community-driven initiatives into every aspect of our operations.
        </p>
        <div className="webdev-button-group">
          <button className="webdev-explore-btn" onClick={handleWhatsAppClick}>
            Contact Us
          </button>
        </div>
      </div>

      <div className="webdev-scrolling-text">
        &nbsp;
        {aboutUsOptions.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default About1;
