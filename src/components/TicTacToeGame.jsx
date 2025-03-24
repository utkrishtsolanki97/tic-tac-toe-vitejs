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
  setGameStart,
  setPlayer1,
  setPlayer2,
  difficultyLevel
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
    let wonFlag = 0;
    wincombination.map((arr) => {
      const check = checkWinner(arr, gameGrid);
      if (check) {
        setDeclareWinner(turnPlayer === 1 ? 0 : 1);
        const l = gameStats.length;
        const temp = [...gameStats];
        temp[l - 1].status = `${turnPlayer === 1 ? player1 : player2} Won!`;
        wonFlag = 1;
      }
    });
    if (filled === 1 && wonFlag === 0) {
      setDeclareWinner(2);
      const l = gameStats.length;
      const temp = [...gameStats];
      temp[l - 1].status = `It was a draw`;
      wonFlag = 1;
    }
    if (filled === 0 && wonFlag === 0 && player2 === 'Computer' && turnPlayer === 1 && difficultyLevel==1) {
      let flag = 0;
      for (let i = 0; flag !== 1; i++) {
        const randomNumber = Math.floor(Math.random() * 10);
        const x = Math.floor(randomNumber / 3) === 3 ? 2 : Math.floor(randomNumber / 3);
        const y = randomNumber % 3;
        if (gameGrid[x][y] === '') {
          handleClick(x, y);
          flag = 1;
        }
      }
    }
    if (filled === 0 && wonFlag === 0 && player2 === 'Computer' && turnPlayer === 1 && difficultyLevel==2) {
      const x  = bestMove(gameGrid)
      handleClick(x.row, x.col);
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
    temp.push({ playerx: player1, playery: player2, status: 'Ongoing' });
    setGameStats([...temp]);
    setGameGrid([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setDeclareWinner(null);
  };
  const handleResetGame = () => {
    setGameGrid([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ])
    setPlayer1('')
    setPlayer2('')
    setGameStart(1)
    setTurnPlayer(0)
    setDeclareWinner(null)
    setGameStats([])
  }
  function bestMove(board) {
    let bestScore = -Infinity;
    let move = null;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          board[i][j] = 'O';
          let score = minimax(board, 0, false);
          board[i][j] = '';
          if (score > bestScore) {
            bestScore = score;
            move = { row: i, col: j };
          }
        }
      }
    }
    return move;
  }

  function minimax(board, depth, isMaximizing) {
    let scores = { 'O': 1, 'X': -1, 'tie': 0 };
    let result = checkWinnerAlgo(board);
    if (result !== null) return scores[result];

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === '') {
            board[i][j] = 'O';
            let score = minimax(board, depth + 1, false);
            board[i][j] = '';
            bestScore = Math.max(score, bestScore);
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === '') {
            board[i][j] = 'X';
            let score = minimax(board, depth + 1, true);
            board[i][j] = '';
            bestScore = Math.min(score, bestScore);
          }
        }
      }
      return bestScore;
    }
  }

  function checkWinnerAlgo(board) {
    let winningCombos = [
      [[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], [[2, 0], [2, 1], [2, 2]], 
      [[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]], 
      [[0, 0], [1, 1], [2, 2]], [[0, 2], [1, 1], [2, 0]]  
    ];

    for (let combo of winningCombos) {
      let [a, b, c] = combo;
      if (board[a[0]][a[1]] !== '' && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
        return board[a[0]][a[1]];
      }
    }

    if (board.flat().every(cell => cell !== '')) {
      return 'tie';
    }

    return null;
  }

  return (
    <>
      <div className='ticTacToeContainer'>
        <div className='playerTurnContainer'>
          <label className='leftCont'>Player Turn : </label>{" "}
          <label className='rightCont'>{" "}{turnPlayer === 0 ? player1 : player2}</label>
        </div>
        <div className='tttGameContainer'>
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
        </div>
        {declareWinner !== null && (
          <div className='declareResultContainer'>
            <div className='declareResultContent'>
              {declareWinner === 2 ? (
                <div>
                  <div>Oops! It was a DRAW!!</div>
                </div>
              ) : (
                declareWinner !== null && (
                  <div>
                    <div>
                      Congratulations{' '}
                      <b>{declareWinner === 0 ? player1 : player2}</b> You Won!!!
                    </div>
                  </div>
                )
              )}
              <div>
                <button onClick={handleNewGame}>Rematch</button>
                <button onClick={handleResetGame}>Start New Game</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default TicTacToeGame;
