// src/CountPeople.js
import React, { Component } from 'react';

class CountPeople extends Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0,
      c: 0, // optional if not used
    };
  }

  updateEntry() {
    this.setState((prevState, props) => {
      return { entrycount: prevState.entrycount + 1 };
    });
  }

  updateExit() {
    this.setState((prevState, props) => {
      return { exitcount: prevState.exitcount + 1 };
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button
          style={{ backgroundColor: 'lightgreen', padding: '10px', marginRight: '10px' }}
          onClick={() => this.updateEntry()}
        >
          Login
        </button>
        <span style={{ fontWeight: 'bold', marginRight: '30px' }}>
          {this.state.entrycount} People Entered!!!
        </span>

        <button
          style={{ backgroundColor: 'lightgreen', padding: '10px', marginLeft: '10px' }}
          onClick={() => this.updateExit()}
        >
          Exit
        </button>
        <span style={{ fontWeight: 'bold', marginLeft: '10px' }}>
          {this.state.exitcount} People Left!!!
        </span>
      </div>
    );
  }
}

export default CountPeople;
