import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import image from '../../../assets/images/img32.webp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Certification3.css'; // Import the CSS file for styling

const Certification4 = () => {
    const carbonNeutralInitiativesPoints = [
        'Cut greenhouse gas emissions',
        'Use renewable energy',
        'Offset carbon with projects',
        'Adopt energy-efficient tech',
        'Implement carbon capture',
        'Promote sustainable transport',
        'Optimize production for less emissions',
        'Support reforestation efforts',
        'Encourage energy conservation',
    ];    

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1200, // Animation duration (in ms)
            offset: 200,    // Offset (in px) from the original trigger point
            easing: 'ease-in-out', // Easing animation style
            once: false,     // Animation happens only once on scroll
        });
    }, []);

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        window.open('https://wa.me/917094181144', '_blank'); // Opens WhatsApp with the given number in a new tab
      };

    return (
        <div className="page5-container-web">
            <div className="page5-content-web">
                {/* Left Section */}
                <div 
                    className="page5-left-web" 
                    data-aos="fade-up" // AOS animation
                >
                    <img 
                        src={image}
                        alt="Carbon Neutral Initiatives Illustration" 
                        className="page5-illustration-web" 
                    />
                </div>

                {/* Right Section */}
                <div 
                    className="page5-right-web" 
                    data-aos="fade-right" // AOS animation
                >
                    <h2 className="page5-title-web" data-aos="fade-right">Carbon Neutral Initiatives</h2>
                    <p className="page5-description-web" data-aos="fade-left">
                        We are actively working toward achieving carbon neutrality through sustainable production practices, renewable energy usage, and carbon offset programs. Our commitment to minimizing greenhouse gas emissions aligns with global climate goals, ensuring a cleaner and greener future. By integrating energy-efficient technologies and transitioning to renewable energy sources, we are reducing our reliance on fossil fuels and lowering our overall carbon footprint. Additionally, we invest in carbon offset projects that help mitigate environmental damage, such as reforestation and renewable energy initiatives. Our carbon neutral journey is a testament to our dedication to environmental stewardship and our role in fostering a sustainable world for future generations.
                    </p>
                    <button 
                        className="page5-button-web" 
                        data-aos="zoom-in" // AOS animation
                        onClick={handleWhatsAppClick}
                    >
                        Get in Touch
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
            </div>

            {/* Scrolling Text Section */}
            <div 
                className="webdev-scrolling-text-web1" 
                data-aos="fade-up" // AOS animation
            >
                <div className="scrolling-container">
                    &nbsp;
                    {carbonNeutralInitiativesPoints.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certification4;
