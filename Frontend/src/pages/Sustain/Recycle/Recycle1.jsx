import React, { useEffect, useState } from "react";
import "./Recycle1.css";

const Recycle1 = () => {
  // Array for website names
  const recyclingGoalsTopics = [
    'Material recovery',
    'Circular economy waste reduction',
    'Increase recycling rates',
    'Innovative waste management',
    'Minimize landfill waste',
    'Eco-friendly recycled products',
    'Closed-loop recycling',
    'Community recycling education',
    'Improve recycling efficiency',
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
    <div className={`webdev-page-container4 ${inView ? "animate" : ""}`}>
      <div className="webdev-content-section">
        <h1 className="webdev-title">Recycling Programs</h1>
        <p className="webdev-subtext">
        Our Recycling Goals are strategically designed to revolutionize waste management in the recycling industry. By focusing on advanced recycling technologies, resource recovery, and circular economy principles, we are dedicated to minimizing waste and maximizing resource efficiency. Partnering with us means supporting initiatives that promote the reuse of materials, reduce landfill contributions, and foster a sustainable future built on innovative recycling solutions and responsible production practices. 
        </p>
        <div className="webdev-button-group">
          <button className="webdev-explore-btn" onClick={handleWhatsAppClick}>Explore More</button>
        </div>
      </div>

      <div className="webdev-scrolling-text">
        &nbsp;
        {recyclingGoalsTopics.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Recycle1;
