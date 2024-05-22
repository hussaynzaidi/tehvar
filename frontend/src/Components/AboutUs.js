import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Comp.css';

const historyData = [
  {
    id: 1,
    title: 'Our Beginnings',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu, ac tincidunt mauris lacus sed leo.',
    image: 'path_to_image1.jpg'
  },
  {
    id: 2,
    title: 'Growth and Expansion',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
    image: 'path_to_image2.jpg'
  },
  {
    id: 3,
    title: 'Innovation and Development',
    description: 'Sed porttitor lectus nibh. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
    image: 'path_to_image3.jpg'
  },
];

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <h2 className="about-us-title">About Us</h2>
      <p className="about-us-description">Learn more about our journey and milestones.</p>
      <Carousel 
        showArrows={true} 
        infiniteLoop={true} 
        showThumbs={false} 
        showStatus={false} 
        autoPlay={true} 
        interval={5000}
      >
        {historyData.map((history) => (
          <div className="carousel-slide" key={history.id}>
            <img src={history.image} alt={history.title} />
            <div className="carousel-content">
              <h3 className="carousel-title">{history.title}</h3>
              <p className="carousel-description">{history.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default AboutUs;
