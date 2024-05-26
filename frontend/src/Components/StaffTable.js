// StaffTable.js
import React from 'react';
import '../css/Comp.css';


export default function StaffTable ({ staff }) {
  const sortedStaff = staff.sort((a, b) => a.staffno - b.staffno);
  return (
    <div className="attendee-table">
      <table>
        <thead>
          <tr>
            <th>Staff Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {sortedStaff.map(staff => (
            <tr key={staff.staffno}>
              <td>{staff.staffno}</td>
              <td>{staff.fname}</td>
              <td>{staff.lname}</td>
              <td>{staff.phoneno}</td>
              <td>{staff.email}</td>
              <td>{staff.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};