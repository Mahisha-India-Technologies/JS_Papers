import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/images/img66.png';
import './Recycle7.css';

const Recycle7 = () => {
  const seoHeaderRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if the animation has occurred

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            seoHeaderRef.current.classList.add('visible');
            setHasAnimated(true); // Set to true to prevent future animations
          }
        });
      },
      { threshold: 0.1 }
    );

    if (seoHeaderRef.current) {
      observer.observe(seoHeaderRef.current);
    }

    return () => {
      if (seoHeaderRef.current) {
        observer.unobserve(seoHeaderRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="seo-page9-container">
      <div className="seo-flex-row">
        <div className="seo-header" ref={seoHeaderRef}>
          <h1>Professional Recycling Services</h1>
          <hr />
          <p>
            Transform waste into resources with our professional recycling services. We focus on reducing 
            environmental impact through sustainable practices, efficient resource recovery, and innovative 
            recycling techniques. Let our team help you contribute to a greener future by adopting eco-friendly 
            solutions and achieving your sustainability goals.
          </p>
        </div>
        <div className="seo-image">
          <img src={image1} alt="Recycling Illustration" />
        </div>
      </div>
      <div className="seo-tags-container">
        {['RECYCLING', 'SUSTAINABILITY', 'INNOVATION', 'ECO-FRIENDLY', 'RESOURCE MANAGEMENT', 'SUPPORT', 
          'RENEWABLES', 'ENVIRONMENT', 'WASTE MANAGEMENT', 'PAPER RECYCLING', 'GREEN SOLUTIONS', 
          'ZERO WASTE', 'ENERGY SAVING', 'CIRCULAR ECONOMY', 'ENVIRONMENTAL IMPACT', 'REUSE', 'REDUCE', 
          'RECYCLE', 'COMPOSTING', 'BIODIVERSITY'].map((tag, index) => (
          <button key={index} className="seo-tag-button">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Recycle7;
