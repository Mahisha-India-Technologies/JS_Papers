import React, { useState, useEffect } from 'react';
import image from '../../../assets/images/img92.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Categories3.css'; // Import the CSS file for styling
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { Box } from '@mui/material';
import ExploreModal from '../../../components/ExploreModal/Explore1';

const Categories3 = () => {
    const energyEfficientManufacturingPoints = [
        'Energy-efficient machinery',
        'Optimized production processes',
        'Renewable energy usage',
        'Smart energy monitoring',
        'Advanced automation',
        'LED & energy-saving systems',
        'Waste energy reuse',
        'Lean manufacturing',
        'Real-time energy tracking',
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
                    <h2 className="page5-title-web">Chip Boards</h2>
                    <p className="page5-description-web" data-aos="fade-down">
    We are committed to energy-efficient and sustainable manufacturing practices in our Chip board production to reduce our carbon footprint. 
    A substantial part of our energy requirements is fulfilled through renewable sources like solar, wind, and biomass, minimizing our reliance 
    on fossil fuels. Our production units utilize advanced machinery and optimized processes to ensure minimal energy consumption while maintaining 
    high-quality standards. By integrating cleaner technologies and adopting energy-saving measures, we continuously work towards reducing 
    greenhouse gas emissions and promoting a more sustainable future.
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
                    {energyEfficientManufacturingPoints.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories3;
