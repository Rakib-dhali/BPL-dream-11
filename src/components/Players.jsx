import { use, useState } from "react";
import Card from "./Card";

const Players = ({ playerPromise, setCoin, coin }) => {
  const data = use(playerPromise);
  const [selectedBtn, setSelectedBtn] = useState("available");
  
  return (
    <>
      <div className="flex justify-between items-center my-10">
        <h2>{selectedBtn}</h2>
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
            selected players
          </button>
        </div>
      </div>
      {
        selectedBtn==="available"? 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
        {data.map((player) => (
          <Card setCoin={setCoin} coin={coin} player={player} />
        ))}
      </div>
        :""
      }
    </>
  );
};
export default Players;
