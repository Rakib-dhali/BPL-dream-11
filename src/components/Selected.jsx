import deleteIcon from "/assets/delete.png";

const Selected = ({ selectedPlayers }) => {

  // const deletePlayer = () => {
  //   se
  // }

  return (
    <div className="flex flex-col gap-4">
      {selectedPlayers.map((selectedPlayer, index) => (
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
          <button >
            <img src={deleteIcon} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Selected;
