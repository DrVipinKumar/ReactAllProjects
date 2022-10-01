import React, { Component } from "react";
class ChangeColorOnHover extends Component {
  render() {
    const color = this.props.color;
    return (
      <div style={{ color: color }}>
        <h1 onMouseOver={this.props.changeColor}>Dr. Vipin Teotia</h1>
      </div>
    );
  }
}

export default ChangeColorOnHover;
