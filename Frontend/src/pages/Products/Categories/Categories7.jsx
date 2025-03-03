import React, { useState, useEffect, useRef } from 'react';
import image from '../../../assets/images/img85.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import './Categories4.css';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { Box } from '@mui/material';
import ExploreModal from '../../../components/ExploreModal/Explore1';

const Categories7 = () => {

    const mmBoardInitiatives = [
        'High-strength recycled fibers',
        'Smooth surface for printing',
        'Eco-friendly manufacturing',
        'Durable & flexible design',
        'Energy-efficient production',
        'Sustainable raw materials',
        'Optimized waste reduction',
        'High stiffness & adaptability',
        'Ideal for packaging & industry',
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
                    <h2 className="page5-title-web" data-aos="fade-right">MM Boards</h2>
                    <p className="page5-description-web" data-aos="fade-down">
        Our MM Boards are crafted for superior strength, flexibility, and sustainability. 
        Made from high-quality recycled fibers, these boards provide excellent durability and adaptability for various industrial and packaging applications. 
        Their high stiffness and smooth surface ensure optimal performance in printing and conversion processes. 
        Through energy-efficient manufacturing, responsible material sourcing, and waste reduction strategies, 
        we produce MM Boards that meet global environmental standards while delivering exceptional quality.
      </p>
      <p className="page5-description-web" data-aos="fade-down">
        MM Boards are widely used in packaging, bookbinding, stationery, and other applications that require durability and a smooth finish. 
        Their eco-friendly nature makes them an excellent alternative to conventional packaging materials, contributing to a greener planet. 
        With superior printability and excellent adaptability, MM Boards are ideal for applications that demand precision, strength, and sustainability.
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
                    {mmBoardInitiatives.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories7;
