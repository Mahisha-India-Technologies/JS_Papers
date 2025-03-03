import React, { useEffect, useState } from "react";
import "./Goals1.css";

const Goals1 = () => {
  // Array for website names
  const sustainabilityGoalsTopics = [
    'Carbon neutrality in operations',
    'Renewable energy adoption',
    'Water and resource efficiency',
    'Circular economy practices',
    'Waste reduction through recycling',
    'Reforestation and biodiversity',
    'Sustainable product solutions',
    'Community partnerships for sustainability',
    'Energy efficiency in manufacturing',
];

  const handleQuoteClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:mahishaindiatechnologies@gmail.com";
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open('https://wa.me/918110818281', '_blank'); // Opens WhatsApp with the given number in a new tab
  };


  // State to trigger animations on page load
  const [inView, setInView] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    setInView(true); // Trigger animations immediately on mount
  }, []);

  return (
    <div className={`webdev-page-container3 ${inView ? "animate" : ""}`}>
      <div className="webdev-content-section">
        <h1 className="webdev-title">Sustainability Goals</h1>
        <p className="webdev-subtext">
        Our Sustainability Goals are strategically crafted to drive meaningful change in the recycling industry. By embracing eco-friendly innovations, renewable energy, and efficient resource management, we are committed to achieving long-term environmental, social, and economic sustainability. Partnering with us means contributing to a future of reduced carbon emissions, responsible production practices, and a cleaner, greener planet for generations to come.        
        </p>
        <div className="webdev-button-group">
          <button className="webdev-explore-btn" onClick={handleQuoteClick}>Explore More</button>
        </div>
      </div>

      <div className="webdev-scrolling-text">
        &nbsp;
        {sustainabilityGoalsTopics.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Goals1;
