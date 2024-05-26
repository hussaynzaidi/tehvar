import React from 'react';
import '../css/Comp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const eventDetails = {
  title: "Tech Conference 2024",
  date: "June 25, 2024",
  time: "10:00 AM - 4:00 PM",
  location: "Tech Convention Center, San Francisco",
  description: "Join us for an exciting day of tech talks, networking, and innovation. Learn about the latest trends in technology, meet industry leaders, and discover new opportunities.",
};

const EventDetails = () => {
  return (
    <section className="event-details-section">
      <h2 className="event-title">{eventDetails.title}</h2>
      <div className="event-info">
        <div className="event-item">
          <FontAwesomeIcon icon={faCalendarAlt} className="event-icon" />
          <div>
            <h3 className="event-item-title">Date</h3>
            <p className="event-item-description">{eventDetails.date}</p>
          </div>
        </div>
        <div className="event-item">
          <FontAwesomeIcon icon={faClock} className="event-icon" />
          <div>
            <h3 className="event-item-title">Time</h3>
            <p className="event-item-description">{eventDetails.time}</p>
          </div>
        </div>
        <div className="event-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="event-icon" />
          <div>
            <h3 className="event-item-title">Location</h3>
            <p className="event-item-description">{eventDetails.location}</p>
          </div>
        </div>
      </div>
      <p className="event-description">{eventDetails.description}</p>
    </section>
  );
};

export default EventDetails;