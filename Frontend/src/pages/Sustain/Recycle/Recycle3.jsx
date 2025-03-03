import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../Certification/Certification2.css';

const Recycle3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      easing: 'ease-in-out', // Animation easing
      once: false, // Animation occurs only once
      offset: 50, // Trigger offset
    });
  }, []);

  return (
    <div className="about-section-container">
      <div
        className="about-header-container"
        data-aos="fade-up" // Apply AOS animation
      >
        <div className="about-title-container">
          <h1 className="about-title">
            Commitment to Recycling, Sustainability, and Environmental Goals in the Recycle Industry
          </h1>
        </div>
        <div className="about-description-container">
          <p className="about-description">
            At Jaisakthi Papers, we take pride in leading the charge towards a more sustainable and eco-friendly future within the recycling industry. Our goals include reducing waste, optimizing material recovery, and improving recycling rates. Through certified practices and innovative recycling solutions, we aim to minimize landfill contributions, increase resource efficiency, and drive sustainable paper based Recycled products production processes.
          </p>
        </div>
      </div>

      {/* <div className="about-cards">
        <div className="about-card" data-aos="flip-left">
          <div className="about-icon achievement-icon"></div>
          <h2 className="card-title">Material Recovery through Recycling</h2>
          <p className="card-description">
            Ensures that paper waste is effectively recovered and reused, reducing environmental impact and promoting sustainable resource use.
          </p>
        </div>

        <div className="about-card" data-aos="flip-right">
          <div className="about-icon startup-icon"></div>
          <h2 className="card-title">Circular Economy in Paper Production</h2>
          <p className="card-description">
            Supports the transition to a circular economy by closing the loop of paper production, reusing materials, and reducing resource extraction.
          </p>
        </div>

        <div className="about-card special-card" data-aos="zoom-in">
          <div className="about-icon motto-icon"></div>
          <h2 className="card-title">Enhancing Recycling Rates</h2>
          <p className="card-description">
            Focuses on improving the efficiency of recycling programs to increase the percentage of paper recycled, contributing to reduced waste and a cleaner environment.
          </p>
        </div>

        <div className="about-card" data-aos="fade-left">
          <div className="about-icon approach-icon"></div>
          <h2 className="card-title">Innovative Waste Management</h2>
          <p className="card-description">
            Implements innovative strategies for managing paper waste, ensuring that all recyclable materials are diverted from landfills and reused in production processes.
          </p>
        </div>

        <div className="about-card" data-aos="fade-right">
          <div className="about-icon achievement2-icon"></div>
          <h2 className="card-title">Minimizing Landfill Contributions</h2>
          <p className="card-description">
            Focuses on reducing the volume of paper waste sent to landfills through improved recycling techniques and zero-waste initiatives.
          </p>
        </div>

        <div className="about-card special-card" data-aos="zoom-out">
          <div className="about-icon startup2-icon"></div>
          <h2 className="card-title">Eco-Friendly Recycled Products</h2>
          <p className="card-description">
            Promotes the use of eco-friendly recycled paper products that contribute to sustainable consumption and production, reducing reliance on virgin materials.
          </p>
        </div>

        <div className="about-card" data-aos="fade-up">
          <div className="about-icon motto2-icon"></div>
          <h2 className="card-title">Closed-Loop Recycling Systems</h2>
          <p className="card-description">
            Implements closed-loop systems where paper products are continuously recycled and reused, minimizing the need for new raw materials.
          </p>
        </div>

        <div className="about-card" data-aos="fade-down">
          <div className="about-icon approach2-icon"></div>
          <h2 className="card-title">Community Recycling Education</h2>
          <p className="card-description">
            Promotes awareness and education about recycling among communities, encouraging better waste separation and participation in recycling programs.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Recycle3;
