// AttendeeTable.js
import React from 'react';
import '../css/Comp.css';
import { useAuthContext } from "../Hooks/useAuthContext";



export default function AttendeeTable ({ attendees }) {
  const { user } = useAuthContext();
  const sortedAttendees = attendees.sort((a, b) => a.aid - b.aid);
  return (
    <div className="attendee-table">
      <table>
        <thead>
          <tr>
            <th>AID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Created Time</th>
          </tr>
        </thead>
        <tbody>
          {sortedAttendees.map(attendee => (
            <tr key={attendee.aid}>
              <td>{attendee.aid}</td>
              <td>{attendee.fname}</td>
              <td>{attendee.lname}</td>
              <td>{attendee.email}</td>
              <td>{attendee.createdtime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};