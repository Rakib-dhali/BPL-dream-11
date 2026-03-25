import { use } from "react";
import { FaUser } from "react-icons/fa";

const Players = ({ playerPromise }) => {
  const data = use(playerPromise);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {data.map((player) => (
        <div className="p-5 border border-gray-400 rounded-lg">
          <img className="rounded-lg" src={player.imageUrl} alt="" />
          <div className="flex items-center gap-2">
            <FaUser />
            <h1 className="rounded-lg  text-2xl font bold">{player.playerName}</h1>
          </div>

          <div className="flex items-center justify-between">
            <span>{player.country}</span>
            <span className="rounded-lg p-3 bg-gray-200">{player.playerType}</span>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <span>rating</span>
            <span>{player.rating}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>{player.battingStyle}</span>
            <span>{player.bowlingStyle}</span>
          </div>
          <div className="flex items-center justify-between">
            <span> price: ${player.price}</span>
            <button class="btn">Chose player</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Players;
