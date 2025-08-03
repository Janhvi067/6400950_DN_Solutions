import React, { useState } from "react";
import players from "./data/players";
import ListOfPlayers from "./components/ListOfPlayers";
import ScoreBelow70 from "./components/ScoreBelow70";
import OddPlayers from "./components/OddPlayers";
import EvenPlayers from "./components/EvenPlayers";
import IndianPlayers from "./components/IndianPlayers";

function App() {
  const [flag, setFlag] = useState(true);

  const toggleView = () => setFlag(!flag);

  return (
    <div>
      <button onClick={toggleView}>Toggle View</button>
      {flag ? (
        <div>
          <h1>List of Players</h1>
          <ListOfPlayers players={players} />
          <h2>List of Players having Scores Less than 70</h2>
          <ScoreBelow70 players={players} />
        </div>
      ) : (
        <div>
          <h1>Indian Team</h1>
          <h2>Odd Players</h2>
          <OddPlayers IndianTeam={players} />
          <h2>Even Players</h2>
          <EvenPlayers IndianTeam={players} />
          <h2>List of Indian Players Merged:</h2>
          <IndianPlayers />
        </div>
      )}
    </div>
  );
}

export default App;
