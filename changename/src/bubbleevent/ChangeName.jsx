import React, { Component } from "react";
import Name from "./name";
class ChangeName extends Component {
  render() {
    return (
      <div>
        <Name name={this.props.name} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default ChangeName;
