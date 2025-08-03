// components/EmployeeList.js
import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees }) => {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {employees.map((emp, i) => (
        <EmployeeCard key={i} employee={emp} />
      ))}
    </div>
  );
};

export default EmployeeList;
