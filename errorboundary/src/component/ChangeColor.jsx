import React, { Component } from "react";

const ChangeColor = (NormalComponent) => {
  class EnhanceComponent extends Component {
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
      return (
        <NormalComponent
          color={this.state.color}
          changeColor={this.changeColor}
        />
      );
    }
  }

  return EnhanceComponent;
};

export default ChangeColor;
