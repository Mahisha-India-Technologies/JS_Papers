import React, { useEffect, useState } from "react";
import "./Certification1.css";

const Certification1 = () => {
  // Array for website names
  const certificationTopics = [
    'FSC Certification',
    'PEFC Certification',
    'ISO 9001:2015',
    'ISO 14001:2015',
    'ISO 45001:2018',
    'GreenPro Certification',
    'BIS Certification',
    'Energy and Water Efficiency Recognition',
    'Carbon Neutrality Initiatives',
];


  const handleQuoteClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:sowdamss@gmail.com";
  };


  // State to trigger animations on page load
  const [inView, setInView] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    setInView(true); // Trigger animations immediately on mount
  }, []);

  return (
    <div className={`webdev-page-container2 ${inView ? "animate" : ""}`}>
      <div className="webdev-content-section">
        <h1 className="webdev-title">Certifications</h1>
        <p className="webdev-subtext">
        Our Certifications reflect our unwavering commitment to quality, sustainability, and responsible production practices in the recycling product industry. By adhering to globally recognized standards such as FSC®, ISO, and PEFC, we ensure that our processes meet the highest benchmarks for environmental stewardship, operational excellence, and product quality. Partnering with us means choosing certified products that support sustainable forestry, reduced environmental impact, and a greener future for generations to come.
        </p>
        <div className="webdev-button-group">
          <button className="webdev-explore-btn" onClick={handleQuoteClick}>Explore More</button>
        </div>
      </div>

      <div className="webdev-scrolling-text">
        &nbsp;
        {certificationTopics.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Certification1;
