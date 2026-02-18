import React, { useState } from "react";
import "./App.css";

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? "Переможець: " + winner
    : "Наступний хід: " + (xIsNext ? "X" : "O");

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {[0, 1, 2].map(i => (
          <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />
        ))}
      </div>
      <div className="board-row">
        {[3, 4, 5].map(i => (
          <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />
        ))}
      </div>
      <div className="board-row">
        {[6, 7, 8].map(i => (
          <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="game">
      <h1>💗 Tic Tac Toe — React 💗</h1>
      <Board />
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
