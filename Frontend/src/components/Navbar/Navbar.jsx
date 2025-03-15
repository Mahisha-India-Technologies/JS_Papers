import React, { useState, useEffect } from 'react';
import {AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, Collapse, Paper, Menu, MenuItem, useMediaQuery } from '@mui/material';
// import DragHandleIcon from '@mui/icons-material/DragHandle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, Navigate, useLocation } from 'react-router-dom';
import logo from '../../assets/images/JS_logo1.svg';
import logo1 from '../../assets/images/JS_logo2.svg';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import ContactForm from '../ContactForm/ContactForm.jsx';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const languageOptions = ['English', 'Tamil', 'Hindi', 'Telugu', 'Kannada'];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open('https://wa.me/917094181144', '_blank'); // Opens WhatsApp with the given number in a new tab
  };

  
    const handleOpenModal = (e) => {
      setDrawerOpen(false);
      e.preventDefault();
      setModalOpen(true);
      setMobileServicesOpen(false);
      setMobileExploreOpen(false);
      setExploreOpen(false);
      setServicesOpen(false);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
    
    if (!open) {
      setMobileServicesOpen(false);
      setMobileExploreOpen(false);
      setExploreOpen(false);
      setServicesOpen(false);
    }
  };

  const handleNavItemClick = () => {
    setDrawerOpen(false);
    setExploreOpen(false);
  setServicesOpen(false);
  };

  const toggleMobileServicesDropdown = (e) => {
    e.stopPropagation();
    setMobileExploreOpen(false);
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const handleAboutClick = () => {
    setDrawerOpen(false);
    navigate("/about");
    setMobileServicesOpen(false);
      setMobileExploreOpen(false);
      setExploreOpen(false);
      setServicesOpen(false);
  }

  // const handleBuyonlineClick = () => {
  //   setDrawerOpen(false);
  //   navigate("/buy-online");
  //   setMobileServicesOpen(false);
  //     setMobileExploreOpen(false);
  //     setExploreOpen(false);
  //     setServicesOpen(false);
  // }

  const handleLocationClick = () => {
    setDrawerOpen(false);
    navigate("/locations");
    setMobileServicesOpen(false);
      setMobileExploreOpen(false);
      setExploreOpen(false);
      setServicesOpen(false);
  }

  const toggleMobileExploreDropdown = (e) => {
    e.stopPropagation();
    setMobileServicesOpen(false);
    setMobileExploreOpen(!mobileExploreOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.explore-dropdown') && exploreOpen) {
        setExploreOpen(false);
      }
    };

    const isDropdownActive = (items) => {
      return items.some((item) => location.pathname === item.link);
    };

    if (exploreOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [exploreOpen]);

  const isActive = (path) => location.pathname === path;
  const isExploreActive = () => exploreItems.some((item) => location.pathname === item.link);
  const isServicesActive = () => serviceItems.some((item) => location.pathname === item.link);

  const isDropdownActive = (items) => {
    return items.some((item) => location.pathname === item.link);
  };

  const isMediumScreen = useMediaQuery('(max-width:1200px)');
  const isSmallScreen = useMediaQuery('(max-width:1100px)');
  const isSmallestScreen = useMediaQuery('(max-width:600px)');
  const isVerySmallestScreen = useMediaQuery('(max-width:400px)');

  const navItems = [
    { text: 'Home', link: '/' },
    // { text: 'Investors', link: '/investors' },
    // { text: 'Media', link: '/media' },
    // { text: 'Offer', link: '/offer' },
  ];

  // const handleWhatsAppClick = (e) => {
  //   e.preventDefault();
  //   window.open('https://wa.me/918110818281', '_blank');
  // };

  const exploreItems = [
    { text: 'Packaging Solutions', link: '/packaging-solutions' },
    { text: 'Eco-Friendly Products', link: '/eco-friendly-products' },
    { text: 'Product Categories', link: '/product-categories' },
    { text: 'Product Quality', link: '/product-quality' },
  ];

  const serviceItems = [
    { text: 'Environmental Initiatives', link: '/environmental-initiatives' },
    { text: 'Certifications', link: '/certifications' },
    { text: 'Sustainability Goals', link: '/sustainability-goals' },
    { text: 'Recycling Programs', link: '/recycling-programs' },
  ];

  const additionalNavItems = [
    { text: 'About', link: '/about' },
    { text: 'Contact', onClick: handleOpenModal },
    { text: 'Buy Online', link: '/buy-online' },
    { text: 'Locations', link: '/locations' },
    // { text: 'Languages' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: 'linear-gradient(to right, #f9fff4, #ebfdec, #f9fff4, #ebfdec, #f9fff4, #ebfdec)',
          boxShadow: 'none',
          height: isSmallScreen ? '90px' : isMediumScreen ? '110px' : '110px',
          fontFamily: 'Excon',
          zIndex: 1100,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
            alignItems: 'center',
          }}
        >
          {/* Logo with Image */}
          <div className='logo-img' style={{display: 'flex'}}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#fff',
              marginLeft: isSmallScreen ? '0px' : isMediumScreen ? '20px' : '0px',
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ 
                height: isVerySmallestScreen ? '50px' : isSmallScreen ? '60px' : isMediumScreen ? '80px' : '80px', 
                marginBottom: '8px', 
              }}
            />
            <img
              src={logo1}
              alt="Logo1"
              style={{ 
                height: isVerySmallestScreen ? '22px' : isSmallScreen ? '25px' : isMediumScreen ? '30px' : '30px', 
                marginLeft: isSmallScreen ? '0px' : isMediumScreen ? '0px' : '0px',
              }}
            />
          </Box>
          </div>
        

          <div className='navbar-options'>
            {/* Top Bar for Additional Options */}
            <Box
  sx={{
    color: 'inherit',
    display: isSmallScreen ? 'none' : 'flex',
    justifyContent: 'flex-end',
    padding: '10px 20px',
    alignItems: 'center',
  }}
>
  {additionalNavItems.map((item) =>
    item.onClick ? (
      <Button
        key={item.text}
        onClick={item.onClick}
        color="inherit"
        sx={{
          textTransform: 'none',
          fontSize: '0.9rem',
          color: location.pathname === item.link ? '#e65100' : '#023047',
          marginX: '10px',
          fontWeight: '500',
          fontFamily: 'Excon',
          '&:hover': {
            color: '#e65100',
            textDecoration: 'underline',
          },
          '&:focus': {
            outline: 'none',
            backgroundColor: 'transparent',
          },
        }}
      >
        {item.text}
      </Button>
    ) : (
      <Button
        key={item.text}
        component={Link}
        to={item.link}
        color="inherit"
        sx={{
          textTransform: 'none',
          fontSize: '0.9rem',
          color: location.pathname === item.link ? '#e65100' : '#023047',
          marginX: '10px',
          fontWeight: '500',
          fontFamily: 'Excon',
          '&:hover': {
            color: '#e65100',
            textDecoration: 'underline',
          },
          '&:focus': {
            outline: 'none',
            backgroundColor: 'transparent',
          },
        }}
      >
        {item.text}
      </Button>
    )
  )}
</Box>


        {/* Navigation Links for large screens */}
        <div className='navigation' style={{display: 'flex'}}>
        <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: isSmallScreen ? '10px' : isMediumScreen ? '15px' : '20px',
              justifyContent: 'flex-end',
              flexGrow: 1,
              marginRight: isSmallScreen ? '20px' : isMediumScreen ? '30px' : '50px',
              marginTop: 'auto',
              marginBottom: isSmallScreen ? '15px' : isMediumScreen ? '10px' : '10px',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.link}
                sx={{
                  textTransform: 'none',
                  fontSize: isSmallScreen ? '1.1rem' : isMediumScreen ? '1.1rem' : '1.1rem',
                  color: isActive(item.link) ? '#e06f1f' : '#757575',
                  fontFamily: 'Excon',
                  fontWeight: '500',
                  '&:hover': {
                    color: '#424242',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}

            {/* Explore Dropdown for large screens */}
            <Box
              className="explore-dropdown"
              sx={{ position: 'relative' }}
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
            >
              <Button
                color="inherit"
                sx={{
                  textTransform: 'none',
                  fontWeight: '500',
                  fontSize: isSmallScreen ? '1.1rem' : isMediumScreen ? '1.1rem' : '1.1rem',
                  color: isExploreActive() ? '#e06f1f' : '#757575',
                  fontFamily: 'Excon',
                  '&:hover': {
                    color: '#424242',
                  },
                }}
              >
                Products & Services <ExpandMoreIcon />
              </Button>
              <Paper
                elevation={3}
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundImage: 'linear-gradient(to right, #f9fff4, #ebfdec, #f9fff4, #ebfdec, #f9fff4, #ebfdec)',
                  width: '220px',
                  zIndex: 10,
                  padding: '8px 0',
                  maxHeight: exploreOpen ? '300px' : '0',
                  overflow: 'hidden',
                  opacity: exploreOpen ? 1 : 0,
                  transform: exploreOpen ? 'translateY(0)' : 'translateY(-10px)',
                  transition: 'all 0.8s ease',
                }}
              >
                {exploreItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    component={Link}
                    to={item.link}
                    onClick={handleNavItemClick}
                    sx={{
                      color: location.pathname === item.link ? '#e06f1f' : '#757575', // Highlight active item
                      padding: '10px 20px',
                      fontFamily: 'Excon',
                      fontSize: isSmallScreen ? '1.1rem' : isMediumScreen ? '1.1rem' : '1.1rem',
                      '&:hover': {
                        backgroundColor: location.pathname === item.link ? '#fff0b2' : '#e06f1f',
                        borderRadius: '4px',
                        color: location.pathname === item.link ? '#e06f1f' : '#fff',
                      },
                    }}
                  >
                    {item.text}
                  </MenuItem>
                ))}
              </Paper>
            </Box>

            {/* Services Dropdown for large screens */}
            <Box
              className="services-dropdown"
              sx={{ position: 'relative' }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Button
                color="inherit"
                sx={{
                  textTransform: 'none',
                  fontWeight: '500',
                  fontSize: isSmallScreen ? '1.1rem' : isMediumScreen ? '1.1rem' : '1.1rem',
                  color: isServicesActive() ? '#e06f1f' : '#757575',
                  fontFamily: 'Excon',
                  '&:hover': {
                    color: '#424242',
                  },
                }}
              >
                Sustainability <ExpandMoreIcon />
              </Button>
              <Paper
                elevation={3}
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundImage: 'linear-gradient(to right, #f9fff4, #ebfdec, #f9fff4, #ebfdec, #f9fff4, #ebfdec)',
                  width: '240px',
                  zIndex: 10,
                  padding: '8px 0',
                  maxHeight: servicesOpen ? '300px' : '0',
                  overflow: 'hidden',
                  opacity: servicesOpen ? 1 : 0,
                  transform: servicesOpen ? 'translateY(0)' : 'translateY(-10px)',
                  transition: 'all 0.8s ease',
                }}
              >
                {serviceItems.map((service) => (
                  <MenuItem
                    key={service.text}
                    component={Link}
                    to={service.link}
                    onClick={handleNavItemClick}
                    sx={{
                      color: location.pathname === service.link ? '#e06f1f' : '#757575',
                      padding: '10px 20px',
                      fontFamily: 'Excon',
                      fontSize: isSmallScreen ? '0.9rem' : isMediumScreen ? '1rem' : '1.1rem',
                      '&:hover': {
                        backgroundColor: location.pathname === service.link ? '#fff0b2' : '#e06f1f',
                        borderRadius: '4px',
                        color: location.pathname === service.link ? '#e06f1f' : '#fff',
                      },
                    }}
                  >
                    {service.text}
                  </MenuItem>
                ))}
              </Paper>
            </Box>

          </Box>

          {/* "Join" Button stays in the right corner */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 'auto', marginTop: 'auto', marginBottom: '10px' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleWhatsAppClick}
              sx={{
                marginLeft: 'auto',
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: isSmallScreen ? '0.8rem' : isMediumScreen ? '0.95rem' : '1rem',
                backgroundColor: 'white',
                border: '2px solid white',
                color: '#616161',
                borderRadius: '30px',
                fontFamily: 'Excon',
                marginBottom: isSmallScreen ? '10px' : isMediumScreen ? '0px' : '0px',
                transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
                '&:hover': {
                  backgroundColor: '#e06f1f',
                  color: 'white',
                  boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)',
                  transform: 'scale(0.9)', /* Scale down to 90% of original size */
                  transition: 'all 0.3s ease-in-out',
                },
              }}
            >
              Join Us
            </Button>
          </Box>
        </div>
        
          </div>

          

          {/* Hamburger Menu Icon for small screens */}
          <IconButton
            color="inherit"
            edge="end"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' }, marginLeft: 'auto' }}
          >
            <SortRoundedIcon sx={{ fontSize: '40px', color: '#023047' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{
          width: 250,
          backgroundColor: '#e06f1f',
          color: 'white',
          height: '100vh',
          fontFamily: 'Excon',
          overflowY: 'scroll',
        }}
        role="presentation"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <List>
          {/* Navigation Items */}
          {navItems.map((item) => (
  <Box
    key={item.text}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingX: "16px",
    }}
  >
    {/* Navigation Link */}
    <Link
      to={item.link}
      onClick={toggleDrawer(false)}
      style={{
        textDecoration: "none",
        color: location.pathname === item.link ? "#020220" : "white",
        backgroundColor: location.pathname === item.link ? "white" : "transparent",
        width: "100%",
        padding: "8px 5px",
        borderRadius: "10px",
        fontWeight: "600",
        fontSize: "18px", // Increased font size
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListItemText primary={item.text} />
    </Link>

    {/* Close Button (5px gap) */}
    <IconButton
  onClick={(e) => {
    e.stopPropagation(); 
    toggleDrawer(false);
    setDrawerOpen(false)
  }}
  sx={{
    display: "flex", // Ensures it remains visible
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "5px",
    color: "#023047 !important",
    border: "2px solid #e06f1f",
    borderRadius: "10px",
    padding: "13px",
    backgroundColor: "#fff !important",
    "&:hover": {
      backgroundColor: "#e06f1f",
      color: "white",
    },
  }}
>
  <CloseIcon sx={{ fontSize: "20px" }} />
</IconButton>

  </Box>
))}

          {/* Explore Dropdown */}
          <ListItem
            button
            onClick={toggleMobileExploreDropdown}
            sx={{
              backgroundColor: isDropdownActive(exploreItems) ? 'white' : 'transparent',
              color: isDropdownActive(exploreItems) ? '#020220' : 'inherit',
              borderRadius: '10px',
            }}
          >
            <ListItemText primary="Products & Services" sx={{ paddingLeft: '5px' }} />
            <ExpandMoreIcon />
          </ListItem>
          <Collapse in={mobileExploreOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {exploreItems.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  sx={{ pl: 3, paddingY: 0.5, width: '100%' }}
                  onClick={handleNavItemClick}
                >
                  <Link
                    to={item.link}
                    style={{
                      textDecoration: 'none',
                      color: location.pathname === item.link ? '#020220' : 'inherit',
                      backgroundColor: location.pathname === item.link ? 'white' : 'transparent',
                      width: '100%',
                      padding: '5px 14px',
                      borderRadius: '10px',
                    }}
                  >
                    <ListItemText primary={item.text} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Collapse>

          {/* Services Dropdown */}
          <ListItem
            button
            onClick={toggleMobileServicesDropdown}
            sx={{
              backgroundColor: isDropdownActive(serviceItems) ? 'white' : 'transparent',
              color: isDropdownActive(serviceItems) ? '#020220' : 'inherit',
              borderRadius: '10px',
            }}
          >
            <ListItemText primary="Sustainability" sx={{ paddingLeft: '5px' }} />
            <ExpandMoreIcon />
          </ListItem>
          <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {serviceItems.map((service) => (
                <ListItem
                  button
                  key={service.text}
                  sx={{ pl: 3, paddingY: 0.5, width: '100%' }}
                  onClick={handleNavItemClick}
                >
                  <Link
                    to={service.link}
                    style={{
                      textDecoration: 'none',
                      color: location.pathname === service.link ? '#020220' : 'inherit',
                      backgroundColor: location.pathname === service.link ? 'white' : 'transparent',
                      width: '100%',
                      padding: '5px 14px',
                      borderRadius: '10px',
                    }}
                  >
                    <ListItemText primary={service.text} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Collapse>

          {/* Static Links */}
          <ListItem button>
            <Link
              to="/about"
              onClick={handleAboutClick}
              style={{
                textDecoration: 'none',
                color: location.pathname === '/about' ? '#020220' : 'inherit',
                backgroundColor: location.pathname === '/about' ? 'white' : 'transparent',
                width: '100%',
                padding: '5px',
                borderRadius: '10px',
              }}
            >
              <ListItemText primary="About" sx={{ paddingLeft: '5px' }} />
            </Link>
          </ListItem>

          <ListItem button>
            <Link
              to="/contact"
              onClick={handleOpenModal}
              style={{
                textDecoration: 'none',
                color: location.pathname === '/contact' ? '#020220' : 'inherit',
                backgroundColor: location.pathname === '/contact' ? 'white' : 'transparent',
                width: '100%',
                padding: '5px',
                borderRadius: '10px',
              }}
            >
              <ListItemText primary="Contact" sx={{ paddingLeft: '5px' }} />
            </Link>
          </ListItem>

          <ListItem button>
  <a
    href="https://www.amazon.com/s?k=YOUR_PRODUCT_LINK" // Replace with your actual Amazon sales page link
    target="_blank"
    rel="noopener noreferrer"
    onClick={toggleDrawer(false)}
    style={{
      textDecoration: 'none',
      color: location.pathname === '/buy-online' ? '#020220' : 'inherit',
      backgroundColor: location.pathname === '/buy-online' ? 'white' : 'transparent',
      width: '100%',
      padding: '5px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <ListItemText primary="Buy Online" sx={{ paddingLeft: '5px' }} />
  </a>
</ListItem>


          <ListItem button>
            <Link
              to="/locations"
              onClick={handleLocationClick}
              style={{
                textDecoration: 'none',
                color: location.pathname === '/locations' ? '#020220' : 'inherit',
                backgroundColor: location.pathname === '/locations' ? 'white' : 'transparent',
                width: '100%',
                padding: '5px',
                borderRadius: '10px',
              }}
            >
              <ListItemText primary="Location" sx={{ paddingLeft: '5px' }} />
            </Link>
          </ListItem>

          {/* WhatsApp Button */}
          <ListItem button>
            <Button
              variant="contained"
              fullWidth
              onClick={handleWhatsAppClick}
              sx={{
                textTransform: 'none',
                borderRadius: '10px',
                border: '2px solid white',
                color: '#fff',
                backgroundColor: '#023047',
                fontFamily: 'Excon',
                '&:hover': {
                  backgroundColor: '#08083B',
                  color: '#FFFFFF',
                },
              }}
            >
              Join with Us
            </Button>
          </ListItem>
        </List>
      </Box>
    </Drawer>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(2%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
      <ContactForm isOpen={modalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Navbar;
