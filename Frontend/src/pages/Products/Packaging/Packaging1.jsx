import React, { useEffect, useState } from "react";
import "./Packaging1.css";

const Packaging1 = () => {
  // Array for website names
  const packagingTopics = [
    'Sustainable Packaging',
    'Recycling in Packaging',
    'Energy-Efficient Packaging',
    'Water-Saving Packaging',
    'Low-Carbon Packaging',
    'Circular Packaging Waste',
    'Biodegradable Packaging',
    'Eco Packaging Innovation',
    'Sustainable Consumer Choices',
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
    <div className={`webdev-page-container-packaging ${inView ? "animate" : ""}`}>
      <div className="webdev-content-section">
        <h1 className="webdev-title">Packaging Solutions</h1>
        <p className="webdev-subtext">
        Our Packaging Solutions focus on sustainability through eco-friendly materials, recycling, and energy-efficient production. Partnering with us means reducing waste, lowering carbon footprints, and supporting a greener future.
        </p>
        <div className="webdev-button-group">
          <button className="webdev-explore-btn" onClick={handleQuoteClick}>Explore More</button>
        </div>
      </div>

      <div className="webdev-scrolling-text">
        &nbsp;
        {packagingTopics.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Packaging1;
