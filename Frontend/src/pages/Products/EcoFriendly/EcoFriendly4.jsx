import React, { useEffect } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const ecoProducts = [
  {
    title: "Kraft Board (Unbleached & Recyclable)",
    description: "100% biodegradable and recyclable. Ideal for food packaging, shopping bags, and cartons. Strong and durable.",
  },
  {
    title: "Chip Board (Made from Recycled Materials)",
    description: "Manufactured from repurposed paper fibers, reducing deforestation. Used in stationery, rigid packaging, and notebook backings.",
  },
  {
    title: "Duplex Board (Uncoated, Recyclable Option)",
    description: "A cost-effective, sustainable alternative to plastic. Commonly used for retail and consumer goods packaging.",
  },
  {
    title: "Eco-Friendly Laminated Sheets",
    description: "Made with water-based adhesives instead of harmful chemicals. Provides moisture and oil resistance while remaining biodegradable.",
  },
  {
    title: "Biodegradable Poly Coated Sheets",
    description: "Maintains water resistance without plastic waste. Ideal for food packaging, takeaway boxes, and disposable tableware.",
  },
];

const EcoFriendly4 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      style={{
        textAlign: "center",
        padding: "50px 20px",
        background: "linear-gradient(135deg, rgb(248, 246, 244), rgb(246, 230, 219), rgb(248, 215, 191))",
      }}
    >
      <Typography
        data-aos="fade-up"
        sx={{ fontSize: {xs:'1.5rem', sm: '2.5rem'}, fontWeight: "bold", color: "#e06f1f", marginBottom: "20px" }}
      >
        Our Eco-Friendly Product Offerings
      </Typography>
      <Typography data-aos="fade-right" sx={{ fontSize: {xs: '1rem', sm: '1.2rem'}, color: "#444", maxWidth: "800px", margin: "auto", lineHeight: "1.6" }}>
        By switching to our eco-friendly packaging materials, businesses can reduce their environmental footprint while maintaining packaging functionality and durability.
      </Typography>
      <Grid container spacing={4} justifyContent="center" style={{ marginTop: "30px" }}>
        {ecoProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} data-aos="zoom-in">
            <Card
              sx={{
                height: "100%",
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#fff",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                borderLeft: "8px solid #e06f1f",
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
              }}
            >
              <CardContent>
                <Typography sx={{ fontSize: {xs: '1.2rem', sm: '1.5rem'}, fontWeight: "bold", color: "#e06f1f" }}>{product.title}</Typography>
                <Typography sx={{ color: "#555", fontSize: "1rem", marginTop: "10px", lineHeight: "1.6" }}>
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EcoFriendly4;
