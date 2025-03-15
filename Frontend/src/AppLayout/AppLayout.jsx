import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import { useMediaQuery } from '@mui/material';
import Home from "../pages/Home/Home";
import Environment from '../pages/Sustain/Environment/Environment';
import Certification from '../pages/Sustain/Certification/Certification';
import Goals from '../pages/Sustain/Goals/Goals';
import Recycle from '../pages/Sustain/Recycle/Recycle';
import Packaging from '../pages/Products/Packaging/Packaging';
import EcoFriendly from '../pages/Products/EcoFriendly/EcoFriendly';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import About from '../pages/About/About';
import Location from '../pages/Location/Location';
import Categories from '../pages/Products/Categories/Categories';
import Quality from '../pages/Products/Quality/Quality';

function AppLayout() {

  const isMediumScreen = useMediaQuery('(max-width:1200px)');
  const isSmallScreen = useMediaQuery('(max-width:1100px)');
  
    return (
        <Router>
          {/* <CustomCursor /> */}
          <ScrollToTop />
      <Navbar />
      <div className='contents' style={{ marginTop: isSmallScreen ? '90px' : isMediumScreen ? '110px' : '110px', width: '100%' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/environmental-initiatives' element={<Environment />} />
          <Route path='/certifications' element={<Certification />} />
          <Route path='/sustainability-goals' element={<Goals />} />
          <Route path='/recycling-programs' element={<Recycle />} />
          <Route path='/product-categories' element={<Categories />} />
          <Route path='/packaging-solutions' element={<Packaging />} />
          <Route path='/eco-friendly-products' element={<EcoFriendly />} />
          <Route path='/product-quality' element={<Quality />} />
          <Route path='/about' element={<About />} />
          <Route path='/locations' element={<Location />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </div>
    </Router>
    )
}

export default AppLayout;