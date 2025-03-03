import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/img31.webp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Environment6.css'; // Import the CSS file for styling
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

const Environment8 = () => {

    const wasteManagementCircularEconomyPoints = [
        'Minimize waste at all production stages',
        'Recycle and upcycle materials',
        'Use biodegradable and recyclable materials',
        'Establish resource recovery systems',
        'Design products for repair and reuse',
        'Repurpose industrial waste with partners',
        'Implement efficient waste management',
        'Use technology for waste optimization',
        'Promote circular economy in the supply chain',
    ];  

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
        <div className="page5-container-web">
            <div className="page5-content-web">
                
                <div className="page5-right-web">
                    <h2 className="page5-title-web" data-aos="fade-right">Waste Management Economy</h2>
                    <p className="page5-description-web" data-aos="fade-down">
                    Minimizing waste and promoting a circular economy is central to our sustainability efforts. Our production processes are designed to reduce, reuse, and recycle as much as possible, ensuring that product trimmings, pulp residues, and byproducts are reintegrated into the system or put to beneficial use. We strive to produce zero waste, and our products are fully recyclable, supporting a closed-loop system that reduces environmental impact. By focusing on sustainable packaging solutions and reducing landfill contributions, we play an active role in promoting eco-friendly practices across the paper based recycling industry.
                    </p>
                    <button className="page5-button-web" data-aos="fade-right" onClick={handleWhatsAppClick}>
                        Get in Touch
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
                <div className="page5-left-web" ref={imageRef}>
                    <img 
                        src={image}
                        alt="Web Development Illustration" 
                        className="page5-illustration-web" 
                        data-aos="fade-up"
                    />
                </div>
            </div>

            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {wasteManagementCircularEconomyPoints.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Environment8;
