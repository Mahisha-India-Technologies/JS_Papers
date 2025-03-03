import React, { useState, useEffect } from "react";
import Categories1 from "./Categories1";
import Footer from "../../../components/Footer/Footer";
import Categories2 from "./Categories2";
import Categories3 from "./Categories3";
import Categories5 from "./Categories5";
import Categories4 from "./Categories4";
import Categories6 from "./Categories6";
import Categories7 from "./Categories7";
import Categories8 from "./Categories8";
import Categories10 from "./Categories10";
import { FaArrowUp } from "react-icons/fa";

function Categories() {

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
        <div className="categories-page">
            <div className="categories1">
                <Categories1 />
            </div>
            <div className="categories2">
                <Categories2 />
            </div>
            <div className="categories3">
                <Categories3 />
            </div>
            <div className="categories4">
                <Categories4 />
            </div>
            <div className="categories5">
                <Categories5 />
            </div>
            <div className="categories7">
                <Categories7 />
            </div>
            <div className="categories8">
                <Categories8 />
            </div>
            <div className="categories10">
                <Categories10 />
            </div>
            <div className="categories6">
                <Categories6 />
            </div>
            <div className="categories-footer">
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

export default Categories;