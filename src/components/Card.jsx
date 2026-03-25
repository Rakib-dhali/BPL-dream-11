import { useState } from "react";
import { FaUser } from "react-icons/fa";

const Card = ({player,coin, setCoin, selectedPlayers, setSelectedPlayers}) => {

  const handleChoosePlayer = () =>{
    if(coin<player.price){
      alert("insufficient coin")
    }else{
      setCoin(coin-player.price);
      setSelected(true);
      setSelectedPlayers([...selectedPlayers, player])
    }

  }

  

const [selected, setSelected] = useState(false)

  return (
    <div className="p-5 border-2 bg-amber-50 border-gray-400 rounded-lg flex flex-col gap-3">
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
            <button onClick={() => handleChoosePlayer()} className={`btn ${selected? "btn-disabled ": ""}`}>{selected? "selected": "choose player"}</button>
          </div>
        </div>
  )
}

export default Card