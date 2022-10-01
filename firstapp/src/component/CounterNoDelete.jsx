import React, { Component } from "react";

class Counter extends Component {
  // state = this.props;
  state = {
    count: this.props.count,
  };
  //constructor() {
  // super();

  //      this.handleIncrement=this.handleIncrement.bind(this)
  //      this.handleDecrement=this.handleDecrement.bind(this)
  // }
  checkCount() {
    const { count } = this.state;
    const checkCounter =
      count === 0 ? "btn btn-danger m-2" : "btn btn-warning m-2";
    return checkCounter;
  }
  checkCountValue() {
    const { count } = this.state;
    const checkValue = count === 0 ? "Zero" : count;
    return checkValue;
  }
  handleIncrement = () => {
    //Arrow Functions
    let { count } = this.state;
    this.setState({ count: count + 1 });

    // this.setState(
    //     (preCount)=>({
    //         count:preCount.count+1
    //     }),()=>{
    //         console.log("Count:",this.state.count)
    //     }
    // )
  };
  handleDecrement = () => {
    let { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary m-2" onClick={this.handleDecrement}>
          Decrement
        </button>
        <span className={this.checkCount()}>{this.checkCountValue()}</span>
        <button className="btn btn-primary m-2" onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
