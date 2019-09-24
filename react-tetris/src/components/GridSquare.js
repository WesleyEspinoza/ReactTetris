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

const mapStateToProps = (state) => {
  return {
    grid: state.game.grid,
    shape: state.game.shape,
    rotation: state.game.rotation,
    x: state.game.x,
    y: state.game.y,
    speed: state.game.speed,
    isRunning: state.game.isRunning
  }
}

export default GridSquare;