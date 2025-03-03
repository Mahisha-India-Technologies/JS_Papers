import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './EcoFriendly5.css';

const EcoFriendly5 = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-in-out', once: false });
  }, []);

  return (
    <div className="content-wrapper-unique">
      <div 
        className="content-header-unique" 
        data-aos="fade-up" // AOS animation for the header
      >
        <h1 className="content-title-unique" data-aos="fade-right">Why Choose Us</h1>
        <p 
          className="content-description-unique" 
          data-aos="fade-right" // AOS animation for the paragraph
        >
          At Jaisakthi Papers, we are committed to providing eco-friendly paper products that not only meet your needs but also contribute to a sustainable future. Our dedication to environmental responsibility and quality craftsmanship sets us apart in the industry.
        </p>
      </div>

      {/* Container for scrolling quote cards */}
      <div className="scrolling-quotes-wrapper-unique">
        <div className="scrolling-quotes-content-unique">
          {/* Quote cards with AOS animations */}
          <div className="quote-card-unique" data-aos="flip-left">
            <p className="quote-text-unique">
              "Choosing eco-friendly products can reduce waste, improve public perception, and potentially attract eco-conscious customers."
            </p>
            <p className="quote-author-unique">- Green Paper Products</p>
          </div>

          <div className="quote-card-unique" data-aos="flip-left" data-aos-delay="200">
            <p className="quote-text-unique">
              "SFI-certified paper and paperboard can benefit the environment by reducing deforestation, protecting biodiversity, and supporting local communities."
            </p>
            <p className="quote-author-unique">- SupremeX</p>
          </div>

          <div className="quote-card-unique" data-aos="flip-left" data-aos-delay="400">
            <p className="quote-text-unique">
              "Our commitment to sustainability is reflected in our product offerings. We provide a variety of eco-friendly packaging options."
            </p>
            <p className="quote-author-unique">- Plus Packaging</p>
          </div>

          <div className="quote-card-unique" data-aos="flip-left" data-aos-delay="600">
            <p className="quote-text-unique">
              "Sustainable packaging tends to be lighter, smaller, and, most importantly, compostable or recyclable."
            </p>
            <p className="quote-author-unique">- Fiber Interior Packaging</p>
          </div>

          <div className="quote-card-unique" data-aos="flip-left" data-aos-delay="800">
            <p className="quote-text-unique">
              "Tree-Free Paper Products have many environmental benefits, which protect the environment and improve our health."
            </p>
            <p className="quote-author-unique">- Packmate</p>
          </div>

          <div className="quote-card-unique" data-aos="flip-left" data-aos-delay="1000">
            <p className="quote-text-unique">
              "Our commitment to environmental sustainability drives everything we do: From safe manufacturing and products to community stewardship and involvement."
            </p>
            <p className="quote-author-unique">- NORPAC Paper</p>
          </div>

          <div className="quote-card-unique" data-aos="flip-left" data-aos-delay="1200">
            <p className="quote-text-unique">
              "Incorporating eco-friendly packaging shows your company is informed, responsible, and trustworthy."
            </p>
            <p className="quote-author-unique">- Safeguard</p>
          </div>

          <div className="quote-card-unique" data-aos="flip-left" data-aos-delay="1400">
            <p className="quote-text-unique">
              "EcoDuro is a company that is focused on developing products for sustainable business practices."
            </p>
            <p className="quote-author-unique">- Wikipedia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoFriendly5;
