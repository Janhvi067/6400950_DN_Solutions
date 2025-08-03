import React, { useState } from 'react';

const TicketForm = () => {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');
  const [transactionId, setTransactionId] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${name}\nYour Complaint was Submitted.\nTransaction ID is: ${transactionId}`);
    setTransactionId(transactionId + 1);
    setName('');
    setComplaint('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Register your complaints here!!!</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Complaint:</label>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            style={styles.textarea}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: '30px',
    marginBottom: '30px',
  },
  form: {
    display: 'inline-block',
    textAlign: 'left',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
  },
  field: {
    marginBottom: '15px',
  },
  label: {
    display: 'inline-block',
    width: '100px',
    fontWeight: 'bold',
  },
  input: {
    width: '250px',
    padding: '8px',
    fontSize: '14px',
  },
  textarea: {
    width: '250px',
    height: '60px',
    padding: '8px',
    fontSize: '14px',
  },
  button: {
    marginLeft: '100px',
    padding: '8px 20px',
    fontSize: '14px',
    cursor: 'pointer',
  },
};

export default TicketForm;
