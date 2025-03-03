import React, { useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect'; // Named import for react-typing-effect
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Environment10.css';

const Environment10 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Ensure animations run only once
      offset: 50, // Trigger point for animation
    });
  }, []);

  return (
    <div className="about-us-container" data-aos="fade-up">
      <div className="about-us-content">
        <p className="about-us-subtext" data-aos="fade-right">
          Protecting our planet is not just a responsibility, it's a necessity. Our teams are dedicated to implementing sustainable practices and innovative solutions to create a greener, cleaner future for generations to come.
        </p>
        <h1 className="about-us-title" data-aos="fade-left">
          It's our{' '}
          <ReactTypingEffect
            text={['mission.', 'commitment.', 'responsibility.', 'passion.', 'goal.']}
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

export default Environment10;
