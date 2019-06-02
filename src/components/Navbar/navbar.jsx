import React, { Component } from "react";

import "./navbar.css";
class Navbar extends Component {
  state = {
    score: 0,
    topscore: 0
  };

  render() {
    return (
      <div className="container">
        <div className="fixed-top row">
          <div className="col-md-4">
            <h1>Clicky Game</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
