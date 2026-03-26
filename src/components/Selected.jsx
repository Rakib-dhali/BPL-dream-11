import { toast } from "react-toastify";
import deleteIcon from "/assets/delete.png";
import Noplayer from "./Noplayer";

const Selected = ({ selectedPlayers, setSelectedPlayers, setSelectedBtn, selectedBtn }) => {

  const deletePlayer = (selectedPlayer) => {
    const filteredPlayers = selectedPlayers.filter((selected) => selected.playerName !== selectedPlayer.playerName)
    setSelectedPlayers(filteredPlayers)
    toast.error(`${selectedPlayer.playerName} is removed`)
  }

  return (
    <div className="flex flex-col gap-4 mb-10">


    {selectedPlayers.length > 0?

      selectedPlayers.map((selectedPlayer, index) => (
        <div
          className="flex items-center justify-between border border-gray-500 rounded-lg p-3"
          key={index}
        >
          <div className="flex gap-3">
            {" "}
            <img className="w-20" src={selectedPlayer.imageUrl} alt="" />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold mt-2">
                {selectedPlayer.playerName}
              </h1>
              <p className="text-gray-600 text-left">
                {selectedPlayer.battingStyle}
              </p>
            </div>
          </div>
          <button onClick={() => deletePlayer(selectedPlayer)} className="btn">
            <img src={deleteIcon} alt="" />
          </button>
        </div>
      )): <Noplayer setSelectedBtn={setSelectedBtn} selectedBtn={selectedBtn} /> }
    </div>
  );
};

export default Selected;
