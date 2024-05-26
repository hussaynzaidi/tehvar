// HeroSection.js
import React from 'react';
import "../css/Comp.css";
import CountdownTimer from './Countdown';
import RegisterButton from './RegisterButton';

const HeroSection = () => {
  const eventDate = '2024-12-25T00:00:00'; 

  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Digital conference for designers</h1>
        <p>
        Discover the tools and technologies lowering costs, improving health equity and saving lives as patients seek ways to empower themselves and take control of their care and wellbeing. 
        </p>
      </div>
      <div className="counter">
      <CountdownTimer eventDate={eventDate} />
      <RegisterButton />
      </div>
    </section>
  );
};

export default HeroSection;
