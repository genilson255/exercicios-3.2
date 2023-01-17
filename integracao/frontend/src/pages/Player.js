import React from 'react'
import PlayerService from '../services/PlayerService';

export default function Player() {
  const [player, setPlayer] = React.useState();
  const updatePlayer = () => {
    const players = PlayerService.fetchedPlayers();
    setPlayer(player);
  }
  React.useEffect(updatePlayer, []);
  return (
    <div>
      <button onClick={updatePlayer} >Update</button>
      <table> 
        <thead> 
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {players.map((play) => (
            <tr>
              <td>{play.id}</td>
              <td>{play.name}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
