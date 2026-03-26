import React from "react";

const Noplayer = ({selectedBtn, setSelectedBtn}) => {
  return <div className="flex gap-4 flex-col items-center justify-center">
    <h2  className="text-2xl font-semibold">no player to show</h2>
    <p className="text-gray-500">go to available tab</p>
    <button
            onClick={() => setSelectedBtn("available")}
            className={`${selectedBtn === "available" ? "bg-yellow-200" : ""} bg-yellow-400 border btn border-neutral-400 px-5 py-3  `}
          >
            available players
          </button>
  </div>;
};

export default Noplayer;
