import React, { useState, useEffect, useRef } from 'react';
import image from '../../../assets/images/img81.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import './Categories4.css';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { Box } from '@mui/material';
import ExploreModal from '../../../components/ExploreModal/Explore1';

const Categories10 = () => {

    const polycoatedSheetInitiatives = [
        'Superior moisture resistance',
        'High recycled fiber content',
        'Durable polyethylene coating',
        'Eco-friendly manufacturing',
        'Energy-efficient production',
        'Optimized material usage',
        'Grease & water-resistant properties',
        'Ideal for food & industrial packaging',
        'Sustainable sourcing & waste reduction',
    ]; 
    
    const [openModal, setOpenModal] = useState(false);
    
        const handleOpenModal = () => setOpenModal(true);
        const handleCloseModal = () => setOpenModal(false);

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        window.open('https://wa.me/917094181144', '_blank'); // Opens WhatsApp with the given number in a new tab
      };

    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = imageRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top <= windowHeight - 100) {
                    element.classList.add('slide-in-bottom');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
            AOS.init({
                duration: 1200, // Animation duration in milliseconds
                once: false, // Trigger animation only once
            });
        }, []);

    return (
        <div className="animated5-container-web">
            <Box className="bubble"></Box>
  <Box className="bubble"></Box>
  <Box className="bubble"></Box>
  <Box className="bubble"></Box>
  <Box className="bubble"></Box>
  <Box className="bubble"></Box>
  <Box className="bubble"></Box>
  <Box className="bubble"></Box>
  <Box className="bubble"></Box>
  <Box className="bubble"></Box>
            <div className="page5-content-web">
            <div className="page5-left-web" ref={imageRef}>
                    <img 
                        src={image}
                        alt="Web Development Illustration" 
                        className="animated5-illustration-web" 
                        data-aos="fade-up"
                    />
                </div>
                <div className="page5-right-web">
                    <h2 className="page5-title-web" data-aos="fade-right">Poly Coated Sheets</h2>
                    <p className="page5-description-web" data-aos="fade-down">
    Our Polycoated Sheets are engineered for superior moisture resistance, durability, and barrier protection.  
    Manufactured using high-quality recycled fibers with a specialized polyethylene coating, they provide excellent strength and  
    protection against water, grease, and external elements. These sheets are ideal for food packaging, industrial applications,  
    and moisture-sensitive environments. With a strong focus on sustainability, we incorporate eco-friendly materials, energy-efficient  
    processes, and optimized production techniques to ensure high performance while minimizing environmental impact.
</p>
                    <button className="page5-button-web" data-aos="fade-right" onClick={handleOpenModal}>
                        Explore More
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                    <ExploreModal open={openModal} handleClose={handleCloseModal} />
                </div>
                
            </div>

            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {polycoatedSheetInitiatives.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories10;
