import React, { useState, useEffect} from "react";
import Certification1 from "./Certification1";
import Footer from "../../../components/Footer/Footer";
import Certification2 from "./Certification2";
import Certification3 from "./Certification3";
import Certification4 from "./Certification4";
import Certification5 from "./Certification5";
import { FaArrowUp } from 'react-icons/fa';

function Certification() {

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
        <div className="certification-page">
            <div className="certification1">
                <Certification1 />
            </div>
            <div className="certification2">
                <Certification2 />
            </div>
            <div className="certification3">
                <Certification3 />
            </div>
            <div className="certification4">
                <Certification4 />
            </div>
            <div className="certification5">
                <Certification5 />
            </div>
            <div className="certification-footer">
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

export default Certification;