import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="bg-white border border-gray-400 h-16 w-16 m-2 leading-9 text-lg rounded-2xl"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;
  let statusColor;

  if (winner) {
    status = `Winner: ${winner}`;
    statusColor =
      "text-2xl font-bold p-4 rounded-lg mb-6 bg-green-500 text-white";
  } else if (squares.every((square) => square !== null)) {
    status = "Game Draw! No winner";
    statusColor =
      "text-2xl font-bold p-4 rounded-lg mb-6 bg-yellow-500 text-black";
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
    statusColor =
      "text-2xl font-bold p-4 rounded-lg mb-6 bg-blue-500 text-white";
  }
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    // setSquares(nextSquares);
    // setXIsNext(!xIsNext);

    onPlay(nextSquares);
  }
  return (
    <>
      <div className={statusColor}>{status}</div>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  // const currentSquares = history[history.length - 1];
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // setHistory([...history, nextSquares]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move #${move}`;
    } else {
      description = `Go to start the game`;
    }

    return (
      <li key={move} className="bg-gray-700 text-white mb-1 p-1 rounded">
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="flex justify-center p-4">
      <div className="mr-16">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="border border-gray-600 p-1 text-lg">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(array) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (array[a] && array[a] === array[b] && array[a] === array[c]) {
      return array[a];
    }
  }
  return null;
}
