import React, { useEffect, useState } from 'react';
import './TicTacToeGame.css';

const TicTacToeGame = ({
  turnPlayer,
  setTurnPlayer,
  player1,
  player2,
  declareWinner,
  setDeclareWinner,
  gameStats,
  setGameStats,
}) => {
  const [gameGrid, setGameGrid] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const checkWinner = ([a, b, c, d, e, f], arr) => {
    if (
      arr[a][b] === arr[c][d] &&
      arr[a][b] === arr[e][f] &&
      arr[a][b] !== ''
    ) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    const wincombination = [
      [0, 0, 0, 1, 0, 2],
      [1, 0, 1, 1, 1, 2],
      [2, 0, 2, 1, 2, 2],
      [0, 0, 1, 0, 2, 0],
      [0, 1, 1, 1, 2, 1],
      [0, 2, 1, 2, 2, 2],
      [0, 0, 1, 1, 2, 2],
      [0, 2, 1, 1, 2, 0],
    ];
    let filled = 1;
    gameGrid.map((x) =>
      x.map((y) => {
        y === '' ? (filled = 0) : '';
      })
    );
    if (filled === 1) {
      setDeclareWinner(2);
      const l = gameStats.length;
      const temp = [...gameStats];
      temp[l - 1].status = `It was a draw`;
    } else {
      wincombination.map((arr) => {
        const check = checkWinner(arr, gameGrid);
        if (check) {
          setDeclareWinner(turnPlayer === 1 ? 0 : 1);
          const l = gameStats.length;
          const temp = [...gameStats];
          temp[l - 1].status = `${turnPlayer === 1 ? player1 : player2} won`;
        }
      });
    }
  }, [gameGrid]);
  const handleClick = (x, y) => {
    const value = turnPlayer === 1 ? 'O' : 'X';
    const tempGrid = [...gameGrid];
    tempGrid[x][y] = value;
    setGameGrid([...tempGrid]);
    setTurnPlayer(turnPlayer === 1 ? 0 : 1);
  };
  const handleNewGame = () => {
    const temp = [...gameStats];
    temp.push({ playerx: player1, playery: player2, status: 'ongoing' });
    setGameStats([...temp]);
    setGameGrid([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setDeclareWinner(null);
  };
  return (
    <>
      <div>
        <br />
        <label>Player Turn : {turnPlayer === 0 ? player1 : player2}</label>
        <br />
        <table>
          <tbody>
            {gameGrid.map((x, xid) => {
              return (
                <tr key={xid}>
                  {x.map((y, yid) => (
                    <td key={yid}>
                      <button
                        className="ticTacButton"
                        onClick={() =>
                          y === '' &&
                          declareWinner === null &&
                          handleClick(xid, yid)
                        }
                      >
                        {y}
                      </button>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        {declareWinner !== null && (
          <button onClick={handleNewGame}>Start New Game</button>
        )}
      </div>
    </>
  );
};

export default TicTacToeGame;
