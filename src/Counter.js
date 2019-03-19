import React, { Component } from "react";
import Decrementer from "./Decrementer";
import Incrementer from "./Incrementer";
import ValueDisplayer from "./ValueDisplayer";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      currentValue: 12
    };
  }
  increment = () => {
    const newValue = this.state.currentValue + 1;
    this.setState({ currentValue: newValue });
  };
  decrement = () => {
    const newValue = this.state.currentValue - 1;
    this.setState({ currentValue: newValue });
  };
  render() {
    return (
      <main>
        <Decrementer decrement={this.decrement} />
        <ValueDisplayer currentValue={this.state.currentValue} />
        <Incrementer increment={this.increment} />
      </main>
    );
  }
}

export default Counter;
