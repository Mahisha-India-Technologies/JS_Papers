import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import About1 from "./About1";
import Recycle4 from "../Sustain/Recycle/Recycle4";
import Recycle5 from "../Sustain/Recycle/Recycle5";
import Recycle6 from "../Sustain/Recycle/Recycle6";
import Goals8 from "../Sustain/Goals/Goals8";
import { FaArrowUp } from 'react-icons/fa';
import About2 from "./About2";
import About3 from "./About3";
import SEO from "../../assets/SEO/SEO";

function About() {

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
        <div className="about-page">
          <SEO 
        title="About Us | Jaisakthi Papers - Eco-Friendly Paper Manufacturer"
        description="Learn more about Jaisakthi Papers, our mission, and our commitment to sustainability in the recycled paper product industry."
        keywords="About Jaisakthi Papers, Recycled Paper Industry, Eco-Friendly Manufacturer, Sustainable Paper"
        image="/SEO2.jpeg"
        url="https://www.jaisakthipapers.com/about"
      />
            <div className="about1">
                <About1 />
            </div>
            <div className="about7">
                <About2 />
            </div>
            <div className="about2">
                <About3 />
            </div>
            <div className="about3">
                <Recycle4 />
            </div>
            <div className="about4">
                <Recycle5 />
            </div>
            <div className="about5">
                <Recycle6 />
            </div>
            <div className="about6">
                <Goals8 />
            </div>
            <div className="about-footer">
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

export default About;