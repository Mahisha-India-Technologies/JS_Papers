import React, { useState, useEffect } from 'react';
import image from '../../assets/images/home-img7.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Home5.css'; // Import the CSS file for styling
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { Box } from '@mui/material';
import ExploreModal from '../../components/ExploreModal/Explore1';

const Home5 = () => {
  const recycledPaperManufacturingPoints = [
    'Recycled fiber usage',
    'Eco-friendly processes',
    'Low water & energy use',
    'Sustainable sourcing',
    'Minimal waste',
    'Green packaging',
    'Carbon reduction',
    'Closed-loop recycling',
    'Eco-conscious production',
];

    const [openModal, setOpenModal] = useState(false);
    
        const handleOpenModal = () => setOpenModal(true);
        const handleCloseModal = () => setOpenModal(false);

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        window.open('https://wa.me/917094181144', '_blank'); // Opens WhatsApp with the given number in a new tab
      };

    // Initialize AOS
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
                <div className="page5-right-web" data-aos="fade-right">
                    <h2 className="page5-title-web">Eco-Friendly Manufacturing</h2>
                    <p className="page5-description-web" data-aos="fade-down">
    We are dedicated to sustainable and eco-friendly manufacturing in our recycled paper products, ensuring minimal environmental impact. 
    By utilizing high-quality recovered fibers and advanced recycling processes, we reduce waste and conserve natural resources. 
    Our production facilities employ energy-efficient technologies to optimize water and energy consumption, further lowering our carbon footprint. 
    Through continuous innovation and commitment to circular economy principles, we transform waste paper into high-performance products, 
    promoting sustainability while maintaining superior quality and durability.
</p>



                    <button className="page5-button-web" data-aos="fade-right" onClick={handleOpenModal}>
                        Explore More
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                    <ExploreModal open={openModal} handleClose={handleCloseModal} />
                </div>
                <div className="page5-left-web" data-aos="fade-right">
                    <img
                        src={image}
                        alt="Web Development Illustration"
                        className="animated5-illustration-web"
                    />
                </div>
            </div>

            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container" data-aos="fade-up">
                    &nbsp;
                    {recycledPaperManufacturingPoints.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home5;
