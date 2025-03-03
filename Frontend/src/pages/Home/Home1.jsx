import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import Marquee from 'react-marquee-slider';
import './Home1.css'; // Updated CSS file with animations
import { FaArrowRight } from 'react-icons/fa';
import mysqlLogo from '../../assets/images/img75.jpg';
import reactLogo from '../../assets/images/img78.jpg';
import jsLogo from '../../assets/images/img79.jpg';
import nodeLogo from '../../assets/images/img80.webp';
import htmlLogo from '../../assets/images/img81.jpg';
import cssLogo from '../../assets/images/img82.jpg';
import laravelLogo from '../../assets/images/img83.avif';
import pythonLogo from '../../assets/images/img84.jpg';
import reactNativeLogo from '../../assets/images/img85.jpg';
import flutterLogo from '../../assets/images/img86.jpg';
import expressLogo from '../../assets/images/img87.webp';
import jqueryLogo from '../../assets/images/img91.avif';
import wordpressLogo from '../../assets/images/img92.jpg';
import mongodbLogo from '../../assets/images/img93.jpeg';
import codeigniterLogo from '../../assets/images/img94.jpg';
import typescriptLogo from '../../assets/images/img95.jpg';
import androidLogo from '../../assets/images/img96.webp';
import image1 from '../../assets/images/home-img2.svg';
import image2 from '../../assets/images/home-img3.svg';
import image3 from '../../assets/images/home-img4.svg';
import image4 from '../../assets/images/home-img5.svg';
import image5 from '../../assets/images/home-img6.svg';


const logos1 = [
   mysqlLogo,  mongodbLogo, jqueryLogo, wordpressLogo, flutterLogo, pythonLogo, typescriptLogo, nodeLogo,
];

const logos2 = [
  reactLogo, jsLogo, htmlLogo, cssLogo, laravelLogo, reactNativeLogo, expressLogo, androidLogo, codeigniterLogo
];

const images = [
  image1, image2, image3, image4, image5,
];

const handleWhatsAppClick = (e) => {
  e.preventDefault();
  window.open('https://wa.me/917094181144', '_blank'); // Opens WhatsApp with the given number in a new tab
};

const Home1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="home-container" sx={{ padding: { xs: '20px', md: '50px' }, fontFamily: 'Excon' }}>
      <Grid container spacing={4} justifyContent="space-between" alignItems="center">
        {/* Hero Section with Text Slide Animations */}
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h2" 
            className="text-slide-animation text-slide-delay-1"
            sx={{ fontSize: { xs: '0.8rem', md: '1.2rem' }, color: '#001a33', fontFamily: 'Excon', marginBottom: '15px', textAlign: {xs: 'center', md: 'left'} }}
          >
            Jai Sakthi Papers Recycled Product Firm
          </Typography>
          
          <Typography 
            variant="h2" 
            className="text-slide-animation text-slide-delay-2"
            sx={{ fontSize: { xs: '2.2rem', md: '4rem' }, fontWeight: 'bold', color: '#001a33', fontFamily: 'Excon', textAlign: {xs: 'center', md: 'left'} }}
          >
           Explore your Initiatives with <strong style={{color: '#e06f1f'}}>Jai Sakthi </strong>Papers
          </Typography>
          
          <Typography 
            variant="body1" 
            className="text-slide-animation text-slide-delay-3"
            sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, margin: '20px 0', fontFamily: 'Excon', textAlign: {xs: 'center', md: 'left'} }}
          >
            Get the pure & recyled Environment-Friendly Products for your business within your budget.
          </Typography>
          
          <Button 
            className="text-slide-animation text-slide-delay-4"
            onClick={handleWhatsAppClick}
            sx={{
              textTransform: 'none', border: '2px solid #001a33', color: '#001a33', fontFamily: 'Excon', 
              padding: '12px 24px', borderRadius: '50px', gap: '10px', textAlign: {xs: 'center', md: 'left'},
              width: { xs: '100%', sm: 'auto' },
              '&:hover': { backgroundColor: '#001a33', color: 'white', transform: 'scale(1.1)', transition: 'all 0.3s ease-in-out' }
            }}
          >
            Get Started
            <FaArrowRight />
          </Button>
        </Grid>

        {/* Image Display with rotation */}
        <Grid item xs={12} md={5} alignItems='center'>
          <div>
            <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} className="static-image" />
          </div>
        </Grid>
      </Grid>

      {/* Scrolling Logos */}
      <Box className="scrolling-logos" sx={{ marginTop: {xs: '70px', sm: '140px'} }}>
        <Marquee velocity={20} direction="rtl" className="marquee-row1">
          {logos1.map((logo, idx) => (
            <img key={idx} src={logo} alt={`logo ${idx}`} className="logo-image1" />
          ))}
        </Marquee>
        <Marquee velocity={20} direction="ltr" className="marquee-row2">
          {logos2.map((logo, idx) => (
            <img key={idx} src={logo} alt={`logo ${idx}`} className="logo-image2" />
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default Home1;
