import React, { useState, useEffect, useRef } from 'react';
import './Goals8.css';
import emailIcon from '../../../assets/images/img65.png'; // Update the path to the icon as needed

const Goals8 = () => {
  // State to track the active step
  const [activeStep, setActiveStep] = useState(1);

  // Step descriptions
  const stepDescriptions = {
    1: 'Identify and prioritize the sustainability goals for your paper based recycling product industry, such as reducing water consumption, minimizing waste, and using eco-friendly materials. Understand the environmental impact of your operations and the expectations of stakeholders.',
    2: 'Engage your workforce, suppliers, and customers in your sustainability initiatives. Provide incentives for participation, such as recognition programs, partnerships with eco-conscious suppliers, and sharing benefits of using sustainably produced recycled products.',
    3: 'Implement actionable strategies like switching to renewable energy, adopting recycling programs, and optimizing processes for energy efficiency. Monitor progress regularly, set measurable targets, and communicate the achievements to inspire trust and commitment.'
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
      <div className="email-marketing-left">
        <img
          src={emailIcon}
          alt="Sustainability Icon"
          className="email-marketing-icon slide-left"
          ref={emailIconRef}
        />
      </div>
      <div className="email-marketing-right">
        <h2
          className="email-marketing-heading slide-top"
          ref={headingRef}
        >
          Our key Sustainability Goals
        </h2>
        <div className="email-marketing-divider"></div>
        <p
          className="email-marketing-description slide-right"
          ref={descriptionRef}
        >
          Achieving sustainability in the paper based recycling industry is not just a goal; it's a necessity for
          a greener planet. With our focus on eco-friendly practices, we aim to minimize
          environmental impact while maximizing operational efficiency. From reducing water
          consumption to optimizing waste recycling, our sustainability strategy encompasses
          every aspect of production. We are committed to using renewable energy sources,
          eco-friendly raw materials, and innovative technology to redefine the way product
          is manufactured. Together, we can create a future where economic growth and
          environmental stewardship go hand in hand.
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
    </div>
  );
};

export default Goals8;
