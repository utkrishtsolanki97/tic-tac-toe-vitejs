import React from 'react';
import './PlayerGameStats.css'

const PlayerGameStats = ({ gameStats, player1, player2 }) => {
  return (
    <>
    <div className='statsContainer'>
      <h3>Game Stats</h3>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Player X</th>
            <th>Player Y</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {gameStats.map((game, id) => (
            <tr>
              <td>{id + 1}</td>
              <td>{player1}</td>
              <td>{player2}</td>
              <td>{game.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default PlayerGameStats;
