import React, { Component } from "react";
class ErrorBoundry extends Component {
  state = {
    checkError: false,
  };
  static getDerivedStateFromError(error) {
    return {
      checkError: true,
    };
  }
  render() {
    if (this.state.checkError) {
      return <h1 style={{ color: "red" }}>Error: Please pass correct name</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
