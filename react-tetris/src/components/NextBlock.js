import React, { Component } from 'react'
import { connect } from 'react-redux'
import GridSquare from './GridSquare.js'
import { shapes } from '../utils'
import './css/NextBlock.css'

// Draws the "next" block view showing the next block to drop
class NextBlock extends Component {

  makeGrid() {
      // deconstruct shape
  const { shape } = this.props
  // get the array for this shape first rotation
  const block = shapes[shape][0]
  // get the empty shape
  const box = shapes[0][0] 
    // Map the block to the grid
    return box.map((rowArray, row) => {
      return rowArray.map((square, col) => {
        const color = block[row][col] === 0 ? 0 : shape
        return <GridSquare key={`${row}${col}`} color={color} />
      })})
    }

  render () {
    return (
      <div className="next-block">
        {this.makeGrid()}
      </div>
    )
  }
}

// Map State to props
const mapStateToProps = (state) =>  {
  return {
    // Return nextShape as shape
    shape: state.game.nextShape
  }
}

export default connect(mapStateToProps)(NextBlock)