import React, { PureComponent } from "react";
class ChangeName extends PureComponent {
  render() {
    console.log("...inside render in ChangeName");
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default ChangeName;
