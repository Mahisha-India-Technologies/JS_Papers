import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../../components/CarouselImage/CarouselImage';
import image1 from '../../assets/images/img43.jpg';
import image2 from '../../assets/images/img89.jpg';
import image3 from '../../assets/images/img45.webp';
import image4 from '../../assets/images/img67.jpeg';
import image5 from '../../assets/images/img26.jpg';
import { Container } from 'react-bootstrap';
import './Home1.css';

function Home4() {
  return (
    <Container fluid className="carousel-container p-0">
      <Carousel interval={4000} pause={false} indicators={true} controls={true} className="carousel-page">
        {/* First Slide: Sustainability */}
        <Carousel.Item>
          <CarouselImage text="Sustainability" imageSrc={image1} />
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-title">Sustainability Practices</h3>
            <p className="carousel-text">
              We are committed to using renewable resources, minimizing waste, and reducing environmental impact through eco-friendly production.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Slide: Products & Services */}
        <Carousel.Item>
          <CarouselImage text="Services" imageSrc={image2} />
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-title">Quality Products & Services</h3>
            <p className="carousel-text">
              Our high-quality paper products cater to diverse industries, offering custom manufacturing and sustainable packaging solutions.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Third Slide: Vision of Jaisakthi Papers */}
        <Carousel.Item>
          <CarouselImage text="Our Vision" imageSrc={image3} />
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-title">Vision for the Future</h3>
            <p className="carousel-text">
              Striving to be the leading paper manufacturer, we focus on sustainability, responsible sourcing, and continuous innovation.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Fourth Slide: Eco-friendly Products */}
        <Carousel.Item>
          <CarouselImage text="Eco-Friendly" imageSrc={image4} />
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-title">Eco-Friendly Products</h3>
            <p className="carousel-text">
              Our range of eco-friendly paper products, including recycled papers and sustainable packaging, helps reduce environmental impact.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Fifth Slide: The Factory */}
        <Carousel.Item>
          <CarouselImage text="Our Factory" imageSrc={image5} />
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-title">State-of-the-Art Factory</h3>
            <p className="carousel-text">
              Our advanced factory ensures efficient production with minimal waste and energy consumption, maintaining top-quality standards.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Home4;
