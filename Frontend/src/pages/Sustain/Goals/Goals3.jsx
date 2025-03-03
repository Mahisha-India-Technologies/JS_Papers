import React, { useEffect, useRef } from 'react';
import './Goals3.css'; // Import the CSS file for styling

const Goals3 = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = contentRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top <= windowHeight - 100) {
                    element.classList.add('slide-in');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="page3-container-web">
            <div className="page3-content-web" ref={contentRef}>
                <h1 className="page3-title-web">
                    Sustainability Planning
                </h1>
                <p className="page3-subtitle-web">
                    Sustainability planning is the process of integrating eco-friendly practices into business strategies to promote a greener and more responsible future. We understand the importance of environmental stewardship, and our experts develop plans that prioritize resource efficiency, minimize waste, and support long-term ecological balance, helping businesses thrive while reducing their carbon footprint.
                </p>
            </div>
        </div>
    );
};

export default Goals3;
