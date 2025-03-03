import React, { useEffect, useState } from "react";
import "./Location1.css";

const Location1 = () => {
  // Array for scrolling topics
  const locationPageOptions = [
    'About Us Here',
    'Local History',
    'Community Impact',
    'Sustainability Efforts',
    'Local Partnerships',
    'Environmental Initiatives',
    'Events and Activities',
    'Our Connection',
    'Visit Us',
    'Supporting the Area',
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
    <div className={`webdev-page-container6 ${inView ? "animate" : ""}`}>
      <div className="webdev-content-section">
        <h1 className="webdev-title">Our Location</h1>
        <p className="webdev-subtext">
  Welcome to our Jaisakthi Papers, proudly located in Gobichettipalayam. Nestled in the heart of this vibrant community, 
  we take pride in blending tradition with innovation to create high-quality paper based recycled products. Our connection to 
  Gobichettipalayam's rich heritage inspires us to adopt sustainable practices that reflect the area's natural beauty 
  and ecological significance. Join us in shaping a greener future as we continue to serve  and beyond Gobichettipalayam
  with dedication, excellence, and care for the environment.
</p>

        <div className="webdev-button-group">
          <button className="webdev-explore-btn" onClick={handleWhatsAppClick}>
            Contact Us
          </button>
        </div>
      </div>

      <div className="webdev-scrolling-text">
        &nbsp;
        {locationPageOptions.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Location1;
