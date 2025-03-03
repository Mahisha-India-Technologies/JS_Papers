import React, { useEffect, useState, useRef } from 'react';
import './EcoFriendly2.css';

const EcoFriendly2 = () => {
    const [isCounting, setIsCounting] = useState(false);
    const descriptionRef = useRef(null);
    const statsRef = useRef(null);

    // Function to check if the element is in view (for triggering animations)
    useEffect(() => {
        const handleVisibility = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsCounting(true); // Start counting when the section is visible
                }
            });
        };

        const observer = new IntersectionObserver(handleVisibility, {
            threshold: 0.1, // Trigger when 10% of the component is visible
        });

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    // Function for stats counting animation
    const useCountUp = (endValue) => {
        const [value, setValue] = useState(0);

        useEffect(() => {
            if (!isCounting) return; // Prevent counting unless triggered

            let start = 0;
            const duration = 500; // 1 second
            const increment = endValue / duration;

            const timer = setInterval(() => {
                start += increment;
                if (start >= endValue) {
                    clearInterval(timer);
                    setValue(endValue);
                } else {
                    setValue(Math.ceil(start));
                }
            }, 10);

            return () => clearInterval(timer);
        }, [isCounting, endValue]);

        return value;
    };

    return (
        <div className="page3-container-eco" ref={statsRef}>
            <div className="overlay"></div>
            <div className="content">
                <p
                    ref={descriptionRef}
                    className={`description ${isCounting ? 'slide-up' : ''}`} 
                    style={{ fontFamily: 'Excon', fontWeight: 'bold' }}
                >
                    At our paper recycling factory, we are committed to revolutionizing sustainability. 
                    Our mission is to minimize waste, conserve resources, and promote eco-friendly solutions 
                    through innovative recycling practices. Together, we are shaping a greener tomorrow.
                </p>
                <div className="stats">
                    <div className="stat-item">
                        <h2>{useCountUp(5000)}+</h2>
                        <p>Tons of Paper Recycled</p>
                    </div>
                    <div className="stat-item">
                        <h2>{useCountUp(200)}+</h2>
                        <p>Partnered Organizations</p>
                    </div>
                    <div className="stat-item">
                        <h2>{useCountUp(4.9)}/5</h2>
                        <p>Client Satisfaction Ratings</p>
                    </div>
                    <div className="stat-item">
                        <h2>{useCountUp(3000)}+</h2>
                        <p>Trees Saved Annually</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcoFriendly2;
