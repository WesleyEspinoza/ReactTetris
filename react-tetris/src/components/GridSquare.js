import React, { Component } from 'react';
import './css/GridSquare.css';

class GridSquare extends Component{
  
  render() {
    const classes = `grid-square color${this.props.color}`
    return(
      <div className={classes} />
    );
  }
}

export default GridSquare;