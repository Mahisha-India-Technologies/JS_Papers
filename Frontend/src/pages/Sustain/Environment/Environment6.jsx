import React, { useEffect } from 'react';
import image from '../../../assets/images/img28.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Environment6.css'; // Import the CSS file for styling
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

const Environment6 = () => {
    const energyEfficientManufacturingPoints = [
        'Use energy-efficient machines',
        'Optimize production to save energy',
        'Utilize solar and wind power',
        'Use smart sensors to reduce waste',
        'Automate for better efficiency',
        'Switch to LED lighting',
        'Reuse waste energy',
        'Apply lean manufacturing',
        'Monitor energy in real-time',
    ];

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
        <div className="page5-container-web">
            <div className="page5-content-web">
                <div className="page5-right-web" data-aos="fade-right">
                    <h2 className="page5-title-web">Energy-Efficient Manufacturing</h2>
                    <p className="page5-description-web" data-aos="fade-down">
                        We are committed to adopting energy-efficient and sustainable manufacturing practices to lower our carbon footprint. A significant portion of our energy needs is met through renewable sources such as solar, wind, and biomass, allowing us to reduce dependence on fossil fuels. Our production facilities are equipped with advanced machinery designed to minimize energy consumption while maximizing efficiency. Through continual process optimization and cleaner technologies, we are steadily reducing greenhouse gas emissions and contributing to a cleaner, greener future.
                    </p>
                    <button className="page5-button-web" data-aos="fade-right" onClick={handleWhatsAppClick}>
                        Get in Touch
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
                <div className="page5-left-web" data-aos="fade-right">
                    <img
                        src={image}
                        alt="Web Development Illustration"
                        className="page5-illustration-web"
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

export default Environment6;
