import React, { useEffect, useRef, useState } from 'react';
// import image1 from '../../../assets/images/img43.jpg';
// import image2 from '../../../assets/images/img34.jpg';
// import image3 from '../../../assets/images/img44.webp';
// import image4 from '../../../assets/images/img51.jpg';
// import image5 from '../../../assets/images/img55.jpg';
// import image6 from '../../../assets/images/img56.jpg';
import './Recycle8.css'; // For custom styles

const Recycle8 = () => {
  const pageRef = useRef(null);
  const [animationTriggered, setAnimationTriggered] = useState(false); // Track if animation has been triggered

  // Support and service options for the slider
  const aboutUsOptions = [
    'Efficient Paper Recycling',
    'Sustainable Production',
    'Customizable Products',
    'On-Time Delivery',
    'Eco-Friendly Practices',
    'Client-Centric Approach',
    'Innovation in Recycling',
    'Quality Assurance',
    'Global Standards',
    'Partnership for Sustainability',
  ];

  // Join the options with a gap for better readability
  const slidingText = aboutUsOptions.join(' ✦ ');

  useEffect(() => {
    const handleScroll = () => {
      if (animationTriggered) return; // Prevent re-triggering

      const pageElement = pageRef.current;
      const rect = pageElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
        pageElement.classList.add('animate');
        setAnimationTriggered(true); // Mark animation as triggered
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, [animationTriggered]); // Dependency ensures that the scroll listener doesn't trigger again

  return (
    <div className="page-container" ref={pageRef}>
      <div className="hero-section">
        <h1>Supporting Clients with Excellence and Sustainability</h1>
        <p>
          At our paper based recycled products manufacturing factory, we are committed to helping our clients achieve their goals while staying aligned 
          with eco-friendly practices. Whether you need high-quality recycled products, sustainable packaging solutions, 
          or innovative product customization, our expert team ensures timely delivery and unmatched quality. 
          Together, we strive to create sustainable partnerships that support both your success and the environment.
        </p>
      </div>

      {/* <div className="image-grid">
        <div className="grid-item"><img src={image1} alt="Sustainable Production 1" style={{height: '250px'}}/></div>
        <div className="grid-item"><img src={image2} alt="Sustainable Production 2" style={{height: '300px'}}/></div>
        <div className="grid-item"><img src={image3} alt="Sustainable Production 3" style={{height: '350px'}}/></div>
        <div className="grid-item"><img src={image4} alt="Sustainable Production 4" style={{height: '250px'}}/></div>
        <div className="grid-item"><img src={image5} alt="Sustainable Production 5" style={{height: '300px'}}/></div>
        <div className="grid-item"><img src={image6} alt="Sustainable Production 6" style={{height: '350px'}}/></div>
      </div> */}

      <div className="footer-slider">
        {/* Slider Text */}
        <div className="sliding">
          {/* Duplicate content to ensure continuous scrolling */}
          <p>{slidingText} ✦ {slidingText}</p>
        </div>
      </div>
    </div>
  );
}

export default Recycle8;
