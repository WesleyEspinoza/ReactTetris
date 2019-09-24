import React from 'react';
import './App.css';
import NextBlock from './components/NextBlock';
import GridBoard from './components/GridBoard';
import ScoreBoard from './components/ScoreBoard'

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1 className="App-title">Tetris Redux</h1>
    </header>
    <GridBoard/>
    <NextBlock />
    <ScoreBoard />
  </div>
  );
}

export default App;
