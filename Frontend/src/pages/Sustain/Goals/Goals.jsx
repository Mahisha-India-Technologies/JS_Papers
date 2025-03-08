import React, { useState, useEffect } from "react";
import Goals1 from "./Goals1";
import Footer from "../../../components/Footer/Footer";
import Goals2 from "./Goals2";
import Goals3 from "./Goals3";
import Goals4 from "./Goals4";
import Goals5 from "./Goals5";
import Goals6 from "./Goals6";
import Goals7 from "./Goals7";
import Goals8 from "./Goals8";
import { FaArrowUp } from 'react-icons/fa';
import SEO from "../../../assets/SEO/SEO";

function Goals() {

    const [showScroll, setShowScroll] = useState(false);
    
      // Handle scroll position to show or hide the scroll-to-top button
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowScroll(true);
        } else {
          setShowScroll(false);
        }
      };
    
      // Scroll to top of the page when the button is clicked
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
      // Attach scroll event listener
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


    return (
        <div className="goals-page">
          <SEO
        title="Sustainability Goals | Jaisakthi Papers - Eco-Friendly Future"
        description="Jaisakthi Papers is committed to sustainability, ensuring eco-friendly manufacturing and reduced environmental impact."
        keywords="Sustainability Goals, Eco-Friendly Manufacturing, Green Paper Industry"
        image="/SEO5.jpeg"
        url="https://www.jaisakthipapers.com/sustainability-goals"
      />
            <div className="goals1">
                <Goals1 />
            </div>
            <div className="goals8">
                <Goals8 />
            </div>
            <div className="goals3">
                <Goals3 />
            </div>
            <div className="goals2">
                <Goals2 />
            </div>
            <div className="goals4">
                <Goals4 />
            </div>
            <div className="goals5">
                <Goals5 />
            </div>
            <div className="goals7">
                <Goals7 />
            </div>
            <div className="goals6">
                <Goals6 />
            </div>
            <div className="goals-footer">
                <Footer />
            </div>

            {/* Scroll to Top Button */}
                  {showScroll && (
                    <div className="scroll-to-top" onClick={scrollToTop}>
                      <FaArrowUp fontSize="large" />
                    </div>
                  )}
        </div>
    )
}

export default Goals;