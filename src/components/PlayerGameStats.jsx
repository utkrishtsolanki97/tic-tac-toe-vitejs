import React from 'react';

const PlayerGameStats = ({ gameStats, player1, player2 }) => {
  return (
    <>
      <div>GameStats</div>
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
    </>
  );
};

export default PlayerGameStats;
