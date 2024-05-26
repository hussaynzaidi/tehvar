// AttendeeTable.js
import React from 'react';
import '../css/Comp.css';


export default function SpeakerTable ({ speakers }) {
  const sortedSpeakers = speakers.sort((a, b) => a.sid - b.sid);
  return (
    <div className="attendee-table">
      <table>
        <thead>
          <tr>
            <th>SID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Created Time</th>
          </tr>
        </thead>
        <tbody>
          {sortedSpeakers.map(speaker => (
            <tr key={speaker.sid}>
              <td>{speaker.sid}</td>
              <td>{speaker.fname}</td>
              <td>{speaker.lname}</td>
              <td>{speaker.email}</td>
              <td>{speaker.phoneno}</td>
              <td>{speaker.createdtime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};