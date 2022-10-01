import React, { Component } from "react";
import HomeCounter from "./HomeCounter";
import Navbar from "./Navbar";
class App extends Component {
  state = {
    counters: [
      { id: 1, count: 0 },
      { id: 2, count: 11 },
      { id: 3, count: 0 },
      { id: 4, count: 0 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].count++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].count--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.count = 0;
      return c;
    });
    this.setState({ counters });
  };
  deleteCounter = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  getCounter = () => {
    const totalCounter = this.state.counters.filter((c) => c.count > 0).length;
    return totalCounter;
  };
  render() {
    return (
      <React.Fragment>
        <Navbar totalCounter={this.getCounter()} />
        <main className="container">
          <HomeCounter
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.deleteCounter}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
