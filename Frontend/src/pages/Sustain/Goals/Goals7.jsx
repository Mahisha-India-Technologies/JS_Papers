import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Goals7.css';

const Goals7 = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-in-out', once: false });
  }, []);

  return (
    <div className="content-wrapper-unique">
      <div 
        className="content-header-unique" 
        data-aos="fade-up" // AOS animation for the header
      >
        <h1 className="content-title-unique" data-aos="fade-right">Sustainable Goals for Paper based Recycled Products Industry</h1>
        <p 
          className="content-description-unique" 
          data-aos="fade-right" // AOS animation for the paragraph
        >
          Sustainability in the recycling industry isn’t just a commitment – it’s a responsibility we owe to people and the planet. 
          From ensuring eco-friendly production processes to using renewable resources, we’re dedicated to minimizing our 
          environmental footprint while meeting your needs. By innovating sustainable practices, reducing waste, and conserving water, 
          we aim to build a greener future for the generations to come. Our focus is on creating a positive impact on communities, 
          fostering responsible consumption, and driving meaningful change in the industry.
        </p>
      </div>

      {/* Container for scrolling quote cards */}
      <div className="scrolling-quotes-wrapper-unique">
        <div className="scrolling-quotes-content-unique">
          {/* Quote cards with AOS animations */}
          <div className="quote-card-unique" data-aos="flip-left">
            <p className="quote-text-unique">
              Sustainability starts with understanding our shared responsibility. Every step we take today 
              shapes the greener path we leave behind.
            </p>
            <p className="quote-author-unique">- Sustainable Leader</p>
          </div>

          <div className="quote-card-unique" data-aos="flip-left" data-aos-delay="200">
            <p className="quote-text-unique">
              The recycling industry has the power to turn forests into friends, not foes. Together, let’s champion renewable resources.
            </p>
            <p className="quote-author-unique">- Environmental Advocate</p>
          </div>

          <div className="quote-card-unique" data-aos="flip-left" data-aos-delay="400">
            <p className="quote-text-unique">
              A future built on sustainability is a future built on hope. Let’s turn innovation into inspiration for a cleaner tomorrow.
            </p>
            <p className="quote-author-unique">- Industry Visionary</p>
          </div>

          <div className="quote-card-unique" data-aos="flip-left" data-aos-delay="600">
            <p className="quote-text-unique">
              Sustainable practices don’t just protect our planet; they empower the people who depend on it.
            </p>
            <p className="quote-author-unique">- Community Advocate</p>
          </div>

          <div className="quote-card-unique" data-aos="flip-left" data-aos-delay="800">
            <p className="quote-text-unique">
              Our sustainable goals are rooted in the belief that a thriving planet is the foundation of thriving communities.
            </p>
            <p className="quote-author-unique">- Eco Innovator</p>
          </div>

          <div className="quote-card-unique" data-aos="flip-left" data-aos-delay="1000">
            <p className="quote-text-unique">
              Innovation in the recycling industry means rethinking how we produce and consume, for a circular, waste-free future.
            </p>
            <p className="quote-author-unique">- Sustainability Expert</p>
          </div>

          <div className="quote-card-unique" data-aos="flip-left" data-aos-delay="1200">
            <p className="quote-text-unique">
              Every choice we make echoes into the future. Let’s make choices that resonate with responsibility and care.
            </p>
            <p className="quote-author-unique">- Conscious Consumer</p>
          </div>

          <div className="quote-card-unique" data-aos="flip-left" data-aos-delay="1400">
            <p className="quote-text-unique">
              A sustainable recycling industry is the paper trail we want to leave behind for a healthier planet.
            </p>
            <p className="quote-author-unique">- Environmentalist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals7;
