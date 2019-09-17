import React, { Component } from "react";
import Box from "./Box"

class BoxesDisplay extends Component {
  static defaultProps = {
    colors: ["blue", "red", "orange", "peachpuff",
      "yellow", "green", "purple", "pink"]
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      boxesArray:
        ["blue", "blue", "blue", "blue",
          "blue", "blue", "blue", "blue",
          "blue", "blue", "blue", "blue",
          "blue", "blue", "blue", "blue"]
    }
  }

  getRandomIdx() {
    let randomIdx = Math.floor(Math.random() * this.state.boxesArray.length);
    return randomIdx;
  }

  getRandomColor() {
    let randomCIdx = Math.floor(Math.random() * this.props.colors.length);
    return this.props.colors[randomCIdx];
  }

  handleClick(evt) {
    let randomIdx = this.getRandomIdx();
    let randomColor = this.getRandomColor();
    this.setState(st => ({
      boxesArray: st.boxesArray.map((color, i) => {
        if (i === randomIdx) {
          return randomColor;
        } else {
          return color;
        }
      })
    }))
  }

  render() {
    let multiBox = [];
    let colors = this.state.boxesArray
    //TODO: MAP OVER ARRAY 
    for (let i = 0; i < colors.length; i++) {
      multiBox.push(
        <Box color={colors[i]} />
      )
    }
    return (
      <div className="boxdisplay">
        {multiBox}
        <button onClick={this.handleClick}>CLICK</button>
      </div>
    )
  }
}

export default BoxesDisplay;