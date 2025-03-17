import { useState } from 'react';
import './App.css';
import PlayerRegistration from './components/PlayerRegistration';
import TicTacToeGame from './components/TicTacToeGame';
import PlayerGameStats from './components/PlayerGameStats';

function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [gameStart, setGameStart] = useState(0);
  const [turnPlayer, setTurnPlayer] = useState(0);
  const [declareWinner, setDeclareWinner] = useState(null);
  const [gameStats, setGameStats] = useState([]);
  return (
    <>
      <div>
        <h1>Tic Tac Toe</h1>
      </div>
      <>
        {gameStart === 0 && (
          <button onClick={(e) => setGameStart(1)}>Let's Get Started</button>
        )}
      </>
      <>
        {gameStart !== 0 && (
          <button onClick={(e) => setGameStart(0)}>Reset The Game</button>
        )}
      </>
      <>
        {gameStart === 1 && (
          <PlayerRegistration
            player1={player1}
            player2={player2}
            setPlayer1={setPlayer1}
            setPlayer2={setPlayer2}
            setGameStart={setGameStart}
            setGameStats={setGameStats}
          />
        )}
      </>
      <>
        {gameStart === 2 && (
          <>
            <>
              <div>
                Player X : <span>{player1}</span>
              </div>
              <div>
                Player O : <span>{player2}</span>
              </div>
            </>
            <>
              <TicTacToeGame
                turnPlayer={turnPlayer}
                setTurnPlayer={setTurnPlayer}
                player1={player1}
                player2={player2}
                gameStart={gameStart}
                setGameStart={setGameStart}
                setDeclareWinner={setDeclareWinner}
                declareWinner={declareWinner}
                setGameStats={setGameStats}
                gameStats={gameStats}
              />
            </>
            {declareWinner === 2 ? (
              <>
                <div>Oops! It was a DRAW!!</div>
              </>
            ) : (
              declareWinner !== null && (
                <>
                  <div>
                    Congratulations{' '}
                    <b>{declareWinner === 0 ? player1 : player2}</b> You Won!!!
                  </div>
                </>
              )
            )}
            <br />
          </>
        )}
      </>
      <>
        {gameStart === 2 && (
          <PlayerGameStats
            gameStats={gameStats}
            player1={player1}
            player2={player2}
          />
        )}
      </>
    </>
  );
}

export default App;
