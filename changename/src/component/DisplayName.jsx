import React, { Component } from "react";
import FChangeName from "./FChangeName";
class DisplayName extends Component {
  state = {
    name: "Dr Vipin Teotia",
  };
  changeName = () => {
    this.setState({
      name: "Dr Vipin Classes",
    });
  };
  render() {
    console.log("...inside render in DisplayName");
    return (
      <div style={{ textAlign: "center" }}>
        <FChangeName name={this.state.name} />
        <button onClick={this.changeName}>ChangeName</button>
      </div>
    );
  }
}

export default DisplayName;
