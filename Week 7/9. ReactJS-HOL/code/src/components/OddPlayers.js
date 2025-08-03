import React from "react";

const OddPlayers = ({ IndianTeam }) => {
  const [first, , third, , fifth] = IndianTeam;

  return (
    <ul>
      <li>First: {first.name}</li>
      <li>Third: {third.name}</li>
      <li>Fifth: {fifth.name}</li>
    </ul>
  );
};

export default OddPlayers;
