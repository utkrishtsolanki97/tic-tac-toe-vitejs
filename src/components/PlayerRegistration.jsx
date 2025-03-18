import React from 'react';
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
  return (
    <div className='registerContainer'>
      <h4>Please Give the player Names</h4>
      <div className='registerInputContainer'>
        <label>Player 1 Name</label>
        <input type="text" onChange={(e) => setPlayer1(e.target.value)} />
      </div>
      <div className='registerInputContainer'>
        <label>Player 2 Name</label>
        <input type="text" onChange={(e) => setPlayer2(e.target.value)} />
      </div>
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
    </div>
  );
};

export default PlayerRegistration;
