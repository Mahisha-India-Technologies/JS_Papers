import React, { useState, useRef, useEffect } from 'react'; 
import image1 from '../../../assets/images/img53.png'; 
import image2 from '../../../assets/images/img40.png'; 
import image3 from '../../../assets/images/img54.png'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import './Goals5.css';

const Goals5 = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const contentRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + window.innerHeight;
      const pageOffset = document.querySelector('.page5-container-custom').offsetTop;
      if (offset > pageOffset) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleItem = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const getContentHeight = (index) => {
    if (contentRefs.current[index]) {
      return expandedItem === index ? contentRefs.current[index].scrollHeight : 0;
    }
    return 0;
  };

  return (
    <div className="page5-container-custom">
      <div className={`content-left-custom ${isVisible ? 'slide-in-left' : ''}`}>
        <h1 className="heading-custom">Sustainability Management</h1>
        <p className="paragraph-custom">
          Managing sustainability requires more than adopting eco-friendly practices; it demands a comprehensive strategy 
          to align operations with environmental, social, and governance (ESG) goals. Our sustainability management services 
          cover planning, implementation, monitoring, and reporting to ensure that your business contributes positively 
          to the planet while staying competitive.
        </p>

        <div className={`faq-list-custom ${isVisible ? 'slide-in-bottom' : ''}`}>
          {faqData.map((item, index) => (
            <div key={index} className="faq-item-custom" onClick={() => toggleItem(index)}>
              <div className="faq-title-custom">
                {item.question}
                <span className={`dropdown-icon-custom ${expandedItem === index ? 'open' : ''}`}>
                  <ExpandMoreIcon />
                </span>
              </div>
              <div
                ref={(el) => (contentRefs.current[index] = el)} 
                className="faq-detail-custom"
                style={{
                  height: getContentHeight(index), 
                }}
              >
                <p style={{paddingTop: '0px'}}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="images-right-custom">
        <div className="image-column-custom column-1-custom">
          <img src={image1} alt="Renewable Energy" className="sliding-image-custom" />
          <img src={image2} alt="Renewable Energy" className="sliding-image-custom" />
          <img src={image3} alt="Renewable Energy" className="sliding-image-custom" />
          <img src={image1} alt="Renewable Energy" className="sliding-image-custom" />
        </div>
        <div className="image-column-custom column-2-custom">
          <img src={image2} alt="Waste Reduction" className="sliding-image-custom" />
          <img src={image3} alt="Waste Reduction" className="sliding-image-custom" />
          <img src={image1} alt="Waste Reduction" className="sliding-image-custom" />
          <img src={image2} alt="Waste Reduction" className="sliding-image-custom" />
        </div>
        <div className="image-column-custom column-3-custom">
          <img src={image3} alt="Sustainable Development" className="sliding-image-custom" />
          <img src={image2} alt="Sustainable Development" className="sliding-image-custom" />
          <img src={image1} alt="Sustainable Development" className="sliding-image-custom" />
          <img src={image3} alt="Sustainable Development" className="sliding-image-custom" />
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: 'What is sustainability management?',
    answer:
      'Sustainability management involves integrating environmentally and socially responsible practices into business strategies. It focuses on balancing profitability with positive environmental and social impact.',
  },
  {
    question: 'How can businesses benefit from sustainability management?',
    answer:
      'By adopting sustainability practices, businesses can reduce operational costs, improve brand reputation, meet regulatory requirements, and attract environmentally conscious customers and investors.',
  },
  {
    question: 'How do you measure sustainability performance?',
    answer:
      'Sustainability performance can be measured through key indicators such as carbon footprint, water and energy usage, waste reduction, and adherence to ESG standards. Regular audits and reports help track progress and areas for improvement.',
  },
];

export default Goals5;
