import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Typography, Grid, Paper } from "@mui/material";
import video1 from '../../../assets/videos/home_page.mp4';
import image1 from '../../../assets/images/img22.webp';

const Quality5 = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Grid 
      container 
      sx={{ 
        maxHeight: { xs: "auto", md: "600px" }, 
        position: "relative", 
        flexDirection: { xs: "column", md: "row" },
        overflow: "hidden" // Ensures no overflow issues
      }}
    >
      {/* Vertical Text Section */}
<Box 
  sx={{ 
    position: "absolute", 
    left: 0, 
    top: 0, 
    minHeight: "100%", // Ensures it stays visible
    width: "60px", 
    backgroundColor: "#e06f1f", 
    display: { xs: "none", sm: "flex" }, // Hide vertical text on mobile
    alignItems: "center", 
    justifyContent: "center", 
    writingMode: "vertical-rl", 
    transform: "rotate(180deg)", 
    color: "white", 
    fontWeight: "bold", 
    fontSize: { xs: "12px", md: "14px" },
    zIndex: 10 // Ensures it's not hidden behind other elements
  }}
>
  WWW.JAISAKTHIPAPERS.COM
</Box>
      
      {/* Left Section */}
      <Grid 
        item 
        xs={12} 
        md={6} 
        sx={{ 
          backgroundColor: "white", 
          p: { xs: 0, md: 0 }, // Adjust padding for different screens
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" }, // Center align on mobile
          textAlign: { xs: "center", md: "left" }, 
        }}
        data-aos="fade-right"
      >
        <Grid sx={{padding: {xs: 2, md: 4}}}>
        <Typography variant="h3" sx={{ 
          fontWeight: 'bold', 
          color: '#616161', 
          pb: 2, 
          mt: {sm: '40px', md: '0px'},
          fontSize: { xs: "24px", md: "32px" },
          ml: { xs: "0px", sm: "50px" }, 
        }}>
          Our Quality & Services
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ 
          fontSize: { xs: "14px", md: "16px" }, 
          px: { xs: 2, md: 0 },
          ml: { xs: "0px", sm: "50px" },  
        }}>
At Jaisakthi Papers, we prioritize exceptional quality in our paper manufacturing process. 
          Our commitment to precision, sustainability, and innovation ensures that each product—
          from Kraft Board and Chip Board to Duplex Coated Sheets—is manufactured with superior strength, 
          durability, and eco-friendliness. Our dedication to excellence ensures that our paper 
          products serve diverse applications with reliability and consistency.        </Typography>
        
        <Grid container spacing={1} sx={{ mt: 4, textAlign: 'center', width: {xs: '100%', sm: '90%'}, marginLeft: {xs: '0px', sm: '50px', md: '50px'} }}>
          {[
            { value: "300+", label: "Shipping", bg: "#01579b" },
            { value: "150+", label: "Customer", bg: "#c51162" },
            { value: "400+", label: "Feedback", bg: "#1b5e20" }
          ].map((item, index) => (
            <Grid item xs={4} sm={4} key={index} sx={{ display: 'flex', flexDirection: 'column'}} data-aos="zoom-in" data-aos-delay={index * 200}>
              <Paper sx={{ backgroundColor: item.bg, color: "white", p: 2, textAlign: "center" }}>
                <Typography variant="h6" sx={{fontWeight: 'bold', fontSize: {xs: '14px', sm: '16px'}}}>{item.value}</Typography>
                <Typography variant="body2" sx={{fontSize: {xs: '14px', sm: '16px'}}}>{item.label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        </Grid>
        
        <Box 
          component="img"
          src={image1}
          alt="Shipping Port"
          sx={{ 
            width: "100%", 
            maxHeight: { xs: "200px", md: "300px" }, 
            objectFit: "cover",
            mt: 3,
          }}
          data-aos="fade-up"
        />
      </Grid>
      
      {/* Right Section */}
      <Grid 
        item 
        xs={12} 
        md={6} 
        sx={{ 
          position: "relative", 
          overflow: "hidden", 
          backgroundColor: '#e06f1f',
          display: "flex", 
          alignItems: "top",
          justifyContent: "center",
          p: { xs: 3, md: 2 } 
        }}
        data-aos="fade-left"
      >
        <Box
          component="video"
          src={video1}
          autoPlay
          loop
          muted
          controls
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: "90%" },
            height: {sm: 'auto', md: '550px'},
            maxHeight: "100%",
            objectFit: "contain",
            borderRadius: "20px"
          }}
          data-aos="flip-left"
          data-aos-delay={200}
        />
      </Grid>
    </Grid>
  );
};

export default Quality5;
