import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "",
      amount: "",
      currency: "",
      result: "",
    };
  }

  // Increment method
  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  // Decrement method
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Static message
  sayHello = () => {
    this.setState({ message: "Say Incremented and Hello!" });
  };

  // Function with argument
  sayWelcome = (msg) => {
    this.setState({ message: msg });
  };

  // Synthetic event example
  handleClick = (event) => {
    this.setState({ message: "I was clicked" });
  };

  // Currency conversion
  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleCurrencyChange = (e) => {
    this.setState({ currency: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, currency } = this.state;
    let converted = 0;
    if (currency.toLowerCase() === "euro") {
      converted = (parseFloat(amount) * 0.011).toFixed(2); // ₹ to €
    } else if (currency.toLowerCase() === "rupees") {
      converted = (parseFloat(amount) * 88).toFixed(2); // € to ₹
    }
    this.setState({ result: converted });
  };

  render() {
    return (
      <div style={{ marginLeft: "30px", fontFamily: "Arial" }}>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>{" "}
        <button onClick={this.decrement}>Decrement</button>{" "}
        <button onClick={() => this.sayWelcome("welcome")}>Say Welcome</button>{" "}
        <button onClick={this.handleClick}>Click me</button>
        <p>{this.state.message}</p>

        <br />
        <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>

        <form onSubmit={this.handleSubmit}>
          <div>
            Amount:
            <input
              type="text"
              value={this.state.amount}
              onChange={this.handleAmountChange}
              style={{ marginLeft: "5px" }}
            />
          </div>
          <div style={{ marginTop: "8px" }}>
            Currency:
            <input
              type="text"
              value={this.state.currency}
              onChange={this.handleCurrencyChange}
              style={{ marginLeft: "5px" }}
            />
          </div>
          <button type="submit" style={{ marginTop: "10px" }}>
            Submit
          </button>
        </form>

        {this.state.result && (
          <p>
            Converted: {this.state.currency} = {this.state.result}
          </p>
        )}
      </div>
    );
  }
}

export default App;
