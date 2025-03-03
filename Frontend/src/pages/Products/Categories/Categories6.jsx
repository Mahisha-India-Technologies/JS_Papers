import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/images/img90.png';
import '../../Sustain/Recycle/Recycle7.css';
import './Categories6.css';

const Categories6 = () => {
  const seoHeaderRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            seoHeaderRef.current.classList.add('visible');
            setHasAnimated(true);
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
          <h1>Premium Paperboard Solutions</h1>
          <hr />
          <p>
            Explore our diverse range of high-quality paperboard products, designed to meet various
            packaging and industrial needs. From durable Kraft boards to coated and uncoated duplex
            sheets, our solutions provide strength, sustainability, and versatility for different applications.
          </p>
        </div>
        <div className="seo-image">
          <img src={image1} alt="Paperboard Products" />
        </div>
      </div>
      <div className="seo-tags-container">
        {['KRAFT BOARD', 'CHIP BOARD', 'DUPLEX COATED', 'DUPLEX UNCOATED', 'MM BOARD', 'LAMINATED SHEET', 
          'POLY COATED SHEET', 'PACKAGING', 'PAPER INDUSTRY', 'SUSTAINABILITY', 'ECO-FRIENDLY', 'DURABILITY', 
          'HIGH QUALITY', 'INDUSTRIAL USE', 'CUSTOMIZATION', 'RECYCLABLE', 'VERSATILITY', 'STRENGTH', 'PRINTABILITY', 
          'ENVIRONMENTAL RESPONSIBILITY'].map((tag, index) => (
          <button key={index} className="seo-tag-button">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories6;