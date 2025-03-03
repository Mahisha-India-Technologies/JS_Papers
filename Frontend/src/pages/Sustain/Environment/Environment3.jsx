import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import image from '../../../assets/images/img9.png';
import './Environment3.css'; // Updated CSS file with new class names

const Environment3 = () => {
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
            Promoting a Greener Future with Sustainable Product Solutions
          </h1>
          <p
            className="custom-description-text"
            data-aos="fade-up" // AOS animation type for description
            data-aos-delay="200" // Add delay for staggered animation
          >
            The recycling industry is embracing sustainable practices to reduce its environmental impact and promote responsible resource management. 
            By using recycled materials, implementing energy-efficient production processes, and supporting reforestation initiatives, we ensure a greener future. 
            Our commitment to reducing waste, minimizing carbon emissions, and preserving biodiversity reflects our dedication to environmental stewardship. 

            From sourcing paper responsibly to promoting circular economies, we actively work toward a cleaner and more sustainable planet. 
            Together, we can balance industry growth with nature conservation, ensuring resources are protected for generations to come.
          </p>

          {/* Buttons */}
          <div className="custom-button-group" data-aos="fade-right" data-aos-delay="400">
            <button className="custom-primary-button">SUSTAINABLE DESIGN</button>
            <button className="custom-primary-button">ECO-FRIENDLY</button>
            <button className="custom-primary-button">LOW-IMPACT PRODUCTS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment3;
