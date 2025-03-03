import React, { useEffect, useRef } from 'react';
import image1 from '../../assets/images/img97.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import './Home8.css';

function Home8() {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
      AOS.init({ duration: 3000, once: false });
    }, []);

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
      <div className="about-content-unique" data-aos="fade-left">
        <h1 className="about-heading-unique" ref={headingRef} data-aos="fade-up">
          Ensuring Premium Product Quality with Sustainable Practices
        </h1>
        <p className="about-description-unique" ref={descriptionRef}>
          At Jaisakthi Papers, we are committed to delivering superior paper products through rigorous quality control, 
          eco-friendly production processes, and a strong emphasis on sustainability. Our high-quality Kraft Board, Chip Board, 
          Duplex Coated, and other products are designed to meet the highest industry standards.
        </p>
        <button className="about-button-unique" data-aos="zoom-in" onClick={handleQuoteClick}>Learn More</button>
      </div>
      <div className="about-image-container-unique" data-aos="flip-left">
        <img
          src={image1}
          alt="High-quality paper products"
          className="about-image-unique"
          ref={imageRef}
        />
      </div>
    </div>
  );
}

export default Home8;
