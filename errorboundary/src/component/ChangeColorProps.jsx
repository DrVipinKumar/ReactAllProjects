import React, { Component } from "react";
class ChangeColorProps extends Component {
  state = {
    color: "#ff0000",
  };
  changeColor = () => {
    const color = "#" + Math.floor(Math.random() * 6177722).toString(16);
    this.setState({
      color: color,
    });
  };
  render() {
    return <div>{this.props.render(this.state.color, this.changeColor)}</div>;
  }
}

export default ChangeColorProps;
