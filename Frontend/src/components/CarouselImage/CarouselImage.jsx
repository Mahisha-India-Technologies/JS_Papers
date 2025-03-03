import React from 'react';
import PropTypes from 'prop-types';
import './CarouselImage.css';

function CarouselImage({ text, imageSrc }) {
  return (
    <div className="carousel-image-container">
      {/* Image */}
      <img
        src={imageSrc}
        alt={text}
        className="carousel-image"
      />
      {/* Overlay */}
      <div className="carousel-overlay">
        {/* Overlay Text */}
        <div className="carousel-overlay-text">{text}</div>
      </div>
    </div>
  );
}

CarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default CarouselImage;
