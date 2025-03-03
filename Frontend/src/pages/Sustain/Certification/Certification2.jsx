import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Certification2.css';

const Certification2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      easing: 'ease-in-out', // Animation easing
      once: false, // Animation occurs only once
      offset: 50, // Trigger offset
    });
  }, []);

  return (
    <div className="about-section-container">
      <div
        className="about-header-container"
        data-aos="fade-up" // Apply AOS animation
      >
        <div className="about-title-container">
          <h1 className="about-title">
            Commitment to Quality, Sustainability, and Compliance in the Recycled Product Industry
          </h1>
        </div>
        <div className="about-description-container">
          <p className="about-description">
            At Jaisakthi Papers, we uphold the highest standards of quality and environmental responsibility in the paper recycling industry. Our certifications, including FSC, PEFC, ISO 9001, ISO 14001, and more, ensure that our products and processes are aligned with global sustainability practices, quality benchmarks, and safety protocols. With our certified practices, we deliver paper solutions that are not only environmentally responsible but also meet the strictest quality and safety standards, driving success and sustainability in every step of production.
          </p>
        </div>
      </div>

      <div className="about-cards">
        <div className="about-card" data-aos="flip-left">
          <div className="about-icon achievement-icon"></div>
          <h2 className="card-title">Forest Stewardship Council (FSC) Certification</h2>
          <p className="card-description">
            Ensures that our product comes from responsibly managed forests, promoting reforestation, biodiversity preservation, and ethical forestry practices.
          </p>
        </div>

        <div className="about-card" data-aos="flip-right">
          <div className="about-icon startup-icon"></div>
          <h2 className="card-title">PEFC Certification</h2>
          <p className="card-description">
            Verifies our support for sustainable forestry, protection of wildlife habitats, and responsible forest resource management.
          </p>
        </div>

        <div className="about-card special-card" data-aos="zoom-in">
          <div className="about-icon motto-icon"></div>
          <h2 className="card-title">ISO 9001:2015 – Quality Management System</h2>
          <p className="card-description">
            Reflects our focus on delivering consistent, high-quality products through a robust quality management system and continual improvement.
          </p>
        </div>

        <div className="about-card" data-aos="fade-left">
          <div className="about-icon approach-icon"></div>
          <h2 className="card-title">ISO 14001:2015 – Environmental Management System</h2>
          <p className="card-description">
            Demonstrates our commitment to minimizing environmental impact by conserving energy, reducing emissions, and managing resources responsibly.
          </p>
        </div>

        <div className="about-card" data-aos="fade-right">
          <div className="about-icon achievement2-icon"></div>
          <h2 className="card-title">ISO 45001:2018 – Occupational Health and Safety</h2>
          <p className="card-description">
            Ensures a safe and healthy work environment by adhering to global occupational health and safety standards for employees' well-being.
          </p>
        </div>

        <div className="about-card special-card" data-aos="zoom-out">
          <div className="about-icon startup2-icon"></div>
          <h2 className="card-title">GreenPro Certification</h2>
          <p className="card-description">
            Verifies our products meet eco-friendly performance standards, promoting sustainability and contributing to environmental conservation.
          </p>
        </div>

        <div className="about-card" data-aos="fade-up">
          <div className="about-icon motto2-icon"></div>
          <h2 className="card-title">Bureau of Indian Standards (BIS)</h2>
          <p className="card-description">
            Confirms that our paper recycled products meet strict Indian quality and safety benchmarks, ensuring reliability and high performance.
          </p>
        </div>

        <div className="about-card" data-aos="fade-down">
          <div className="about-icon approach2-icon"></div>
          <h2 className="card-title">Carbon Neutral Initiatives</h2>
          <p className="card-description">
            Highlights our steps toward carbon neutrality by using renewable energy, minimizing greenhouse gas emissions, and contributing to a cleaner future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certification2;
