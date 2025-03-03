import React, { useEffect, useState } from 'react';
import './Home3.css';
import blogIcon from '../../assets/images/img35.png';
import mediaIcon from '../../assets/images/img36.png';
import softwareIcon from '../../assets/images/img37.png';
import webIcon from '../../assets/images/img38.png';
import photoIcon from '../../assets/images/img39.png';
import serviceIcon from '../../assets/images/img40.png';
import businessIcon from '../../assets/images/img41.png';
import brandIcon from '../../assets/images/img42.png';
import ExploreModal from '../../components/ExploreModal/Explore1';

const services = [
  { 
    key: 'Kraft Boards & Sheets', 
    icon: blogIcon, 
    details: "High-quality kraft boards known for their durability and eco-friendliness. Used in packaging, carton boxes, and industrial applications.",
    specs: "GSM: 180-450 | Thickness: 1mm - 3mm"
  },
  { 
    key: 'Chip Boards & Products', 
    icon: mediaIcon, 
    details: "Chip boards are lightweight yet sturdy, perfect for packaging, furniture backing, and book covers.",
    specs: "GSM: 250-400 | Moisture Resistance: High"
  },
  { 
    key: 'Duplex Coated Sheets', 
    icon: softwareIcon, 
    details: "Coated duplex sheets with a glossy finish, widely used in printing and luxury packaging.",
    specs: "Coating: Glossy | Weight: 200-400 GSM"
  },
  { 
    key: 'Duplex Uncoated Sheets', 
    icon: webIcon, 
    details: "Uncoated duplex sheets ideal for cost-effective printing and packaging.",
    specs: "GSM: 200-350 | Finish: Matte"
  },
  { 
    key: 'MM Boards & Sheets', 
    icon: photoIcon, 
    details: "Multi-ply boards offering high strength and flexibility for various industrial uses.",
    specs: "GSM: 220-450 | Thickness: 1.5mm - 3mm"
  },
  { 
    key: 'Laminated Sheets', 
    icon: serviceIcon, 
    details: "High-quality laminated sheets resistant to moisture and tearing.",
    specs: "GSM: 180-450 | Layer: Dual-layer protection"
  },
  { 
    key: 'Polycoated Sheets', 
    icon: businessIcon, 
    details: "Poly-coated sheets offering water resistance, perfect for food and pharmaceutical packaging.",
    specs: "GSM: 200-400 | Coating: Polyethylene"
  },
  { 
    key: 'Eco-Friendly', 
    icon: brandIcon, 
    details: "Sustainable and biodegradable boards designed for environmentally conscious businesses.",
    specs: "100% Recyclable | Eco-Friendly Certification"
  },
];

const Home3 = () => {

  const [openModal, setOpenModal] = useState(false);
  
      const handleOpenModal = () => setOpenModal(true);
      const handleCloseModal = () => setOpenModal(false);
  const [inView, setInView] = useState(false);

  // Function to check if the element is in the viewport
  const handleScroll = () => {
    const element = document.querySelector('.page4-container');
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`page4-container ${inView ? 'in-view' : ''}`}>
      <h1 className={`page4-title ${inView ? 'slide-in' : ''}`}>
        Our Products & Services
        <div className="underline"></div>
      </h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-item ${
              index % 2 === 0 ? 'slide-right' : 'slide-left'
            } ${inView ? 'in-view' : ''}`}
          >
            <img src={service.icon} alt={service.key} className="service-icon" />
            <h3>{service.key}</h3> {/* Translate service title */}
            <button className='service-explore' onClick={handleOpenModal}>Explore</button>
            
          </div>
        ))}
        <ExploreModal open={openModal} handleClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default Home3;
