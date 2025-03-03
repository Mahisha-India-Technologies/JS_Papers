import React from 'react';
import ReactTypingEffect from 'react-typing-effect'; // Named import for react-typing-effect
import './Goals2.css';

const Goals2 = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <p className="about-us-subtext">
          Achieving sustainability goals is more than an aspiration—it's a path toward creating a balanced, harmonious future. Our teams are dedicated to reducing environmental impact, fostering innovation, and ensuring a healthier planet for the well-being of all.
        </p>
        <h1 className="about-us-title">
          Sustainability is our{' '}
          <ReactTypingEffect
            text={['priority.', 'commitment.', 'responsibility.', 'vision.', 'purpose.']}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
            loop
          />
        </h1>
      </div>
    </div>
  );
};

export default Goals2;
