import React, { Component } from "react";
import ChangeColor from "./ChangeColor";
class ChangeColorOnClick extends Component {
  render() {
    const color = this.props.color;
    return (
      <div style={{ color: color, fontSize: "20px" }}>
        <h1>Dr. Vipin Classes</h1>
        <button onClick={this.props.changeColor}>Change Color</button>
      </div>
    );
  }
}

export default ChangeColor(ChangeColorOnClick);
