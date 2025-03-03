import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import image from '../../../assets/images/img64.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Certification3.css'; // Import the CSS file for styling

const Certification3 = () => {
    const [isLoaded, setIsLoaded] = useState(false); // Loading state

    const energyAndWaterEfficiencyRecognitionPoints = [
        'Use energy-efficient technology',
        'Switch to renewable energy',
        'Implement energy-saving systems',
        'Recycle and reuse water',
        'Optimize energy with smart tech',
        'Recover waste heat',
        'Design energy-efficient buildings',
        'Install low-energy lighting',
        'Partner with sustainable companies',
    ];    

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1800,
            once: false,
            offset: 200,
            easing: 'ease-in-out',
        });

        // Delay to ensure AOS is ready before showing content
        setTimeout(() => {
            setIsLoaded(true); // Mark as loaded
        }, 100); // Adjust the delay as needed
    }, []);

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        window.open('https://wa.me/917094181144', '_blank'); // Opens WhatsApp with the given number in a new tab
      };

    // If not loaded, return a blank page (prevents flashing)
    if (!isLoaded) {
        return null;
    }

    return (
        <div className="page5-container-web">
            <div className="page5-content-web">
                {/* Right Section */}
                <div 
                    className="page5-right-web" 
                    data-aos="fade-up"
                >
                    <h2 className="page5-title-web">Energy and Water Efficiency Recognition</h2>
                    <p className="page5-description-web" data-aos="fade-left">
                        Our paper mills have been recognized for their exceptional energy and water efficiency by leading Indian regulatory bodies and sustainability councils. By implementing advanced water recycling technologies and energy-saving practices, we ensure resource conservation without compromising productivity. These initiatives not only reduce our environmental impact but also enhance our operational efficiency, helping us maintain a sustainable balance between growth and ecological responsibility. Through continuous innovation and rigorous monitoring, we strive to achieve even higher levels of resource optimization, setting a benchmark for the recycling industry in India and beyond.
                    </p>
                    <button 
                        className="page5-button-web" 
                        data-aos="zoom-in"
                        onClick={handleWhatsAppClick}
                    >
                        Get in Touch
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>

                {/* Left Section */}
                <div 
                    className="page5-left-web" 
                    data-aos="fade-left"
                >
                    <img 
                        src={image} 
                        alt="Energy and Water Efficiency Illustration" 
                        className="page5-illustration-web" 
                    />
                </div>
            </div>

            {/* Scrolling Text Section */}
            <div 
                className="webdev-scrolling-text-web1" 
                data-aos="fade-up"
            >
                <div className="scrolling-container">
                    &nbsp;
                    {energyAndWaterEfficiencyRecognitionPoints.map((point, index) => (
                        <span key={index}>
                            {point} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certification3;
