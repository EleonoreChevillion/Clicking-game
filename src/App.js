import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron/jumbotron";
import Images from "./components/Images/images";
import Navbar from "./components/Navbar/navbar";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Navbar />
        <br /> <br />
        <Jumbotron />
        <Images />
      </div>
    );
  }
}

export default App;
