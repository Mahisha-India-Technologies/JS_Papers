import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Modal,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import image1 from '../../../assets/images/img91.avif';
import image2 from '../../../assets/images/img92.jpg';
import image3 from '../../../assets/images/img81.jpg';
import image4 from '../../../assets/images/img93.jpeg';
import image5 from '../../../assets/images/img78.jpg';
import image6 from '../../../assets/images/img95.jpg';
import image7 from '../../../assets/images/img96.webp';

const products = [
    {
      name: "Kraft Board",
      image: image1, // Update with actual image path
      description: "Durable and high-strength board for packaging and industrial use.",
      details: "Kraft board is widely used for corrugated boxes, heavy-duty packaging, and industrial applications. It has excellent tear resistance, moisture protection, and eco-friendly characteristics. Available in various GSM and thickness options.",
      applications: [
        "Corrugated box manufacturing",
        "Heavy-duty packaging",
        "Eco-friendly industrial applications",
        "High-strength carton production"
      ]
    },
    {
      name: "Chip Board",
      image: image2,
      description: "Eco-friendly, cost-effective material ideal for various applications.",
      details: "Chipboard is made from recycled fibers and is used in bookbinding, rigid packaging, and backings. It has a smooth surface suitable for printing, laminating, and die-cutting.",
      applications: [
        "Bookbinding and hardcover books",
        "Rigid packaging solutions",
        "Laminated and printed applications",
        "Furniture and decorative panels"
      ]
    },
    {
      name: "Duplex Coated",
      image: image3,
      description: "Premium coated board offering high-quality printability.",
      details: "Duplex coated board is used in premium packaging, cartons, and promotional materials. It provides a glossy or matte coated surface for enhanced print output and moisture resistance.",
      applications: [
        "Luxury packaging",
        "Food and beverage cartons",
        "Retail product packaging",
        "Printing and promotional materials"
      ]
    },
    {
      name: "Duplex Uncoated",
      image: image4,
      description: "Sustainable board with a natural finish for various applications.",
      details: "With an uncoated surface, this board is used in eco-friendly packaging and stationery. It is absorbent and ideal for raw-texture printing applications.",
      applications: [
        "Eco-friendly stationery",
        "Sustainable packaging",
        "Customized printing applications",
        "Notebook and file covers"
      ]
    },
    {
      name: "MM Board",
      image: image5,
      description: "Multi-purpose board with strength and durability.",
      details: "MM Board is engineered for high stiffness, making it suitable for high-performance packaging, printing, and industrial use. It ensures excellent print adhesion and color vibrancy.",
      applications: [
        "Rigid packaging solutions",
        "Industrial and automotive applications",
        "High-quality printed materials",
        "Display boards and signage"
      ]
    },
    {
      name: "Laminated Sheet",
      image: image6,
      description: "Enhanced surface protection for premium packaging.",
      details: "Laminated sheets offer resistance to moisture, chemicals, and wear. These sheets are widely used in food and beverage packaging, as well as protective solutions.",
      applications: [
        "Food-safe packaging",
        "Chemical-resistant layers",
        "Moisture-proof cartons",
        "Premium-quality labeling"
      ]
    },
    {
      name: "Poly Coated Sheet",
      image: image7,
      description: "Water-resistant and grease-proof sheets for food packaging.",
      details: "Poly-coated sheets provide an effective barrier against moisture and grease, making them perfect for food containers, disposable tableware, and medical applications.",
      applications: [
        "Food container manufacturing",
        "Disposable tableware",
        "Medical and pharmaceutical packaging",
        "Grease-proof wrapping solutions"
      ]
    }
  ];  

const Quality6 = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
      AOS.init({ duration: 2000, once: true });
    }, []);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ p: {xs: 2, sm: 4}, textAlign: "center", background: "linear-gradient(135deg,rgb(250, 245, 241),rgb(247, 233, 223), #e06f1f)" }}>
      <Typography variant="h4" gutterBottom sx={{color: '#e06f1f', fontWeight: 'bold', mt: 2, fontSize: {xs: '18px', sm: '26px'}}}>
        Product Quality Assurance
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Our commitment to quality ensures every product meets the highest standards.
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
  sx={{
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    p: 2,
    textAlign: "center",
    cursor: "pointer",
    border: '1px solid #e06f1f',
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    '&:hover': { transform: "scale(1.05)" },
  }}
  data-aos="flip-right"
>
  <CardContent>
    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }} 
      />
    </Box>
    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: '#757575' }}>{product.name}</Typography>
    <Typography variant="body2" sx={{ mb: 2 }}>{product.description}</Typography>
    <Button
      variant="outlined"
      sx={{color: '#e06f1f', border: '1px solid #e06f1f', textTransform: 'none', fontWeight: 'bold',
        '&:hover': { backgroundColor: '#e06f1f', color: '#fff'}
       }}
      onClick={() => handleOpen(product)}
    >
      View Details
    </Button>
  </CardContent>
</Card>

          </Grid>
        ))}
      </Grid>
      <Modal 
  open={open} 
  onClose={() => {}} // Prevents closing when clicking outside
  BackdropProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.7)" } }} // Dark background
>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: { xs: "95%", sm: "600px" },
      maxHeight: "80vh",
      backgroundColor: "#f0fdf2",
      p: { xs: 3, sm: 5 },
      boxShadow: 24,
      borderRadius: 2,
      outline: "none",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* Close Button at the Top Right */}
    <Button 
      onClick={handleClose}
      sx={{
        position: "absolute",
        top: "10px",
        right: "5px",
        minWidth: "30px",
        height: "30px",
        fontSize: {xs: '14px', sm: '18px'},
        fontWeight: "bold",
        color: "#757575",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        "&:hover": { color: "#424242" },
      }}
    >
      <CloseIcon />
    </Button>

    {selectedProduct && (
      <>
        {/* Header with Title */}
        <Box sx={{ textAlign: "center", backgroundColor: "transparent", zIndex: 2, pb: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "16px", sm: "24px" },
              color: "#e06f1f",
            }}
          >
            {selectedProduct.name} - Detailed Specifications
          </Typography>
        </Box>

        {/* Scrollable Content */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            px: 1,
            "&::-webkit-scrollbar": { display: "none" },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          <Typography variant="body2" sx={{ mt: 1, color: "#757575", fontWeight: "bold" }}>
            GSM Range: 180 to 450
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "#757575", fontWeight: "bold" }}>
            Thickness: 1mm to 3mm
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, fontSize: { xs: "14px", sm: "16px" } }}>
            {selectedProduct.description}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, fontSize: { xs: "14px", sm: "16px" } }}>
            {selectedProduct.details}
          </Typography>
          <Typography variant="h6" sx={{ mt: 3, fontSize: { xs: "16px", sm: "18px" }, fontWeight: "bold" }}>
            Applications:
          </Typography>
          <List sx={{ pl: 0, mt: 0 }}>
            {selectedProduct.applications.map((app, i) => (
              <ListItem key={i} sx={{ py: 0.5, alignItems: "flex-start", gap: 1 }}>
                <ListItemText
                  primary={app}
                  primaryTypographyProps={{
                    fontSize: "0.95rem",
                    fontWeight: 400,
                    color: "text.secondary",
                  }}
                  sx={{ m: 0 }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Footer with Close Button */}
        <Box sx={{ bottom: 0, backgroundColor: "#f0fdf2", zIndex: 2, pt: 2 }}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              fontWeight: "bold",
              color: "#757575",
              border: "2px solid #757575",
              textTransform: "none",
              "&:hover": {
                color: "#757575",
                backgroundColor: "#e0e0e0",
              },
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </>
    )}
  </Box>
</Modal>

    </Box>
  );
};

export default Quality6;