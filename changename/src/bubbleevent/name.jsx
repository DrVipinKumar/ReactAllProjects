import React, { Component } from "react";
class Name extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={this.props.onChange}>Change Name</button>
      </div>
    );
  }
}

export default Name;
