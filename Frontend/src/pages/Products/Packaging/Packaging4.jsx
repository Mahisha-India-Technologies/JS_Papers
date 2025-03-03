import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import './Packaging4.css';

const Packaging4 = () => {
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
    How Can Recycled Packaging Solutions Benefit Your Business?
</h1>
<p className="page4-subtitle-web" data-aos="fade-right">
    Adopt sustainable packaging made from recycled materials to reduce waste and support a circular economy. 
    Utilizing high-quality recycled paper in packaging helps lower environmental impact, conserve natural resources, 
    and meet eco-friendly business standards. Make a greener choice while maintaining durability and efficiency in your packaging solutions.
</p>

            </div>
        </div>
    );
};

export default Packaging4;
