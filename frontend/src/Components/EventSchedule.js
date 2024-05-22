import React from 'react';
import "../css/Comp.css";

const EventSchedule = () => {
  const events = [
    {
      id: 1,
      episode: 'Ep 4: The best noise-cancelling headphones of 2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium est ipsum dictum lectus mauris netus. Diam sed sit quisque facilisi luctus feugiat.',
      date: 'June 12, 2021',
      duration: '30 mins',
      category: 'Devices',
    },
    {
      id: 2,
      episode: 'Ep 3: MacBook Pro 16’’ vs. Surface Laptop 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium est ipsum dictum lectus mauris netus. Diam sed sit quisque facilisi luctus feugiat.',
      date: 'June 13, 2021',
      duration: '50 mins',
      category: 'Devices',
    }
  ];

  return (
    <div className="event-schedule">
      <h2 className="title">Event Schedule</h2>
      {events.map(event => (
        <div className="event" key={event.id}>
          <div className="event-icon">
            <span role="img" aria-label="microphone">🎤</span>
          </div>
          <div className="event-content">
            <span className="event-category">{event.category}</span>
            <h3 className="event-title">{event.episode}</h3>
            <p className="event-description">{event.description}</p>
            <div className="event-footer">
              <span className="event-date">{event.date} - {event.duration}</span>
              <a href="#" className="event-ticket">Get ticket</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventSchedule;
