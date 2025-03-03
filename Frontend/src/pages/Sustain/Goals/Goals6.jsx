import React, { useEffect, useRef } from 'react';
import image1 from '../../../assets/images/img38.png';
import image2 from '../../../assets/images/img40.png';
import image3 from '../../../assets/images/img54.png';
import './Goals6.css'; // External CSS file with unique classnames

const Goals6 = () => {
  const sectionRef = useRef(null); // Ref to observe the section

  useEffect(() => {
    const section = sectionRef.current;

    // Intersection Observer callback
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add 'active' class when the section is in view
          section.querySelector('.branding-heading-unique').classList.add('active');
          section.querySelector('.branding-description-unique').classList.add('active');
          section.querySelector('.branding-icons-wrapper-unique').classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, { threshold: 0.3 });
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div ref={sectionRef} className="branding-container-unique">
      <div className="branding-content-unique">
        <h1 className="branding-heading-unique">Sustainability Branding</h1>
        <p className="branding-description-unique">
          In today’s environmentally conscious world, brands are embracing sustainability as a core value. 
          Sustainability branding focuses on promoting eco-friendly practices, responsible sourcing, and 
          reducing environmental impact. Through storytelling and transparency, businesses share their journey 
          toward creating a greener future. Platforms like Instagram, Facebook, and LinkedIn have become 
          essential for showcasing these efforts, connecting with audiences who value ethical and sustainable 
          practices. By aligning with sustainability goals, brands foster trust, authenticity, and loyalty 
          while contributing to a healthier planet. It’s more than marketing—it’s a movement toward a better tomorrow.
        </p>
        <div className="branding-icons-wrapper-unique">
          <img src={image1} alt="LinkedIn" className="branding-icon-unique" />
          <img src={image2} alt="Instagram" className="branding-icon-unique" />
          <img src={image3} alt="Facebook" className="branding-icon-unique" />
        </div>
      </div>
    </div>
  );
};

export default Goals6;
