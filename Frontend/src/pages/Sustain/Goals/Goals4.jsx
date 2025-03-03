import React from 'react';
import image1 from '../../../assets/images/img42.png';
import image2 from '../../../assets/images/img52.png';
import image3 from '../../../assets/images/img40.png';
import { useInView } from 'react-intersection-observer';
import './Goals4.css';

const Goals4 = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: false });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({ triggerOnce: false });
  const { ref: socialRef, inView: socialInView } = useInView({ triggerOnce: false });

  return (
    <div className="page4-container-digital-unique">
      <div className="content-digital-unique">
        <h1 
          ref={headingRef} 
          className={`heading-digital-unique ${headingInView ? 'slide-in-bottom' : ''}`}
        >
          Sustainability Goals Marketing
        </h1>
        <p 
          ref={paragraphRef} 
          className={`paragraph-digital-unique ${paragraphInView ? 'slide-in-right' : ''}`}
        >
          In today’s eco-conscious world, marketing isn’t just about promoting products or services; 
          it’s about aligning your brand with sustainability values. Our sustainability goals marketing 
          services help businesses connect with audiences by showcasing their commitment to a greener future.
        </p>
        <p 
          className={`paragraph-digital-unique ${paragraphInView ? 'slide-in-right' : ''}`}
        >
          From crafting compelling narratives around your eco-friendly initiatives to running impactful 
          campaigns, we ensure that your brand resonates with customers who value sustainability. Whether 
          it’s reducing your carbon footprint, promoting renewable energy, or supporting social responsibility, 
          we amplify your efforts to create a meaningful impact and drive engagement.
        </p>
        <div 
          ref={socialRef} 
          className={`social-stats-digital-unique ${socialInView ? 'slide-in-left' : ''}`}
        >
          <div className="stat-item-digital-unique">
            <img src={image1} alt="Sustainability Efforts" className="icon-digital-unique" />
            <p className="stat-text-digital-unique">Carbon Footprint<br />Reduced by 20%</p>
          </div>
          <div className="stat-item-digital-unique">
            <img src={image2} alt="Community Impact" className="icon-digital-unique" />
            <p className="stat-text-digital-unique">Community Impact<br />Supported 30+ Initiatives</p>
          </div>
          <div className="stat-item-digital-unique">
            <img src={image3} alt="Green Campaigns" className="icon-digital-unique" />
            <p className="stat-text-digital-unique">Green Campaigns<br />Reached 50,000+ People</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals4;
