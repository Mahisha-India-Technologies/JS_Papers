import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Card, CardContent, Typography, Box, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import image1 from "../../../assets/images/img26.jpg";
import image2 from "../../../assets/images/img25.webp";
import image3 from "../../../assets/images/img34.jpg";
import backgroundImage from "../../../assets/images/img33.webp";

const StyledDots = styled("ul")({
  display: "flex !important",
  justifyContent: "center",
  padding: 0,
  marginTop: 20,
  "& li": {
    margin: "0 5px",
    "& button": {
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: "#fff",
      opacity: 0.6,
      transition: "all 0.3s ease",
    },
    "&.slick-active button": {
      background: "#FFA726",
      opacity: 1,
      transform: "scale(1.2)",
    },
  },
});

const Quality3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const isMobile = useMediaQuery("(max-width:600px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: isMobile ? false : true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
  };

  const categories = [
    {
      title: "PACKAGING",
      description: `
        Our packaging solutions are designed to protect your products, whatever challenges they face. 
        We use high-quality materials to ensure durability, sustainability, and cost-effectiveness. 
        From corrugated boxes to flexible pouches and rigid containers, we offer diverse solutions to 
        meet industry demands.
      `,
      image: image1,
    },
    {
      title: "BAG-IN-BOX PACKAGING",
      description: `
        Our Bag-in-Box packaging provides an advanced solution for liquid and semi-liquid products. 
        This packaging method extends product shelf life by minimizing air exposure and ensuring freshness. 
        It is widely used in industries like beverages, dairy, chemicals, and pharmaceuticals due to its durability and leak-proof properties. 
      `,
      image: image2,
    },
    {
      title: "ECOMMERCE PACKAGING",
      description: `
        In the fast-paced world of eCommerce, secure and efficient packaging is crucial. 
        Our eCommerce packaging solutions are designed to protect products throughout the shipping process while enhancing customer experience. 
        We offer tamper-proof and durable packaging that minimizes the risk of damage during transit. 
      `,
      image: image3,
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        py: 10,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          color="white"
          fontWeight="bold"
          gutterBottom
          sx={{ textTransform: "none", mb: 4, fontSize: { xs: "20px", sm: "34px" } }}
          data-aos="fade-down"
        >
          Explore Our Packaging Products
        </Typography>
        <Slider {...settings}>
          {categories.map((category, index) => (
            <Box key={index} sx={{ px: 2 }} data-aos="fade-right">
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: 10,
                  mb: "40px",
                  overflow: "hidden",
                  height: isMobile ? "700px" : 500,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.03)", boxShadow: 12 },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "70%",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={category.image}
                    alt={category.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      "&:hover": { transform: "scale(1.1)" },
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    backgroundColor: "#ffffff",
                    textAlign: "center",
                    p: 3,
                  }}
                >
                  <Typography variant="h6" color="primary" fontWeight="bold" sx={{ textTransform: "uppercase" }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mt={1} sx={{ fontSize: "1rem", color: "#333" }}>
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Quality3;