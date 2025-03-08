import React, { useState, useEffect } from "react";
import Home1 from "./Home1";
import Footer from "../../components/Footer/Footer";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Recycle4 from "../Sustain/Recycle/Recycle4";
import Recycle5 from "../Sustain/Recycle/Recycle5";
import Home6 from "./Home6";
import Home5 from "./Home5";
import Environment10 from "../Sustain/Environment/Environment10";
import Quality5 from "../Products/Quality/Quality5";
import Quality6 from "../Products/Quality/Quality6";
import Home7 from "./Home7";
import './Home.css';
import { FaArrowUp } from "react-icons/fa";
import Home8 from "./Home8";
import SEO from "../../assets/SEO/SEO";


function Home() {

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
        <div className='home-page-layout'>
            <SEO 
        title="Jaisakthi Papers | Eco-Friendly Recycled Paper Boards"
        description="Jaisakthi Papers manufactures high-quality, eco-friendly paper boards like Kraft Board, Chip Board, and Duplex Sheets."
        keywords="Recycled Paper Products, Kraft Board, Chip Board, Duplex Sheets, Eco-Friendly, Jaisakthi Papers"
        // image="../../assets/images/SEO1.jpeg"
        image="/SEO1.jpeg"
        url="https://www.jaisakthipapers.com"
      />
            <div className="home1">
                <Home1 />
            </div>
            <div className="home12">
                <Home8 />
            </div>
            <div className="home5">
                <Home3 />
            </div>
            <div className="home2">
                <Recycle4 />
            </div>
            <div className="home3">
                <Recycle5 />
            </div>
            <div className="home6">
                <Home4 />
            </div>
            <div className="home8">
                <Home5 />
            </div>
            <div className="home13">
                <Home7 />
            </div>
            <div className="home9">
                <Environment10 />
            </div>
            <div className="home10">
                <Quality5 />
            </div>
            <div className="home7">
                <Home6 />
            </div>
            <div className="home11">
                <Quality6 />
            </div>
            <div className="home4">
                <Home2 />
            </div>
            <div className="home-footer">
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

export default Home;