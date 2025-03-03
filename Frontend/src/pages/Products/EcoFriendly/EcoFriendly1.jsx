import React, { useEffect, useState } from "react";
import "./EcoFriendly1.css";

const EcoFriendly1 = () => {
  // Array for website names
  const ecoFriendlyProducts = [
    'Sustainable Materials',
    'Renewable Resource-Based Products',
    'Energy-Efficient Production',
    'Water-Saving Products',
    'Low-Carbon Footprint Products',
    'Biodegradable Products',
    'Recycled Content Products',
    'Eco-Friendly Product Innovation',
    'Sustainable Consumer Goods',
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
    <div className={`webdev-page-container-eco ${inView ? "animate" : ""}`}>
      <div className="webdev-content-section">
        <h1 className="webdev-title">Eco-Friendly Products</h1>
        <p className="webdev-subtext">
        Our Eco-Friendly Products are designed with sustainability in mind, using renewable resources and environmentally conscious production methods. By choosing our products, you help reduce waste, lower carbon emissions, and contribute to a more sustainable future.        </p>
        <div className="webdev-button-group">
          <button className="webdev-explore-btn" onClick={handleQuoteClick}>Explore More</button>
        </div>
      </div>

      <div className="webdev-scrolling-text">
        &nbsp;
        {ecoFriendlyProducts.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default EcoFriendly1;
