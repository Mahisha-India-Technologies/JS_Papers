import React, { useState, useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import Environment1 from "./Environment1";
import Environment2 from "./Environment2";
import Environment3 from "./Environment3";
import Environment4 from "./Environment4";
import Environment5 from "./Environment5";
import Environment6 from "./Environment6";
import Environment7 from "./Environment7";
import Environment8 from "./Environment8";
import Environment9 from "./Environment9";
import Environment10 from "./Environment10";
import { FaArrowUp } from 'react-icons/fa';
import './Environment.css';
import SEO from "../../../assets/SEO/SEO";

function Environment() {

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
        <div className="environment-page">
          <SEO
        title="Environmental Initiatives | Jaisakthi Papers - Green Manufacturing"
        description="Learn about Jaisakthi Papers' efforts in reducing environmental impact through green manufacturing processes."
        keywords="Environmental Initiatives, Green Manufacturing, Eco-Friendly Paper, Jaisakthi Papers"
        image="../../../assets/images/SEO6.jpeg"
        url="https://www.jaisakthipapers.com/environmental-initiatives"
      />
            <div className="environment1">
                <Environment1 />
            </div>
            <div className="environment2">
                <Environment2 />
            </div>
            <div className="environment10">
                <Environment10 />
            </div>
            <div className="environment3">
                <Environment3 />
            </div>
            <div className="environment4">
                <Environment4 />
            </div>
            <div className="environment5">
                <Environment5 />
            </div>
            <div className="environment6">
                <Environment6 />
            </div>
            <div className="environment7">
                <Environment7 />
            </div>
            <div className="environment8">
                <Environment8 />
            </div>
            {/* <div className="environment9">
                <Environment9 />
            </div> */}
            <div className="footer">
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

export default Environment;