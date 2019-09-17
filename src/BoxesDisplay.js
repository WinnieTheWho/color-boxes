import React, { Component } from "react";
import Box from "./Box"

class BoxesDisplay extends Component {
  static defaultProps = {
    colors: ["blue", "red", "orange", "peachpuff",
            "yellow", "green", "purple", "pink"]
  }

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {boxesArray: 
    ["blue","blue","blue","blue",
    "blue","blue","blue","blue",
    "blue","blue","blue","blue",
    "blue","blue","blue","blue"]}
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
      boxesArray: st.boxesArray.map((box, i, arr) => {
      if(i === randomIdx) {
        return arr[i] = randomColor;
      } else {
        return arr[i];
      }
      })
    }))
  }

  render() {
    let multiBox = [];
    let colors = this.state.boxesArray
    for(let i=0; i < colors.length; i++) {
      multiBox.push(<div>
        <Box color={colors[i]}/>
        <button onClick={this.handleClick}>CLICK</button>
        </div>)
    }
    return (
      <div className="boxdisplay">
        {multiBox}
      </div>
    )
  }
}

export default BoxesDisplay;