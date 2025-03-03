import React, { useEffect, useState } from "react";
import "./Quality1.css";

const Quality1 = () => {
  // Array for website names
  const qualityTopics = [
    'Sustainable Materials',
    'Recyclable Products',
    'Energy-Efficient Production',
    'Water-Saving Processes',
    'Low-Carbon Manufacturing',
    'Waste Reduction',
    'Eco-Friendly Coatings',
    'Biodegradable Solutions',
    'Sustainable Product Quality',
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
    <div className={`webdev-page-container-quality ${inView ? "animate" : ""}`}>
      <div className="webdev-content-section">
        <h1 className="webdev-title">Product Quality</h1>
        <p className="webdev-subtext">
        Our Product Quality is built on sustainability, innovation, and responsibility. By using high-quality materials, eco-friendly processes, and advanced technology, we ensure durability with minimal environmental impact. Partnering with us means choosing reliable, sustainable products that support a greener and healthier planet.        </p>
        <div className="webdev-button-group">
          <button className="webdev-special-btn" onClick={handleWhatsAppClick}>Contact Us</button>
        </div>
      </div>

      <div className="webdev-scrolling-text">
        &nbsp;
        {qualityTopics.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Quality1;
