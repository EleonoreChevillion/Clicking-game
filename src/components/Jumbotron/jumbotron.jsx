import React, { Component } from "react";
import "./jumbo.css";
class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Clicky Game!</h1>
          <p className="lead">
            Click on an image to get point but never click twice on the same
            image !
          </p>
        </div>
      </div>
    );
  }
}
export default Jumbotron;
