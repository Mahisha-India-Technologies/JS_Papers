import React, { useState, useEffect } from "react";
import Quality1 from "./Quality1";
import Footer from "../../../components/Footer/Footer";
import Quality3 from "./Quality3";
import Quality5 from "./Quality5";
import Quality6 from "./Quality6";
import Quality7 from "./Quality7";
import { FaArrowUp } from "react-icons/fa";

function Quality() {

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
        <div className="quality-page">
            <div className="quality1">
                <Quality1 />
            </div>
            <div className="quality7">
                <Quality7 />
            </div>
            <div className="quality3">
                <Quality3 />
            </div>
            <div className="quality4">
                <Quality5 />
            </div>
            <div className="quality6">
                <Quality6 />
            </div>
            <div className="quality-footer">
                <Footer/>
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

export default Quality;