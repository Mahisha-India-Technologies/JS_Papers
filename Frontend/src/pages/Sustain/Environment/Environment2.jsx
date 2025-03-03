import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import image1 from '../../../assets/images/img12.svg';
import image2 from '../../../assets/images/img15.svg';
import image3 from '../../../assets/images/img13.svg';
import image4 from '../../../assets/images/img14.svg';
import './Environment2.css';

const Environment2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      offset: 50, // Offset to trigger animations
      once: false, // Animation triggers only once
    });
  }, []);

  return (
    <div className="design-page-container">
      <div className="design-page-content">
        {/* Title Section */}
        <h1 
          className="design-page-title" 
          data-aos="fade-up"
        >
          Our Environmental Initiatives
        </h1>
        <p 
          className="design-page-subtext" 
          data-aos="fade-up" 
          data-aos-delay="200" // Adds delay to the animation
        >
          At Jaisakthi Papers, we are dedicated to fostering a sustainable future through innovative environmental initiatives. From responsible sourcing and recycling to energy efficiency and community engagement, our efforts are aimed at minimizing our ecological footprint while creating a positive impact on the planet.
        </p>

        {/* Cards Section */}
        <div className="design-service-cards">
          {/* Card 1 */}
          <div 
            className="design-service-card" 
            data-aos="fade-left"
          >
            <img 
              src={image1} 
              alt="Sustainable Sourcing" 
              className="service-icon"
            />
            <div className="service-info">
              <h3 className="service-title">Sustainable Sourcing</h3>
              <p className="service-description">
                We procure raw materials from certified sustainable forests and incorporate recycled fibers into our production processes.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className="design-service-card" 
            data-aos="fade-right"
          >
            <img 
              src={image2} 
              alt="Energy Efficiency" 
              className="service-icon"
            />
            <div className="service-info">
              <h3 className="service-title">Energy Efficiency Role</h3>
              <p className="service-description">
                Our facilities use renewable and advanced technologies to optimize energy consumption and reduce such emissions.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            className="design-service-card" 
            data-aos="fade-left"
            data-aos-delay="200" // Adds delay for staggered animations
          >
            <img 
              src={image3} 
              alt="Water Conservation" 
              className="service-icon"
            />
            <div className="service-info">
              <h3 className="service-title">Water Conservation</h3>
              <p className="service-description">
                We implement closed-loop systems to recycle water, ensuring optimal use and reducing waste efficiency with sustainability.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div 
            className="design-service-card" 
            data-aos="fade-right"
            data-aos-delay="400" // Adds more delay
          >
            <img 
              src={image4} 
              alt="Community Engagement" 
              className="service-icon"
            />
            <div className="service-info">
              <h3 className="service-title">Community Engagement</h3>
              <p className="service-description">
                We collaborate with local communities and organizations to promote environmental awareness and reforestation projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment2;
