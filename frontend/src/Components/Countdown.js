// CountdownTimer.js
import React, { useState, useEffect } from 'react';
import "../css/Comp.css";

const CountdownTimer = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const currentTime = new Date();
    const difference = new Date(eventDate) - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="countdown-timer">
      <div className="time-box">
        <span className="time">{timeLeft.days || '0'}</span>
        <span className="label">Days</span>
      </div>
      <div className="time-box">
        <span className="time">{timeLeft.hours || '0'}</span>
        <span className="label">Hours</span>
      </div>
      <div className="time-box">
        <span className="time">{timeLeft.minutes || '0'}</span>
        <span className="label">Minutes</span>
      </div>
      <div className="time-box">
        <span className="time">{timeLeft.seconds || '0'}</span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
