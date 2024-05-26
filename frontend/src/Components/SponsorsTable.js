// SponsorsTab;e.js
import React from 'react';
import '../css/Comp.css';


export default function SponsorsTable ({ sponsors }) {
  const sortedSponsors = sponsors.sort((a, b) => a.spid - b.spid);
  return (
    <div className="attendee-table">
      <table>
        <thead>
          <tr>
            <th>Sponsor ID</th>
            <th>Staff No</th>
            <th>Company</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {sortedSponsors.map(sponsor => (
            <tr key={sponsor.spid}>
            <td>{sponsor.spid}</td>
              <td>{sponsor.staffno}</td>
              <td>{sponsor.company}</td>
              <td>{sponsor.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};