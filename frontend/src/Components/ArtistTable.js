// AttendeeTable.js
import React from 'react';
import '../css/Comp.css';


export default function ArtistTable ({ artists }) {

  return (
    <div className="attendee-table">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Genre</th>
            <th>Performance Time</th>
          </tr>
        </thead>
        <tbody>
          {artists.map(artist => (
            <tr key={artist.fname}>
              <td>{artist.fname}</td>
              <td>{artist.genre}</td>
              <td>{artist.perftime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};