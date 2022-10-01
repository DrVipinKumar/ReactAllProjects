import React, { Component } from "react";
import ReactDOM from "react-dom";
class PortalsComponent extends Component {
  state = {
    name: "Dr. Vipin Classes",
  };
  render() {
    return ReactDOM.createPortal(
      <h1 style={{ textAlign: "center" }}>{this.state.name}</h1>,
      document.getElementById("portals")
    );
  }
}

export default PortalsComponent;
