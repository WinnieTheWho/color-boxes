import React, { Component } from "react";
import Box from "./Box"

class BoxesDisplay extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    console.log("THIS IS CLICKED");
  }

  render() {
    return (
      <div className="boxdisplay">
        <Box color="blue"/>
        <Box color="red"/>
        <Box color="green"/>
      </div>
    )
  }
}

export default BoxesDisplay;