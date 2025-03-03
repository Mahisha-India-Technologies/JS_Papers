import React, { useEffect, useRef } from 'react';
import image1 from '../../../assets/images/img67.jpeg';
import './Recycle2.css';

function Recycle2() {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const headingPosition = headingRef.current.offsetTop;
      const descriptionPosition = descriptionRef.current.offsetTop;
      const imagePosition = imageRef.current.offsetTop;

      if (scrollPosition > headingPosition + 100) {
        headingRef.current.classList.add('slide-in-left');
      }
      if (scrollPosition > descriptionPosition + 100) {
        descriptionRef.current.classList.add('slide-in-bottom');
      }
      if (scrollPosition > imagePosition + 100) {
        imageRef.current.classList.add('slide-in-right');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:sowdamss@gmail.com?subject=Get%20a%20Quote&body=Hi%20Jaisakthi%20Papers%20Team,";
  };

  return (
    <div className="about-container-unique">
      <div className="about-content-unique">
        <h1 className="about-heading-unique" ref={headingRef}>
          Empowering Recycling Goals with Our Dedicated Team
        </h1>
        <p className="about-description-unique" ref={descriptionRef}>
          At Jaisakthi Papers, our employees are at the heart of achieving our paper industry's recycling goals. 
          With their dedication and innovative approaches, we aim to revolutionize waste management, recover valuable materials, 
          and implement sustainable practices that drive our vision forward.
        </p>
        <button className="about-button-unique" onClick={handleQuoteClick}>Join Us</button>
      </div>
      <div className="about-image-container-unique">
        <img
          src={image1}
          alt="Team collaborating on recycling goals"
          className="about-image-unique"
          ref={imageRef}
        />
      </div>
    </div>
  );
}

export default Recycle2;
