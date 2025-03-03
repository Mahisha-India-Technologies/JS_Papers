import React, { useState, useEffect, useRef } from 'react';
import './EcoFriendly3.css';
import emailIcon from '../../../assets/images/img65.png'; // Update the path to the icon as needed

const EcoFriendly3 = () => {
  // State to track the active step
  const [activeStep, setActiveStep] = useState(1);

  // Step descriptions
  // Step descriptions
const stepDescriptions = {
    1: "Research and develop waterproof & durable paper-based alternatives to plastic by selecting high-strength fibers and eco-friendly coatings. Focus on sustainability goals such as recyclability, biodegradability, and reduced plastic dependency.",
    2: "Engage your workforce, suppliers, and customers in adopting plastic-free solutions. Promote awareness, build partnerships with eco-conscious stakeholders, and highlight the environmental benefits of switching to paper-based alternatives.",
    3: "Implement advanced manufacturing processes to enhance durability and water resistance. Optimize resource efficiency, integrate renewable materials, and continuously innovate to improve performance while reducing environmental impact."
  };  

  // Function to handle step click
  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  // Refs for animated elements
  const emailIconRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  // Intersection Observer to trigger animations
  useEffect(() => {
    const options = {
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (emailIconRef.current) observer.observe(emailIconRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="email-marketing-container">
      <div className="email-marketing-right">
        <h2
          className="email-marketing-heading slide-top"
          ref={headingRef}
        >
          Waterproof & Durable Paper-Based Alternatives
        </h2>
        <div className="email-marketing-divider"></div>
        <p
          className="email-marketing-description slide-right"
          ref={descriptionRef}
        >
          At Jaisakthi Papers, we have achieved waterproof & durable paper-based alternatives to plastic.
Our eco-friendly solutions are 100% recyclable, biodegradable, and sustainable.
We use moisture-resistant coatings and high-strength fibers for enhanced durability.
Our innovative process eliminates single-use plastics while maintaining product strength.
We focus on minimizing waste and reducing resource consumption.
By leveraging renewable energy and eco-friendly materials, we ensure sustainability.
Our products cater to industries seeking green, high-performance packaging solutions.
We are committed to a future where innovation and environmental responsibility go hand in hand.
        </p>
        <div className="email-marketing-steps-container">
          <div
            className={`email-marketing-step ${activeStep === 1 ? 'active' : ''}`}
            onClick={() => handleStepClick(1)}
          >
            Step: 1
          </div>
          <div
            className={`email-marketing-step ${activeStep === 2 ? 'active' : ''}`}
            onClick={() => handleStepClick(2)}
          >
            Step: 2
          </div>
          <div
            className={`email-marketing-step ${activeStep === 3 ? 'active' : ''}`}
            onClick={() => handleStepClick(3)}
          >
            Step: 3
          </div>
        </div>
        <div className="email-marketing-step-description">
          {stepDescriptions[activeStep]}
        </div>
      </div>
      <div className="email-marketing-left">
        <img
          src={emailIcon}
          alt="Sustainability Icon"
          className="email-marketing-icon slide-left"
          ref={emailIconRef}
        />
      </div>
    </div>
  );
};

export default EcoFriendly3;
