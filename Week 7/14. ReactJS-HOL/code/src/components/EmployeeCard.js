// components/EmployeeCard.js
import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const EmployeeCard = ({ employee }) => {
  const theme = useContext(ThemeContext);

  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#eee',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '1rem',
    margin: '1rem',
    borderRadius: '8px',
  };

  return (
    <div style={cardStyle}>
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>
    </div>
  );
};

export default EmployeeCard;
