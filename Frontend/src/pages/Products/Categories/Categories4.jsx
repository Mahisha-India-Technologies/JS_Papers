import React, { useState, useEffect, useRef } from 'react';
import image from '../../../assets/images/img93.jpeg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import './Categories4.css';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { Box } from '@mui/material';
import ExploreModal from '../../../components/ExploreModal/Explore1';

const Categories4 = () => {

    const duplexCoatedBoardInitiatives = [
        'High recycled fiber content',
        'Eco-friendly coatings',
        'Waste reduction techniques',
        'Energy-efficient production',
        'Strict quality control',
        'Sustainable sourcing',
        'Enhanced printability',
        'Biodegradable materials',
        'Continuous innovation',
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
                    <h2 className="page5-title-web" data-aos="fade-right">Duplex Coated Boards & Sheets</h2>
                    <p className="page5-description-web" data-aos="fade-down">
    Our Duplex Coated Boards and Sheets are manufactured with a strong focus on sustainability, efficiency, and quality. 
    We utilize high-grade recycled fibers and eco-friendly coatings to ensure superior strength and printability while reducing environmental impact. 
    Advanced production techniques help us optimize material usage, minimize waste, and enhance product durability. 
    By integrating responsible sourcing, energy-efficient processes, and strict quality control measures, we ensure that our Duplex Coated Boards and Sheets 
    meet global sustainability standards while delivering exceptional performance.
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
                    {duplexCoatedBoardInitiatives.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories4;
