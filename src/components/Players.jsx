import { use, useState } from "react";
import Card from "./Card";
import Selected from "./Selected";

const Players = ({ playerPromise, setCoin, coin }) => {
  const data = use(playerPromise);
  const [selectedBtn, setSelectedBtn] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([])
  console.log(selectedPlayers);
  
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between items-center my-10 mx-auto ">
        <h2 className="text-2xl font-bold ">{selectedBtn==="available"? "Available players":`selected players (${selectedPlayers.length}/${data.length})` }</h2>
        <div className="flex  ">
          <button
            onClick={() => setSelectedBtn("available")}
            className={`${selectedBtn === "available" ? "bg-yellow-200" : ""} border border-neutral-400 px-5 py-3 rounded-l-md `}
          >
            available players
          </button>
          <button
            onClick={() => setSelectedBtn("selected")}
            className={`${selectedBtn === "selected" ? "bg-yellow-200" : ""} border border-neutral-400 px-5 py-3 rounded-r-md`}
          >
            selected players ({selectedPlayers.length})
          </button>
        </div>
      </div>
      {
        selectedBtn==="available"? 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
        {data.map((player, index) => (
          <Card key={index} setCoin={setCoin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} coin={coin} player={player} />
        ))}
      </div>
        :<div>
          <Selected selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
        </div>
      }
    </div>
  );
};
export default Players;
