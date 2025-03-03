import React, { useState, useEffect } from "react";
import Recycle1 from "./Recycle1";
import Footer from "../../../components/Footer/Footer";
import Recycle2 from "./Recycle2";
import Recycle3 from "./Recycle3";
import Recycle4 from "./Recycle4";
import Recycle5 from "./Recycle5";
import Recycle6 from "./Recycle6";
import Recycle7 from "./Recycle7";
import Recycle8 from "./Recycle8";
import { FaArrowUp } from 'react-icons/fa';

function Recycle() {

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
        <div className="recycle-page">
            <div className="recycle1">
                <Recycle1 />
            </div>
            <div className="recycle2">
                <Recycle2 />
            </div>
            <div className="recycle3">
                <Recycle3 />
            </div>
            <div className="recycle4">
                <Recycle4 />
            </div>
            <div className="recycle5">
                <Recycle5 />
            </div>
            <div className="recycle6">
                <Recycle6 />
            </div>
            <div className="recycle7">
                <Recycle7 />
            </div>
            <div className="recycle8">
                <Recycle8 />
            </div>
            <div className="recycle-footer">
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

export default Recycle;