import React, { useState, useEffect } from "react";
import EcoFriendly1 from "./EcoFriendly1";
import Footer from "../../../components/Footer/Footer";
import EcoFriendly2 from "./EcoFriendly2";
import EcoFriendly3 from "./EcoFriendly3";
import EcoFriendly4 from "./EcoFriendly4";
import EcoFriendly5 from "./EcoFriendly5";
import Recycle8 from "../../Sustain/Recycle/Recycle8";
import { FaArrowUp } from "react-icons/fa";
import './EcoFriendly.css';

function EcoFriendly() {

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
        <div className="eco-friendly-page">
            <div className="eco1">
                <EcoFriendly1 />
            </div>
            <div className="eco4">
                <EcoFriendly4 />
            </div>
            <div className="eco2">
                <EcoFriendly2 />
            </div>
            <div className="eco3">
                <EcoFriendly3 />
            </div>
            <div className="eco5">
                <EcoFriendly5 />
            </div>
            <div className="eco6">
                <Recycle8 />
            </div>
            <div className="eco-friendly-footer">
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

export default EcoFriendly;