import React, { useState } from 'react';
import './PlayerRegistration.css';

const PlayerRegistration = ({
  player1,
  player2,
  setPlayer1,
  setPlayer2,
  setGameStart,
  gameStats,
  setGameStats,
}) => {

  const [playerMode, setPlayerMode] = useState(null);
  const handleGameMode = (mode) => {
    setPlayerMode(mode)
    if (mode === 0) {
      setPlayer2("Computer")
    }
  }
  return (
    <div className='registerContainer'>
      {playerMode === null && <div className='modeSelectionContainer'>
        <div className='modeSelection'>
          <h5>Please Select the Mode</h5>
          <button onClick={() => handleGameMode(0)}>Single Player</button>
          <button onClick={() => handleGameMode(1)}>Double Player</button>
        </div>
      </div>}
      <>
        <h4>Please Give the player Names</h4>
        <div className='registerInputContainer'>
          <label>Player 1 Name</label>
          <input type="text" onChange={(e) => setPlayer1(e.target.value)} />
        </div>
        {playerMode === 1 && <div className='registerInputContainer'>
          <label>Player 2 Name</label>
          <input type="text" onChange={(e) => setPlayer2(e.target.value)} />
        </div>}
        {
          playerMode === 0 && <div className='registerInputContainer'>
            <label>Player 2 Name</label>
            <input type="text" value={player2} disabled />
          </div>
        }
        <div>
          <button
            disabled={
              player1 == player2 || player1.length === 0 || player2.length === 0
            }
            onClick={() => {
              setGameStart(2);
              setGameStats([
                { playerx: player1, playery: player2, status: 'ongoing' },
              ]);
            }}
          >
            Submit Player Names
          </button>
        </div>
      </>
    </div>
  );
};

export default PlayerRegistration;
