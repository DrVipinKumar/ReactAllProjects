import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="text-white text-center">
          <h1 className="display-4">Background Removal Tool</h1>
          <p className="lead mb-0">Fast, simple and great performance.</p>
        </header>
      </div>
    );
  }
}
