import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './About2.css';

const About2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Create a reference to the section

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      offset: 50, // Offset to trigger animations
      once: false, // Animation triggers only once
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8; // Adjust trigger point (80% of viewport)

      if (sectionTop < triggerPoint) {
        setIsVisible(true); // Make visible when section is in view
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`about-section-container ${isVisible ? 'active' : ''}`}
      ref={sectionRef}
    >
      <div className="about-header-container">
        <div className="about-title-container">
          <h1 className="about-title" data-aos="fade-up">
            Driving Sustainability and Innovation in Recycled Product Manufacturing.
          </h1>
        </div>
        <div className="about-description-container">
          <p className="about-description" data-aos="fade-up" data-aos-delay="200">
            At Jaisakthi Papers, we redefine excellence in the paper recycling industry by blending tradition with innovation. 
            Our unwavering commitment to quality, sustainability, and eco-conscious practices ensures that every sheets & board
            tells a story of care for our planet. Partner with us and be a part of a greener tomorrow.
          </p>
        </div>
      </div>
      <div className="about-cards">
        <div className="about-card" data-aos="fade-right">
          <div className="about-icon achievement-icon2"></div>
          <h2 className="card-title">Our Legacy</h2>
          <p className="card-description">
            With decades of expertise, we've established a legacy of delivering top-notch recycling solutions to a diverse clientele.
            Our journey is marked by innovation and a steadfast focus on environmental stewardship.
          </p>
        </div>
        <div className="about-card" data-aos="fade-up">
          <div className="about-icon startup-icon2"></div>
          <h2 className="card-title">Sustainable Practices</h2>
          <p className="card-description">
            Sustainability is at the heart of our operations. From sourcing raw materials responsibly to adopting
            cutting-edge technology, we strive to minimize our environmental impact and foster a circular economy.
          </p>
        </div>
        <div className="about-card special-card" data-aos="fade-left">
          <div className="about-icon motto-icon2"></div>
          <h2 className="card-title">Our Vision</h2>
          <p className="card-description">
            "Product with Purpose" is more than a motto; it is our mission. We envision a future where our paper recycled products 
            contribute to education, communication, and progress while preserving the Earth's resources.
          </p>
        </div>
        <div className="about-card" data-aos="fade-up" data-aos-delay="200">
          <div className="about-icon approach-icon2"></div>
          <h2 className="card-title">Innovative Approach</h2>
          <p className="card-description">
            By integrating innovation with craftsmanship, we create products that redefine the standards of quality and functionality.
            Every sheet reflects our dedication to pushing boundaries and exceeding expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;
