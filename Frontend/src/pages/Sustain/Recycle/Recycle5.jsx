import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/images/img40.png';
import image2 from '../../../assets/images/img38.png';
import image3 from '../../../assets/images/img52.png';
import './Recycle5.css';

const Recycle5 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Optional: stop observing after the animation runs once
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the component is in view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`unique-support-container ${isVisible ? 'visible' : ''}`}>
      <h1 className="unique-support-heading">
        Recognized for Our Commitment to Recycling and Sustainability
      </h1>

      <div className="unique-social-icons-container">
        <div className="unique-social-box">
          <img src={image1} alt="Sustainability Awards" className="unique-social-icon" />
          <div className='unique2-grid'>
            <p className="unique-social-platform">Sustainability</p>
            <p className="unique-social-info">
              Honored for Recycling Practices 2023
            </p>
          </div>
        </div>

        <div className="unique-social-box">
          <img src={image2} alt="Environmental Certification" className="unique-social-icon" />
          <div className='unique2-grid'>
            <p className="unique-social-platform">ISO Certification</p>
            <p className="unique-social-info">
              Recognized for Management Systems
            </p>
          </div>
        </div>

        <div className="unique-social-box">
          <img src={image3} alt="Community Impact" className="unique-social-icon" />
          <div className='unique2-grid'>
            <p className="unique-social-platform">Community Impact</p>
            <p className="unique-social-info">
              Empowering Through Recycling Initiatives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recycle5;
