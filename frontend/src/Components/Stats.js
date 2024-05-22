import React, { useEffect, useState } from 'react';
import "../css/Comp.css";

const Statistics = () => {
  const [communityMembers, setCommunityMembers] = useState(0);
  const [podcastDownloads, setPodcastDownloads] = useState(0);
  const [podcastSubscribers, setPodcastSubscribers] = useState(0);
  const [specialGuests, setSpecialGuests] = useState(0);

  const animateNumber = (start, end, duration, callback) => {
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      callback(value);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    animateNumber(0, 55000, 2000, setCommunityMembers);
    animateNumber(0, 100000000, 2000, setPodcastDownloads);
    animateNumber(0, 1000000, 2000, setPodcastSubscribers);
    animateNumber(0, 250, 2000, setSpecialGuests);
  }, []);

  return (
    <div className="statistics">
      <div className="stat">
        <span className="number">{communityMembers.toLocaleString()}+</span>
        <span className="label">Community members</span>
      </div>
      <div className="stat">
        <span className="number">{podcastDownloads.toLocaleString()}+</span>
        <span className="label">Podcast downloads</span>
      </div>
      <div className="stat">
        <span className="number">{podcastSubscribers.toLocaleString()}+</span>
        <span className="label">Podcast subscribers</span>
      </div>
      <div className="stat">
        <span className="number">{specialGuests.toLocaleString()}+</span>
        <span className="label">Special guests</span>
      </div>
    </div>
  );
};

export default Statistics;
