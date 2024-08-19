import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/img/ferrari.jpg';
import image2 from '../../assets/img/nissan2.jpg';
import image3 from '../../assets/img/porsche.jpg';

import './carousel.css';

function ExampleCarouselImage({ text }) {
  return <div className='nada'>{text}</div>;
}

function CarouselB() {
  return (
    <section className='carousel'>
      <Carousel>
        <Carousel.Item>
          <img
            className="imagen1"
            src={image1}
            alt=''
            style={{ height: '100vh' }}
          />
          <ExampleCarouselImage text="" />
          <Carousel.Caption>
            <h3>Ferrari 488</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imagenAuto2"
            src={image2}
            alt='Second slide'
            style={{ height: '100vh',  }}
          />
          <ExampleCarouselImage text="" />
          <Carousel.Caption>
            <h3>Nissan Skyline R34</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imagenAuto3"
            src={image3}
            alt='Third slide'
            style={{ height: '100vh' }}
          />
          <ExampleCarouselImage text="" />
          <Carousel.Caption>
            <h3>Porsche 911 RS</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default CarouselB;
