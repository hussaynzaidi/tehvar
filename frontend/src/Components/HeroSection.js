// HeroSection.js
import React from 'react';
import "../css/Comp.css";
import CountdownTimer from './Countdown';
import RegisterButton from './RegisterButton';

const HeroSection = () => {
  const eventDate = '2024-12-31T00:00:00'; // Set your event date here

  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Digital conference for designers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu urna, quam adipiscing eu tincidunt tincidunt dictumst.
          Turpis cursus arcu risus amet at. Turpis.
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
