import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/img32.webp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Environment6.css'; // Import the CSS file for styling
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

const Environment9 = () => {

    const reducingEmissionsPollutionPoints = [
        'Use solar and wind energy',
        'Upgrade to low-emission equipment',
        'Adopt carbon capture solutions',
        'Optimize transportation efficiency',
        'Install advanced air filters',
        'Track emissions in real-time',
        'Use eco-friendly materials',
        'Improve energy efficiency',
        'Convert waste into clean energy',
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
                    <h2 className="page5-title-web" data-aos="fade-right">Reducing Emissions and Pollution</h2>
                    <p className="page5-description-web" data-aos="fade-down">
                    Reducing emissions and limiting pollution are key priorities at Jaisakthi Papers. Our operations incorporate advanced emission control systems to limit pollutants released into the air. By transitioning to cleaner fuels and adopting chlorine-free production processes, we ensure that harmful outputs are minimized. Additionally, we optimize transportation and logistics to lower fuel consumption, further reducing our carbon footprint. These initiatives reflect our commitment to cleaner production and a healthier environment.
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
                    {reducingEmissionsPollutionPoints.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Environment9;
