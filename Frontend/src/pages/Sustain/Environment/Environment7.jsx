import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/img30.webp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Environment6.css'; // Import the CSS file for styling
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

const Environment7 = () => {

    const waterConservationInitiativesPoints = [
        'Use water-efficient technologies',
        'Recycle and reuse water',
        'Harvest rainwater for use',
        'Detect and fix leaks',
        'Use smart irrigation systems',
        'Educate on water-saving practices',
        'Monitor and optimize water use',
        'Use low-water materials',
        'Work with water-conscious suppliers',
    ];    

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
        <div className="page5-container-web">
            <div className="page5-content-web">
            <div className="page5-left-web" ref={imageRef}>
                    <img 
                        src={image}
                        alt="Web Development Illustration" 
                        className="page5-illustration-web" 
                        data-aos="fade-up"
                    />
                </div>
                <div className="page5-right-web">
                    <h2 className="page5-title-web" data-aos="fade-right">Water Conservation Initiatives</h2>
                    <p className="page5-description-web" data-aos="fade-down">
                    Water is a vital resource, and we take great care to conserve and manage it responsibly. At our facilities, advanced water recycling systems allow us to reuse water multiple times during production, significantly reducing our overall consumption. Our state-of-the-art effluent treatment plants ensure that any water discharged meets or exceeds environmental safety standards. By continually optimizing our water footprint, we not only reduce wastage but also safeguard local water ecosystems, reflecting our dedication to sustainable resource management.
                    </p>
                    <button className="page5-button-web" data-aos="fade-right" onClick={handleWhatsAppClick}>
                        Get in Touch
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
                
            </div>

            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {waterConservationInitiativesPoints.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Environment7;
