import React, { useEffect } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const packagingMaterials = [
  {
    title: "Kraft Board Packaging",
    points: [
      "Strong, tear-resistant, and durable",
      "Ideal for corrugated boxes, cartons, and rigid packaging",
      "Available in both natural brown and bleached white options",
      "100% recyclable and environmentally friendly",
    ],
  },
  {
    title: "Chip Board Packaging",
    points: [
      "Cost-effective and versatile",
      "Commonly used for rigid box packaging, backing boards, and stationery",
      "Offers excellent printability for branding purposes",
      "Suitable for most common applications and daily product packaging",
    ],
  },
  {
    title: "Duplex Coated Board",
    points: [
      "Glossy, smooth surface for high-quality printing and branding",
      "Used for premium packaging, including food boxes, pharmaceutical packaging, and retail product cartons",
      "Suitable for highly attractive product packaging",
    ],
  },
  {
    title: "Duplex Uncoated Board",
    points: [
      "A more economical option compared to coated duplex board",
      "Ideal for shipping boxes, cartons, and general packaging applications",
      "100% recyclable and environmentally friendly",
      "Can be used for packing more secured materials",
    ],
  },
  {
    title: "MM Board",
    points: [
      "Multi-layered construction for extra strength",
      "100% recyclable and environmentally friendly",
      "Suitable for industrial and heavy-duty packaging",
      "Gives extra durability with constructive products with highly strengthened materials",
    ],
  },
  {
    title: "Laminated Sheets",
    points: [
      "Enhanced durability and resistance against moisture, oil, and grease",
      "Widely used in food and beverage packaging, takeaway containers, and promotional materials",
      "Suitable for water-safe products with ensured waterproof applications",
    ],
  },
  {
    title: "Poly Coated Sheets",
    points: [
      "Waterproof and grease-resistant",
      "Designed for food-safe packaging applications, disposable containers, and frozen food packaging",
      "Available in moisture-resistant and food-safe variants",
    ],
  },
];

const Packaging5 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      style={{
        textAlign: "center",
        padding: "40px 20px",
        background: "linear-gradient(135deg, rgb(236, 203, 180), rgb(248, 246, 244), rgb(244, 195, 159), rgb(246, 237, 231))",
      }}
    >
      {/* Title with Fade Animation */}
      <Typography
        data-aos="fade-up"
        sx={{
          fontSize: {xs: '1.5rem', sm: '2.5rem'},
          fontWeight: "bold",
          color: "#e06f1f",
          marginBottom: "20px",
          textTransform: "none",
          letterSpacing: "1.5px",
        }}
      >
        Our Range of Packaging Materials
      </Typography>

      {/* Description with Slide Animation */}
      <Typography
        data-aos="fade-right"
        sx={{
          fontSize: {xs: '1rem', sm: '1.2rem'},
          color: "#444",
          maxWidth: "800px",
          margin: "auto",
          lineHeight: "1.6",
        }}
      >
        We manufacture a diverse portfolio of premium-quality paperboard and coated sheets with customizable thickness (1mm to 3mm) and GSM range (180 GSM to 450 GSM). 
        Our materials cater to industries such as FMCG, pharmaceuticals, e-commerce, electronics, and food & beverages.
      </Typography>

      {/* Grid Layout for Cards */}
      <Grid container spacing={4} justifyContent="center" sx={{ marginTop: {xs: '15px', sm: '30px'} }}>
        {packagingMaterials.map((material, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} data-aos="flip-left">
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "280px",
                height: "100%",
                padding: {xs: '10px', sm: '20px'},
                transition: "transform 0.3s ease-in-out",
                backgroundColor: "#fff",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Typography
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#e06f1f",
                    textAlign: "center",
                  }}
                >
                  {material.title}
                </Typography>
                <ul style={{ textAlign: "left", marginTop: "10px", paddingLeft: "20px" }}>
                  {material.points.map((point, i) => (
                    <li key={i} style={{ color: "#555", fontSize: "1rem", lineHeight: "1.6" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Packaging5;
