import React, { Component } from "react";
class UpdateName extends Component {
  state = {
    name: "Dr. Vipin Teotia",
  };
  constructor() {
    super();
    console.log("Inside Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Inside getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("Inside componentDidMount");
  }
  updateName = () => {
    this.setState({
      name: "Dr. Vipin Classes",
    });
  };
  shouldComponentUpdate() {
    console.log("Inside shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Inside getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshots) {
    console.log("Inside componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Inside componentWillUnmount");
  }
  render() {
    console.log("Inside Render");
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Updating State of Class Component</h2>
        <h2>{this.state.name}</h2>
        <button onClick={this.updateName}>Update Name</button>
      </div>
    );
  }
}

export default UpdateName;
