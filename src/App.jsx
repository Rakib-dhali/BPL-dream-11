import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Players from "./components/Players";
import { Suspense } from "react";

const fetchPlayer = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const App = () => {
  const playerPromise = fetchPlayer();
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Players playerPromise={playerPromise} />
      </Suspense>
    </>
  );
};

export default App;
