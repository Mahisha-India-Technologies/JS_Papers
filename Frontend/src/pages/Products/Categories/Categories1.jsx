import React, { useEffect, useState } from "react";
import "./Categories1.css";

const Categories1 = () => {
  // Array for website names
  const productCategories = [
    'Sustainable Kraft Board',
    'Eco-Friendly Chip Board',
    'Duplex Coated Boards',
    'MM Board Solutions',
    'Laminated Sheets',
    'Poly Coated Sheets',
    'Eco Packaging Solutions',
    'Sustainable Manufacturing Practices',
    'Custom Eco Packaging',
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
    <div className={`webdev-page-container-categories ${inView ? "animate" : ""}`}>
      <div className="webdev-content-section">
        <h1 className="webdev-title">Product Categories</h1>
        <p className="webdev-subtext">
        Our product categories emphasize sustainability through eco-friendly materials and innovative technologies. We prioritize responsible production and renewable resources to minimize environmental impact. Choose our products for a greener, more sustainable future.        </p>
        <div className="webdev-button-group">
          <button className="webdev-explore-btn" onClick={handleQuoteClick}>Explore More</button>
          <button className="webdev-special-btn" onClick={handleWhatsAppClick}>Contact Us</button>
        </div>
      </div>

      <div className="webdev-scrolling-text">
        &nbsp;
        {productCategories.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categories1;
