import React, { Component } from "react";
import "./image.css";
class Images extends Component {
  state = {
    sources: [
      "https://images.unsplash.com/photo-1497899236524-c79659901d7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1444754781737-af80b5324002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1487173644064-4f2c78ed40c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1462374141840-e1e68ac25e75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1475700262322-d2d5adb9e26f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1516467790960-dfa408ed87be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1558674378-013e03a88c6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1541689221361-ad95003448dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1500369663225-a0b913f3ae78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1558383419-5d99c70d6634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1535338134198-e28df7d54e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1504387484904-5a5ab981c194?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1354&q=80"
    ],
    classes: "col-md-4",
    clicked: [],
    score: 0,
    topscore: 0,
    sentence: "Click on an image"
  };
  handleImg = event => {
    // console.log(event);
    // console.log(this.state.clicked.includes(event));
    if (this.state.clicked.includes(event) === false) {
      this.setState({
        score: this.state.score + 1,
        sentence: "You guessed correctly!"
      });
      let newClicked = [];
      newClicked.concat(this.state.clicked);
      this.state.clicked.push(event);
      newClicked.push(event);
      this.setState({
        clicked: this.state.clicked
      });
    } else {
      this.setState({
        score: 0,
        clicked: [],
        sentence: "Nope, try again!"
      });
    }

    if (this.state.score >= this.state.topscore) {
      this.setState({
        topscore: this.state.score
      });
    }
    console.log(this.state.clicked);
    //let classes = this.state.classes;
    //classes += "clicked";

    // console.log(this.state);
    //this.state.sources.reverse();
    this.shuffleArr(this.state.sources);
  };

  shuffleArr = arr => {
    let i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  renderImg() {
    return (
      <div>
        {this.state.sources.map(source => (
          <img
            onClick={() => this.handleImg(source)}
            src={source}
            key={source}
            alt="Personnage"
            style={this.styles}
            className={this.state.classes}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.sentence}</h1>
        <h3>Score: {this.state.score}</h3>
        <h3>Top score: {this.state.topscore}</h3>
        <div className="row">
          <div className="col-md-3" />
          <div className="container col-md-6">
            <div className="row">
              <div>{this.renderImg()}</div>
            </div>
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}
export default Images;
