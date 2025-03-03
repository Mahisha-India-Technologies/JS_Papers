import React, { useEffect } from 'react';
import image from '../../../assets/images/home-back1.png';
import image1 from '../../../assets/images/img22.webp';
import image2 from '../../../assets/images/img23.png';
import image3 from '../../../assets/images/img24.png';
import image4 from '../../../assets/images/img25.webp';
import image5 from '../../../assets/images/img26.jpg';
import image6 from '../../../assets/images/img27.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import './Environment5.css'; // Import the CSS file for styling

const Environment5 = () => {
    const sustainableSourcingPoints = [
        'Ethical supply chain practices',
        'Certified sustainable materials',
        'Low-impact material extraction',
        'Eco-friendly supplier partnerships',
        'Use of renewable materials',
        'Material reuse and recycling',
        'Traceable and accountable sourcing',
        'Localized sourcing to cut emissions',
        'Tech-driven resource optimization',
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
                    className="page5-left-web"
                    data-aos="fade-right" // AOS animation attribute
                >
                    <img
                        src={image}
                        alt="Web Development Illustration"
                        className="page5-illustration-web"
                    />
                </div>
                <div
                    className="page5-right-web"
                    data-aos="fade-right" // AOS animation attribute
                >
                    <h2 className="page5-title-web">Sustainable Sourcing of Materials</h2>
                    <p className="page5-description-web" data-aos="fade-down">
                        At Jaisakthi Papers, we prioritize the responsible sourcing of raw materials to minimize our impact on the environment.
                        By partnering with certified suppliers who adhere to global standards like FSC (Forest Stewardship Council) and
                        PEFC (Programme for the Endorsement of Forest Certification), we ensure that our paper production supports sustainable forestry.
                        Additionally, we actively participate in reforestation initiatives, planting more trees than we use.
                        By incorporating recycled paper and post-consumer waste into our production process, we reduce dependency on virgin resources
                        and contribute to building a circular economy that minimizes waste.
                    </p>
                    <button className="page5-button-web" data-aos="fade-right" onClick={handleWhatsAppClick}>
                        Get in Touch
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
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

export default Environment5;
