import React, { Component } from "react";

class Box extends Component {
  render() {
    return <div className="box"
                style={{ backgroundColor: this.props.color }}></div>
  }
}

export default Box; 