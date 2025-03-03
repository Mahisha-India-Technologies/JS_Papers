import React, { useState, useEffect } from "react";
import Packaging1 from "./Packaging1";
import Footer from "../../../components/Footer/Footer";
import Packaging2 from "./Packaging2";
import Packaging3 from "./Packaging3";
import Environment10 from "../../Sustain/Environment/Environment10";
import Packaging4 from "./Packaging4";
import Packaging5 from "./Packaging5";
import { FaArrowUp } from "react-icons/fa";
import './Packaging.css';

function Packaging() {

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
        <div className="packaging-page">
            <div className="packaging1">
                <Packaging1 />
            </div>
            <div className="packaging2">
                <Packaging2 />
            </div>
            <div className="packaging5">
                <Packaging4 />
            </div>
            <div className="packaging6">
                <Packaging5 />
            </div>
            <div className="packaging4">
                <Environment10 />
            </div>
            <div className="packaging3">
                <Packaging3 />
            </div>
            <div className="packaging-footer">
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

export default Packaging;