import React from "react";

const T20Players = ["First Player", "Second Player", "Third Player"];
const RanjiTrophyPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];

const IndianPlayers = () => {
  const allPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <ul>
      {allPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </ul>
  );
};

export default IndianPlayers;
