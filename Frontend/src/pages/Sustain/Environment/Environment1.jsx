import React, { useEffect, useState } from "react";
import "./Environment1.css";

const Environment1 = () => {
  // Array for website names
  const environmentTopics = [
    'Sustainable Sourcing',
    'Advanced Recycling',
    'Energy Efficiency',
    'Water Conservation',
    'Reducing Carbon Footprint',
    'Circular Economy',
    'Minimizing Waste',
    'Eco-Friendly Innovations',
    'Community Engagement',
];

  const handleQuoteClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:sowdamss@gmail.com";
  };

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
    <div className={`webdev-page-container ${inView ? "animate" : ""}`}>
      <div className="webdev-content-section">
        <h1 className="webdev-title">Environmental Initiatives</h1>
        <p className="webdev-subtext">
        Our Environmental Initiatives are thoughtfully designed to redefine sustainability in the recycling industry. By prioritizing eco-friendly practices, innovative technologies, and renewable resources, we aim to create a lasting positive impact on the environment. Partnering with us means supporting a vision of responsible production, reduced carbon footprint, and a healthier planet for future generations.
        </p>
        <div className="webdev-button-group">
          <button className="webdev-explore-btn" onClick={handleQuoteClick}>Explore More</button>
          <button className="webdev-special-btn" onClick={handleWhatsAppClick}>Contact Us</button>
        </div>
      </div>

      <div className="webdev-scrolling-text">
        &nbsp;
        {environmentTopics.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Environment1;
