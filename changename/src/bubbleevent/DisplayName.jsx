import React, { Component } from "react";
import ChangeName from "./ChangeName";
class DisplayName extends Component {
  state = { name: "Dr Vipin Classes" };
  changeName = () => {
    this.setState({
      name: "Dr. Vipin Teotia",
    });
  };
  render() {
    return (
      <div>
        <ChangeName name={this.state.name} onChange={this.changeName} />
      </div>
    );
  }
}

export default DisplayName;
