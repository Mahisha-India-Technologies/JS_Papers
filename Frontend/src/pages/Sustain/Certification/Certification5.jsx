import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Certification5.css';

const Certification5 = () => {
  useEffect(() => {
    AOS.init({ duration: 1800, easing: 'ease-in-out', once: false });
  }, []);

  return (
    <div className="page4-container-digital-unique">
      <div className="content-digital-unique">
        <h1 
          className="heading-digital-unique" 
          data-aos="fade-up" // AOS animation
        >
          Our Commitment to Quality and Sustainability
        </h1>
        <p 
          className="paragraph-digital-unique" 
          data-aos="fade-right" // AOS animation
        >
          At Jaisakthi Papers, these certifications are a testament to our relentless pursuit of excellence and environmental responsibility. They validate our efforts to produce high-quality paper products while minimizing our impact on the planet.
        </p>
        <p 
          className="paragraph-digital-unique" 
          data-aos="fade-left" // AOS animation
        >
          We believe that true success lies in creating value for our customers while safeguarding the environment for future generations. Through continuous innovation, sustainable practices, and adherence to global standards, we strive to reduce waste, conserve natural resources, and limit our carbon footprint.
        </p>
        <p 
          className="paragraph-digital-unique" 
          data-aos="fade-down" // AOS animation
        >
          By choosing our certified products, you are partnering with a company that values sustainability, quality, and the well-being of both people and the environment. Together, we can contribute to a greener future, where industry and nature thrive in harmony.
        </p>
      </div>
    </div>
  );
};

export default Certification5;
