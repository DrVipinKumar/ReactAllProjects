import React, { Component } from "react";
import UpdateName from "./UpdateName";
class ToggleName extends Component {
  state = {
    toggle: true,
  };
  toggleComponent = () => {
    const check = this.state.toggle === true ? false : true;
    this.setState({
      toggle: check,
    });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {this.state.toggle === true ? (
          <UpdateName />
        ) : (
          <h1>Removed Component</h1>
        )}
        <button onClick={this.toggleComponent}>Toggle Component</button>
      </div>
    );
  }
}

export default ToggleName;
