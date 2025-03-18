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
      <div className='screenContainer'>
        <div className='gameContainer'>
          <div className='tttHeading'>
            <h1>Tic Tac Toe</h1>
          </div>
          <>
            {gameStart === 0 && (
              <button onClick={(e) => setGameStart(1)}>Let's Get Started</button>
            )}
          </>
          <>
            {gameStart !== 0 && (
              <button onClick={(e) => setGameStart(0)}>Start New Game</button>
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
                <div className='playerInformation'>
                  <div className='playerName'>
                    <span>Player X</span><span className='registeredPlayerName'>{player1}</span>
                  </div>
                  <div className='vsSpan'><span>VS</span></div>
                  
                  <div className='playerName'>
                    <span>Player O</span><span className='registeredPlayerName'>{player2}</span>
                  </div>
                </div>
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
                    setPlayer1={setPlayer1}
                    setPlayer2={setPlayer2}
                  />
                </>
                
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
        </div>
      </div>
    </>
  );
}

export default App;
