import React, { useState, useEffect } from 'react';
import image from '../../../assets/images/img91.avif';
import image1 from '../../../assets/images/img91.avif';
import image2 from '../../../assets/images/img92.jpg';
import image3 from '../../../assets/images/img93.jpeg';
import image4 from '../../../assets/images/img94.jpg';
import image5 from '../../../assets/images/img95.jpg';
import image6 from '../../../assets/images/img96.webp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import './Categories2.css'; // Import the CSS file for styling
import { Box } from '@mui/material';
import ExploreModal from '../../../components/ExploreModal/Explore1';

const Categories2 = () => {
    const sustainableSourcingPoints = [
        'Using recycled fibers',
        'Sourcing from certified suppliers',
        'Eco-friendly manufacturing',
        'Biodegradable materials',
        'Minimizing water & energy use',
        'Reducing production waste',
        'Supporting reforestation',
        'Lowering carbon footprint',
        'Promoting circular economy',
    ];    

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
            once: false, // Trigger animation only once
        });
    }, []);

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        window.open('https://wa.me/917094181144', '_blank'); // Opens WhatsApp with the given number in a new tab
      };

    return (
        <div className="animated5-container-web">
            {/* Floating Bubbles */}
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
                <div
                    className="page5-left-web"
                    data-aos="fade-right" // AOS animation attribute
                >
                    <img
                        src={image}
                        alt="Web Development Illustration"
                        className="animated5-illustration-web"
                    />
                </div>
                <div
                    className="page5-right-web"
                    data-aos="fade-right" // AOS animation attribute
                >
                    <h2 className="page5-title-web">Kraft Boards</h2>
                    <p className="page5-description-web" data-aos="fade-down">
    At Jaisakthi Papers, we are committed to sustainable Kraft board production by responsibly sourcing raw materials 
    and minimizing environmental impact. We collaborate with certified suppliers who comply with global sustainability 
    standards like FSC (Forest Stewardship Council) and PEFC (Programme for the Endorsement of Forest Certification) 
    to ensure ethical and eco-friendly material sourcing. Our production process integrates recycled fibers and 
    post-consumer waste, reducing the reliance on virgin wood pulp while maintaining high durability and strength. 
    Additionally, we support reforestation initiatives and adopt energy-efficient manufacturing techniques to lower 
    carbon emissions. Through continuous innovation, we strive to promote a circular economy, ensuring our Kraft boards 
    are both high-quality and environmentally responsible.
</p>

                    <button className="page5-button-web" data-aos="fade-right" onClick={handleOpenModal}>
                        Explore More
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                    <ExploreModal open={openModal} handleClose={handleCloseModal} />
                </div>
            </div>

            <div
                className="webdev-scrolling-text-web1"
                data-aos="fade-right" // AOS animation attribute
            >
                <div className="scrolling-container">
                    &nbsp;
                    {sustainableSourcingPoints.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>

            <div
                className="page5-gallery-web"
                data-aos="zoom-in" // AOS animation attribute
            >
                <div className="page5-gallery-content-web">
                    <img
                        src={image1}
                        alt="Sample Project 1"
                        className="page5-sample-web"
                    />
                    <img
                        src={image2}
                        alt="Sample Project 2"
                        className="page5-sample-web"
                    />
                    <img
                        src={image3}
                        alt="Sample Project 3"
                        className="page5-sample-web"
                    />
                    <img
                        src={image4}
                        alt="Sample Project 3"
                        className="page5-sample-web"
                    />
                    <img
                        src={image5}
                        alt="Sample Project 3"
                        className="page5-sample-web"
                    />
                    <img
                        src={image6}
                        alt="Sample Project 3"
                        className="page5-sample-web"
                    />
                </div>
            </div>
        </div>
    );
};

export default Categories2;
