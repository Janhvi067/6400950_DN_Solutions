// App.js
import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import EmployeeList from './components/EmployeeList';

const App = () => {
  const [theme, setTheme] = useState('light');

  const employees = [
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
    { name: 'Charlie', role: 'Manager' },
  ];

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const appStyle = {
    textAlign: 'center',
    background: theme === 'dark' ? '#111' : '#fff',
    minHeight: '100vh',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '2rem',
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={appStyle}>
        <h1>Employee Management</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
        <EmployeeList employees={employees} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
