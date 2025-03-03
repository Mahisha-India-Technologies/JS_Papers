import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import './Environment4.css';

const Environment4 = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 2500, // Animation duration in milliseconds
            once: false, // Trigger animation only once
        });
    }, []);

    return (
        <div className="page4-container-web">
            <div
                className="page4-content-web"
                data-aos="fade-up" // Add AOS animation attribute
            >
                <h1 className="page4-title-web">
                    Which sustainable technologies can drive a greener future for your business?
                </h1>
                <p className="page4-subtitle-web" data-aos="fade-right">
                    Embrace eco-friendly innovations to reduce your carbon footprint and promote environmental responsibility.
                    Leverage sustainable technologies like renewable energy, green computing, and circular economy solutions
                    to make a positive impact on the planet while enhancing your business operations.
                </p>
            </div>
        </div>
    );
};

export default Environment4;
