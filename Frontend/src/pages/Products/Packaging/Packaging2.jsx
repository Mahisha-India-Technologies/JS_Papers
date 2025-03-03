import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import image from '../../../assets/images/img77.svg';
import './Packaging2.css'; // Updated CSS file with new class names

const Packaging2 = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (in milliseconds)
      once: false, // Ensure animation happens only once
      easing: 'ease-out', // Animation easing
    });
  }, []);

  return (
    <div className="custom-homepage-wrapper">
      <div className="custom-homepage-layout">
        {/* Left side with the images */}
        <div className="custom-images-section" data-aos="fade-right">
          <img src={image} alt="Mobile view" className="custom-mobile-view" />
        </div>

        {/* Right side with the text and buttons */}
        <div className="custom-text-section">
          <h1
            className="custom-heading-text"
            data-aos="fade-up" // AOS animation type for heading
          >
            The Role of Packaging in Modern Industries
          </h1>
          <p
            className="custom-description-text"
            data-aos="fade-up" // AOS animation type for description
            data-aos-delay="200" // Add delay for staggered animation
          >
            Packaging is more than just a container; it serves as a crucial element in branding, logistics, and product protection. In today's market, businesses need packaging solutions that provide durability, cost efficiency, and environmental sustainability while maintaining aesthetic appeal.

            Our company specializes in high-quality paperboard-based packaging materials, offering a variety of solutions customized for different industries. From rigid and industrial-grade packaging to lightweight and eco-friendly consumer packaging, we provide products that meet the unique demands of businesses across various sectors.
          </p>

          {/* Buttons */}
          <div className="custom-button-group" data-aos="fade-right" data-aos-delay="400">
            <button className="custom-primary-button">SUSTAINABLE PRODUCT</button>
            <button className="custom-primary-button">ECO-FRIENDLY</button>
            <button className="custom-primary-button">SAFE & SECURE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packaging2;
