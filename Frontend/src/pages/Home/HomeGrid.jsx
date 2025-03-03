import React, { useState, useEffect } from "react";
import "./Home1.css";

// Import images at the top (path remains the same)
import img1 from "../../assets/images/img22.webp";
import img2 from "../../assets/images/img23.png";
import img3 from "../../assets/images/img25.webp";
import img4 from "../../assets/images/img24.png";
import img5 from "../../assets/images/img26.jpg";
import img6 from "../../assets/images/img27.jpg";
import img7 from "../../assets/images/img30.webp";
import img8 from "../../assets/images/img31.webp";
import img9 from "../../assets/images/img32.webp";
import img10 from "../../assets/images/img33.webp";
import img11 from "../../assets/images/img34.jpg";
import img12 from "../../assets/images/img35.png";
import img13 from "../../assets/images/img36.png";
import img14 from "../../assets/images/img37.png";
import img15 from "../../assets/images/img38.png";
import img16 from "../../assets/images/img39.png";
import img17 from "../../assets/images/img40.png";
import img18 from "../../assets/images/img41.png";
import img19 from "../../assets/images/img42.png";
import img20 from "../../assets/images/img43.jpg";
import img21 from "../../assets/images/img44.webp";
import img22 from "../../assets/images/img45.webp";
import img23 from "../../assets/images/img50.jpg";
import img24 from "../../assets/images/img51.jpg";
import img25 from "../../assets/images/img52.png";
import img26 from "../../assets/images/img53.png";
import img27 from "../../assets/images/img54.png";
// import img28 from "../../assets/images/img55.jpg";
// import img29 from "../../assets/images/img56.jpg";
// import img30 from "../../assets/images/img58.webp";

// Image rotation logic for each grid
const useImageRotator = (images, rotationDuration) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fading out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false); // Fade back in
      }, 500); // Match the duration of the fade-out animation
    }, rotationDuration);

    return () => clearInterval(interval);
  }, [images.length, rotationDuration]);

  return { src: images[currentImageIndex].src, fade };
};

const Home1 = () => {
  // Arrays of images for each grid with durations
  const imagesForGrid1 = [{ src: img1 }, { src: img2 }, { src: img3 }];
  const imagesForGrid2 = [{ src: img4 }, { src: img5 }, { src: img6 }];
  const imagesForGrid3 = [{ src: img7 }, { src: img8 }, { src: img9 }];
  const imagesForGrid4 = [{ src: img10 }, { src: img11 }, { src: img12 }];
  const imagesForGrid5 = [{ src: img13 }, { src: img14 }, { src: img15 }];
  const imagesForGrid6 = [{ src: img16 }, { src: img17 }, { src: img18 }];
  const imagesForGrid7 = [{ src: img19 }, { src: img20 }, { src: img21 }];
  const imagesForGrid8 = [{ src: img22 }, { src: img23 }, { src: img24 }];
  const imagesForGrid9 = [{ src: img25 }, { src: img26 }, { src: img27 }];
//   const imagesForGrid10 = [{ src: img28 }, { src: img29 }, { src: img30 }];

  // Set different rotation durations for each grid
  const rotationDurationGrid1 = 2000;
  const rotationDurationGrid2 = 3000;
  const rotationDurationGrid3 = 4000;
  const rotationDurationGrid4 = 2500;
  const rotationDurationGrid5 = 3500;
  const rotationDurationGrid6 = 4500;
  const rotationDurationGrid7 = 2500;
  const rotationDurationGrid8 = 3500;
  const rotationDurationGrid9 = 4500;
//   const rotationDurationGrid10 = 2500;

  // Use hooks to manage image rotation for each grid independently
  const { src: currentImage1 } = useImageRotator(imagesForGrid1, rotationDurationGrid1);
  const { src: currentImage2 } = useImageRotator(imagesForGrid2, rotationDurationGrid2);
  const { src: currentImage3 } = useImageRotator(imagesForGrid3, rotationDurationGrid3);
  const { src: currentImage4 } = useImageRotator(imagesForGrid4, rotationDurationGrid4);
  const { src: currentImage5 } = useImageRotator(imagesForGrid5, rotationDurationGrid5);
  const { src: currentImage6 } = useImageRotator(imagesForGrid6, rotationDurationGrid6);
  const { src: currentImage7} = useImageRotator(imagesForGrid7, rotationDurationGrid7);
  const { src: currentImage8 } = useImageRotator(imagesForGrid8, rotationDurationGrid8);
  const { src: currentImage9 } = useImageRotator(imagesForGrid9, rotationDurationGrid9);
//   const { src: currentImage10, fade: fade10 } = useImageRotator(imagesForGrid10, rotationDurationGrid10);

  return (
    <div className="grid-container">
      <div className="gridrow1">
        <div className="grid1">
          <div className="grid1-column1">
            <div className="image-container">
              <img src={currentImage1} alt="Grid 1 Image 1" />
              <div className="grid-name">Sustainability Goals</div>
            </div>
          </div>
          <div className="grid1-column2">
            <div className="image-container">
              <img src={currentImage2} alt="Grid 1 Image 3" />
              <div className="grid-name">Buy Online</div>
            </div>
          </div>
        </div>
        <div className="grid2">
          <div className="image-container">
            <img src={currentImage3} alt="Grid 2 Image" />
            <div className="grid-name">Environmental Initiatives</div>
          </div>
        </div>
      </div>
      <div className="gridrow2">
        <div className="grid3">
          <div className="image-container">
            <img src={currentImage4} alt="Grid 3 Image" />
            <div className="grid-name">About Us</div>
          </div>
        </div>
        <div className="grid4">
          <div className="image-container">
            <img src={currentImage5} alt="Grid 4 Image" />
            <div className="grid-name">Products & Services</div>
          </div>
        </div>
        <div className="grid5">
          <div className="image-container">
            <img src={currentImage6} alt="Grid 5 Image" />
            <div className="grid-name">Contact Us</div>
          </div>
        </div>
      </div>
      <div className="gridrow3">
        <div className="grid6">
          <div className="image-container">
            <img src={currentImage7} alt="Grid 6 Image" />
            <div className="grid-name">Certifications</div>
          </div>
        </div>
        <div className="grid7">
          <div className="grid7-column1">
            <div className="image-container">
              <img src={currentImage8} alt="Grid 7 Column 1 Image" />
              <div className="grid-name">Location</div>
            </div>
          </div>
          <div className="grid7-column2">
            <div className="image-container">
              <img src={currentImage9} alt="Grid 7 Column 2 Image" />
              <div className="grid-name">Recycling Goals</div>
              <button className="explore-button">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
