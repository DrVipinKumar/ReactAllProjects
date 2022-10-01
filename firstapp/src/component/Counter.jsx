import React, { Component } from "react";

class Counter extends Component {
  // state = this.props;
  // state = {
  //   count: this.props.counter.count,
  // };
  //constructor() {
  // super();

  //      this.handleIncrement=this.handleIncrement.bind(this)
  //      this.handleDecrement=this.handleDecrement.bind(this)
  // }
  checkCount() {
    const { count } = this.props.counter;
    const checkCounter =
      count === 0 ? "col-1 btn btn-danger m-2" : "col-1 btn btn-warning m-2";
    return checkCounter;
  }
  checkCountValue() {
    const { count } = this.props.counter;
    const checkValue = count === 0 ? "Zero" : count;
    return checkValue;
  }

  render() {
    return (
      <div className="row">
        <button
          className="btn btn-primary m-2 col-1"
          onClick={() => this.props.onDecrement(this.props.counter)}
          disabled={this.props.counter.count === 0 ? "disabled" : ""}
        >
          <span style={{ fontSize: 25 }}>-</span>
        </button>
        <span className={this.checkCount()}>{this.checkCountValue()}</span>
        <button
          className="btn btn-primary m-2 col-1"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          <span style={{ fontSize: 25 }}>+</span>
        </button>
        <button
          className="btn btn-danger btn-sm m-2 col-1"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
