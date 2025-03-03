import React, { useEffect, useRef } from 'react';
import image1 from '../../../assets/images/img56.svg';
import image2 from '../../../assets/images/img57.svg';
import './Recycle4.css'; 

const Recycle4 = () => {
  const mainHeadingRef = useRef(null);
  const journeyHeadingRef = useRef(null);
  const descriptionRef = useRef(null);
  const visionBoxRef = useRef(null);
  const missionBoxRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.2, // Trigger when 20% of the element is in view
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('unique-visible');
          observer.unobserve(entry.target); // Stop observing once the animation has happened
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Add observers for each section
    if (mainHeadingRef.current) observer.observe(mainHeadingRef.current);
    if (journeyHeadingRef.current) observer.observe(journeyHeadingRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (visionBoxRef.current) observer.observe(visionBoxRef.current);
    if (missionBoxRef.current) observer.observe(missionBoxRef.current);

    return () => {
      observer.disconnect(); // Clean up on unmount
    };
  }, []);

  return (
    <div className="unique-aboutus-wrapper">
      <section className="unique-intro-section">
        <h3
          ref={journeyHeadingRef}
          className="unique-journey-heading unique-slide-in-left unique-hidden"
        >
          Journey of Our Recycling Commitment
        </h3>
        <h1
          ref={mainHeadingRef}
          className="unique-main-heading unique-slide-in-right unique-hidden"
        >
          Leading the Way in Sustainable Waste Recycling and Innovation
        </h1>
        <p
          ref={descriptionRef}
          className="unique-description-text"
          style={{fontSize: '1rem'}}
        >
          Our recyled products factory is dedicated to revolutionizing recycling processes, ensuring resource efficiency, and reducing environmental impact. We believe in fostering a culture of sustainability by integrating innovative recycling methods into our production cycles.
        </p>
      </section>

      <section className="unique-vision-mission-container">
        <div
          ref={visionBoxRef}
          className="unique-vision-box unique-slide-in-top unique-hidden"
        >
          <img src={image1} alt="Our Vision" className="unique-vision-icon" />
          <h3 className="unique-vision-title">Our Vision</h3>
          <p className="unique-vision-description">
            To create a future where every piece of recycling is part of a sustainable loop, minimizing waste and maximizing the reuse of resources in harmony with nature.
          </p>
        </div>

        <div
          ref={missionBoxRef}
          className="unique-mission-box unique-slide-in-bottom unique-hidden"
        >
          <img src={image2} alt="Our Mission" className="unique-mission-icon" />
          <h3 className="unique-mission-title">Our Mission</h3>
          <p className="unique-mission-description">
            To lead the paper recycled product industry in sustainable recycling practices by developing eco-friendly solutions, reducing waste, and empowering communities to embrace a greener future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Recycle4;
