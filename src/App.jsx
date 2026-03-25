import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Players from "./components/Players";
import { Suspense, useState } from "react";


const fetchPlayer = async () => {
  const res = await fetch("/players.json");
  return res.json();
};


const App = () => {
  const [coin, setCoin] = useState(50000)
  const playerPromise = fetchPlayer();
  return (
    <>
      <Navbar coin={coin}/>
      <Banner />
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Players coin={coin} setCoin={setCoin} playerPromise={playerPromise} />
      </Suspense>
    </>
  );
};

export default App;
