import React, { useEffect } from 'react';
import image1 from '../../assets/images/img62.png';
import image2 from '../../assets/images/img63.png';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles
import './Location2.css';

const Location2 = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Set the duration of animations
      once: false, // Only animate once (remove for infinite animation on scroll)
    });
  }, []);

  return (
    <div className='location2-page'>
      <div className="unique-aboutus-wrapper">
        <section className="unique-intro-section">
          <h3
            data-aos="fade-left"
            className="unique-journey-heading"
          >
            Our Journey in Nallagoundanpalayam
          </h3>
          <h1
            data-aos="fade-right"
            className="unique-main-heading"
          >
            Pioneering Sustainability in Erode District
          </h1>
          <p
            data-aos="fade-up"
            className="unique-description-text"
          >
            At our paper factory in Nallagoundanpalayam, we are committed to sustainable practices that reflect the values of our community. 
            By leveraging advanced recycling techniques and prioritizing environmental stewardship, we aim to make a positive impact on Erode and beyond.
          </p>
        </section>

        <section className="unique-vision-mission-container">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="unique-vision-box"
          >
            <img src={image1} alt="Our Vision" className="unique-vision-icon" />
            <h3 className="unique-vision-title">Our Location</h3>
            <p className="unique-vision-description">
              13B, Arunachalam Nagar,<br />
              Nalligoundanpalayam,<br />
              Erode,<br />
              Tamil Nadu - 638 452
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="unique-mission-box"
          >
            <img src={image2} alt="Our Mission" className="unique-mission-icon" />
            <h3 className="unique-mission-title">Our Contact</h3>
            <p className="unique-mission-description">
              You can reach us via mobile at +91-7094181144, connect with us on WhatsApp at +91-7094181144, 
              or email us at sowdamss@gmail.com. We look forward to hearing from you!
            </p>
          </div>
        </section>
      </div>

      <div className="map-container2">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62566.44308317593!2d77.37027972007007!3d11.450832717779459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba93d6fc886bc21%3A0xdc21e5cecccbed79!2s13B%2C%20Arunachalam%20nagar%2C%20Nalligoundanpalayam%2C%20Tamil%20Nadu%20638452!3m2!1d11.4508267!2d77.4114539!5e0!3m2!1sen!2sin!4v1734669814684!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Location2;
