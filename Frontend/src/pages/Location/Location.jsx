import React, { useState, useEffect } from "react";
import Location1 from "./Location1";
import Footer from "../../components/Footer/Footer";
import { FaArrowUp } from 'react-icons/fa';
import Location2 from "./Location2";

function Location() {

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


    return(
        <div className="location-page">
            <div className="location1">
                <Location1 />
            </div>
            <div className="location2">
                <Location2 />
            </div>
            <div className="location-footer">
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

export default Location;