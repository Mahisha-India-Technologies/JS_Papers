import React from 'react';
import { Modal, Box, Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import kraft1 from '../../assets/images/img78.jpg';
import kraft2 from '../../assets/images/img79.jpg';
import kraft3 from '../../assets/images/img80.webp';
import kraft4 from '../../assets/images/img81.jpg';
import kraft5 from '../../assets/images/img82.jpg';
import kraft6 from '../../assets/images/img83.avif';
import kraft7 from '../../assets/images/img84.jpg';
import kraft8 from '../../assets/images/img85.jpg';
import kraft9 from '../../assets/images/img86.jpg';
import kraft10 from '../../assets/images/img87.webp';

import chip1 from '../../assets/images/img78.jpg';
import chip2 from '../../assets/images/img79.jpg';
import chip3 from '../../assets/images/img80.webp';
import chip4 from '../../assets/images/img81.jpg';
import chip5 from '../../assets/images/img82.jpg';
import chip6 from '../../assets/images/img83.avif';
import chip7 from '../../assets/images/img84.jpg';
import chip8 from '../../assets/images/img85.jpg';
import chip9 from '../../assets/images/img86.jpg';
import chip10 from '../../assets/images/img87.webp';

import duplexCoated1 from '../../assets/images/img78.jpg';
import duplexCoated2 from '../../assets/images/img79.jpg';
import duplexCoated3 from '../../assets/images/img80.webp';
import duplexCoated4 from '../../assets/images/img81.jpg';
import duplexCoated5 from '../../assets/images/img82.jpg';
import duplexCoated6 from '../../assets/images/img83.avif';
import duplexCoated7 from '../../assets/images/img84.jpg';
import duplexCoated8 from '../../assets/images/img85.jpg';
import duplexCoated9 from '../../assets/images/img86.jpg';
import duplexCoated10 from '../../assets/images/img87.webp';

import duplexUncoated1 from '../../assets/images/img78.jpg';
import duplexUncoated2 from '../../assets/images/img79.jpg';
import duplexUncoated3 from '../../assets/images/img80.webp';
import duplexUncoated4 from '../../assets/images/img81.jpg';
import duplexUncoated5 from '../../assets/images/img82.jpg';
import duplexUncoated6 from '../../assets/images/img83.avif';
import duplexUncoated7 from '../../assets/images/img84.jpg';
import duplexUncoated8 from '../../assets/images/img85.jpg';
import duplexUncoated9 from '../../assets/images/img86.jpg';
import duplexUncoated10 from '../../assets/images/img87.webp';

import mm1 from '../../assets/images/img78.jpg';
import mm2 from '../../assets/images/img79.jpg';
import mm3 from '../../assets/images/img80.webp';
import mm4 from '../../assets/images/img81.jpg';
import mm5 from '../../assets/images/img82.jpg';
import mm6 from '../../assets/images/img83.avif';
import mm7 from '../../assets/images/img84.jpg';
import mm8 from '../../assets/images/img85.jpg';
import mm9 from '../../assets/images/img86.jpg';
import mm10 from '../../assets/images/img87.webp';

import laminated1 from '../../assets/images/img78.jpg';
import laminated2 from '../../assets/images/img79.jpg';
import laminated3 from '../../assets/images/img80.webp';
import laminated4 from '../../assets/images/img81.jpg';
import laminated5 from '../../assets/images/img82.jpg';
import laminated6 from '../../assets/images/img83.avif';
import laminated7 from '../../assets/images/img84.jpg';
import laminated8 from '../../assets/images/img85.jpg';
import laminated9 from '../../assets/images/img86.jpg';
import laminated10 from '../../assets/images/img87.webp';

import poly1 from '../../assets/images/img78.jpg';
import poly2 from '../../assets/images/img79.jpg';
import poly3 from '../../assets/images/img80.webp';
import poly4 from '../../assets/images/img81.jpg';
import poly5 from '../../assets/images/img82.jpg';
import poly6 from '../../assets/images/img83.avif';
import poly7 from '../../assets/images/img84.jpg';
import poly8 from '../../assets/images/img85.jpg';
import poly9 from '../../assets/images/img86.jpg';
import poly10 from '../../assets/images/img87.webp';

const categories = {
    "Kraft board": [kraft1, kraft2, kraft3, kraft4, kraft5, kraft6, kraft7, kraft8, kraft9, kraft10],
    "Chip board": [chip1, chip2, chip3, chip4, chip5, chip6, chip7, chip8, chip9, chip10],
    "Duplex coated": [duplexCoated1, duplexCoated2, duplexCoated3, duplexCoated4, duplexCoated5, duplexCoated6, duplexCoated7, duplexCoated8, duplexCoated9, duplexCoated10],
    "Duplex uncoated": [duplexUncoated1, duplexUncoated2, duplexUncoated3, duplexUncoated4, duplexUncoated5, duplexUncoated6, duplexUncoated7, duplexUncoated8, duplexUncoated9, duplexUncoated10],
    "MM Board": [mm1, mm2, mm3, mm4, mm5, mm6, mm7, mm8, mm9, mm10],
    "Laminated sheet": [laminated1, laminated2, laminated3, laminated4, laminated5, laminated6, laminated7, laminated8, laminated9, laminated10],
    "Poly coated sheet": [poly1, poly2, poly3, poly4, poly5, poly6, poly7, poly8, poly9, poly10]
};

const ExploreModal = ({ open, handleClose }) => {

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        window.open('https://wa.me/917094181144', '_blank'); // Opens WhatsApp with the given number in a new tab
      };

    return (
        <Modal 
    open={open} 
    onClose={(event, reason) => {
        if (reason !== "backdropClick") handleClose();
    }}
    closeAfterTransition
    BackdropProps={{ 
        sx: { 
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent dark overlay
        }
    }}
    sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}
>
    <Box sx={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: '90%', 
        height: '90vh', 
        backgroundColor: '#f0fdf2',
        boxShadow: 24, 
        display: 'flex', 
        flexDirection: 'column', 
        borderRadius: '20px',
        outline: 'none',
    }}
    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >

        {/* HEADER: Fixed Title & Close Button */}
        <Box sx={{ 
            position: 'relative', 
            backgroundColor: '#f0fdf2', 
            p: 2, 
            textAlign: 'center', 
            borderBottom: '1px solid #ddd',
            borderRadius: '20px',
            paddingTop: {xs: 3, sm: 6}
        }}>
            <Typography variant="h4" sx={{ 
                fontSize: { xs: '20px', sm: '28px' }, 
                fontWeight: 'bold', 
                color: '#e06f1f'
            }}>
                Explore Our Products
            </Typography>
            <IconButton 
                onClick={handleClose} 
                sx={{ position: 'absolute', top: 17, right: {xs: 5, sm: 17} }}
            >
                <CloseIcon />
            </IconButton>
        </Box>

        {/* SCROLLABLE CONTENT */}
        <Box sx={{ 
            flex: 1, 
            overflowY: 'auto', 
            scrollbarWidth: 'none', 
            '::-webkit-scrollbar': { display: 'none' }, 
            p: 2
        }}>
            {Object.entries(categories).map(([category, images]) => (
                <Box key={category} sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ 
                        textAlign: 'center', 
                        fontSize: { xs: '18px', sm: '20px' }, 
                        fontWeight: 'bold', 
                        color: '#616161', 
                        mt: 2, mb: 3 
                    }}>
                        {category}
                    </Typography>
                    <Box sx={{ 
                        display: 'flex',
                        justifyContent: {xs: 'center', sm: 'left'}, 
                        gap: 2, 
                        flexWrap: 'wrap',
                        paddingBottom: '40px', 
                        borderBottom: '1px solid rgb(245, 163, 55)' 
                    }}>
                        {images.map((src, index) => (
                            <Box
                                key={index} 
                                component="img"
                                src={src} 
                                alt={category} 
                                sx={{ 
                                    width: { xs: '120px', sm: '150px' }, 
                                    height: { xs: '120px', sm: '150px' }, 
                                    objectFit: 'cover', 
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                    transition: 'transform 0.3s',
                                }}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>

        {/* FOOTER: Fixed Bottom Buttons */}
        <Box sx={{ 
            position: 'relative', 
            backgroundColor: '#f0fdf2', 
            p: 2, 
            display: 'flex', 
            justifyContent: 'space-between', 
            gap: 2, 
            borderTop: '1px solid #ddd',
            borderRadius: '20px',
        }}>
            <Button 
                variant="contained" 
                sx={{ textTransform: 'none', border: '2px solid #e06f1f', borderRadius: '50px', backgroundColor: 'transparent',fontSize: {xs: '14px', sm: '16px'}, color: '#e06f1f', '&:hover': { backgroundColor: '#e06f1f', color: '#fff', transition: 'all 0.3s ease-in-out', transform: 'scale(0.9)' } }}
                onClick={handleWhatsAppClick}
            >
                Get a Quote
            </Button>
            <Button variant="outlined" sx={{ borderRadius: '50px', fontSize: {xs: '14px', sm: '16px'}, textTransform: 'none', color: '#757575', border: '2px solid #757575', '&:hover': { transition: 'all 0.3s ease-in-out', fontWeight: 'bold', border: '2px solid #000', backgroundColor: '#fff', color: '#000', transform: 'scale(0.9)' } }} onClick={handleClose}>
                Close
            </Button>
        </Box>

    </Box>
</Modal>


    );
};

export default ExploreModal;
