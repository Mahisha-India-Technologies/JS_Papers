import React, { useState, useEffect, useRef } from 'react';
import image from '../../../assets/images/img94.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import './Categories5.css'; 
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { Box } from '@mui/material';
import ExploreModal from '../../../components/ExploreModal/Explore1';

const Categories5 = () => {

    const duplexUncoatedBoardInitiatives = [
        'High recycled fiber usage',
        'Natural uncoated texture',
        'Eco-friendly manufacturing',
        'Durable & versatile design',
        'Energy-efficient processes',
        'Minimal environmental impact',
        'Sustainable material sourcing',
        'Optimized waste reduction',
        'Ideal for eco-friendly packaging',
    ]; 
    
    const [openModal, setOpenModal] = useState(false);
    
        const handleOpenModal = () => setOpenModal(true);
        const handleCloseModal = () => setOpenModal(false);

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        window.open('https://wa.me/917094181144', '_blank'); // Opens WhatsApp with the given number in a new tab
      };
    
    useEffect(() => {
            AOS.init({
                duration: 1200, // Animation duration in milliseconds
                once: false, // Trigger animation only once
            });
        }, []);
    
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
                
                <div className="page5-right-web">
                    <h2 className="page5-title-web" data-aos="fade-right">Duplex Uncoated Boards & Sheets</h2>
                    <p className="page5-description-web" data-aos="fade-down">
        Our Duplex Uncoated Boards and Sheets are designed for strength, versatility, and sustainability. 
        Manufactured using high-quality recycled fibers, they offer excellent durability while minimizing environmental impact. 
        With an uncoated surface, these boards provide a natural texture, making them ideal for eco-friendly packaging and printing applications. 
        Our production process focuses on material efficiency, energy conservation, and responsible sourcing to ensure a high-performance, 
        sustainable product that meets global quality standards.
      </p>
      <p className="page5-description-web" data-aos="fade-down">
        Additionally, our Kraft and Chip Boards are engineered for robustness, offering superior resistance and durability for packaging and 
        industrial applications. Our MM Board, Laminated Sheet, and Poly Coated Sheet offer exceptional moisture resistance, ensuring longevity and 
        enhanced protection for various uses. Whether you need eco-friendly materials or high-performance packaging solutions, our diverse 
        product range delivers unmatched quality and reliability.
      </p>

                    <button className="page5-button-web" data-aos="fade-right" onClick={handleOpenModal}>
                        Explore More
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                    <ExploreModal open={openModal} handleClose={handleCloseModal} />
                </div>
                <div className="page5-left-web" ref={imageRef}>
                    <img 
                        src={image}
                        alt="Web Development Illustration" 
                        className="animated5-illustration-web" 
                        data-aos="fade-up"
                    />
                </div>
            </div>

            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {duplexUncoatedBoardInitiatives.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories5;
