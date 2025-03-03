import React, { useEffect } from 'react';
import image from '../../../assets/images/img88.svg';
import image1 from '../../../assets/images/img78.jpg';
import image2 from '../../../assets/images/img79.jpg';
import image3 from '../../../assets/images/img80.webp';
import image4 from '../../../assets/images/img81.jpg';
import image5 from '../../../assets/images/img82.jpg';
import image6 from '../../../assets/images/img85.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import './Packaging3.css'; // Import the CSS file for styling

const Packaging3 = () => {
    const sustainableSolutionsPoints = [
        'Eco-Friendly Materials',
        'Recycling & Reuse',
        'Low Carbon Footprint',
        'Energy & Water Saving',
        'Durable Products',
        'Biodegradable Solutions',
        'Green Supply Chain',
        'Minimal Waste Packaging',
        'Smart Sustainability Tech',
    ];    

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
        <div className="page5-container-web">
            <div className="page5-content-web">
                
                <div
                    className="page5-right-web"
                    data-aos="fade-right" // AOS animation attribute
                >
                    <h2 className="page5-title-web">Sustainable Packaging Solutions</h2>
<p className="page5-description-web" data-aos="fade-down">
    At Jaisakthi Papers, our packaging solutions are designed to be both eco-friendly and high-performing, minimizing 
    environmental impact while ensuring durability. We use responsibly sourced raw materials, including recycled 
    and biodegradable components, to create sustainable packaging that reduces waste and supports a circular economy. 
    Our production processes focus on energy efficiency, water conservation, and reducing carbon emissions to align 
    with global sustainability standards. By choosing our packaging solutions, businesses can contribute to a greener 
    future without compromising on quality or functionality.
</p>
                    <button className="page5-button-web" data-aos="fade-right" onClick={handleWhatsAppClick}>
                        Get in Touch
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
                <div
                    className="page5-left-web"
                    data-aos="fade-right" // AOS animation attribute
                >
                    <img
                        src={image}
                        alt="Web Development Illustration"
                        className="page5-illustration-web"
                    />
                </div>
            </div>

            <div
                className="webdev-scrolling-text-web1"
                data-aos="fade-right" // AOS animation attribute
            >
                <div className="scrolling-container">
                    &nbsp;
                    {sustainableSolutionsPoints.map((name, index) => (
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

export default Packaging3;
