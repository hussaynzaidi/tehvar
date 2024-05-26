import React from 'react';
import '../css/Comp.css';

import tpab from '../assets/tpab.png';
import maad from '../assets/maad.jpg';
import morale from '../assets/morale.jpg';
import sec80 from '../assets/sec80.jpg';

const speakersData = [
  {
    id: 1,
    name: 'Chary Smith',
    title: 'CEO at Comoti',
    image:  tpab,
    social: {
      facebook: '#',
      twitter: '#',
    },
  },
  {
    id: 2,
    name: 'Clara Bertoletti',
    title: 'Junior Designer',
    image: maad,
    social: {
      facebook: '#',
      twitter: '#',
    },
  },
  {
    id: 3,
    name: 'Jhon Anderson',
    title: 'Senior Frontend Developer',
    image: morale,
    social: {
      facebook: '#',
      twitter: '#',
    },
  },
  {
    id: 4,
    name: 'Chary Smith',
    title: 'CEO at Comoti',
    image: sec80,
    social: {
      facebook: '#',
      twitter: '#',
    },
  },
];

const Speakers = () => {
  return (
    <section className="speakers-section">
      <h2 className="speakers-title">The Most Important Speakers</h2>
      <p className="speakers-subtitle">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in.</p>
      <div className="speakers-grid">
        {speakersData.map((speaker) => (
          <div className="speaker-card" key={speaker.id}>
            <img src={speaker.image} alt={speaker.name} className="speaker-image" />
            <div className="speaker-info">
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-title">{speaker.title}</p>
              <div className="speaker-social">
                <a href={speaker.social.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
