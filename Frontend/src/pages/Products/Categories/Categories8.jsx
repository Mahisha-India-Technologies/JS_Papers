import React, { useState, useEffect, useRef } from 'react';
import image from '../../../assets/images/img95.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import './Categories5.css'; 
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { Box } from '@mui/material';
import ExploreModal from '../../../components/ExploreModal/Explore1';

const Categories8 = () => {

    const laminatedSheetInitiatives = [
        'Durable & moisture-resistant',
        'High recycled fiber content',
        'Advanced lamination techniques',
        'Smooth finish for superior printability',
        'Eco-friendly manufacturing process',
        'Energy-efficient production',
        'Sustainable material sourcing',
        'Optimized waste reduction',
        'Ideal for packaging & industrial use',
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
                    <h2 className="page5-title-web" data-aos="fade-right">Laminated Sheets</h2>
                    <p className="page5-description-web" data-aos="fade-down">
    Our Laminated Sheets are designed for enhanced durability, moisture resistance, and superior finish. 
    Crafted using high-quality recycled fibers and advanced lamination techniques, they provide excellent strength 
    and surface protection for diverse applications. The smooth and robust finish ensures high printability, making them ideal 
    for packaging, stationery, and industrial use. Through sustainable sourcing, energy-efficient production, and optimized material usage, 
    we ensure that our Laminated Sheets meet the highest quality and environmental standards.
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
                    {laminatedSheetInitiatives.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories8;
