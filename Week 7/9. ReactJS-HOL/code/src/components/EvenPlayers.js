import React from "react";

const EvenPlayers = ({ IndianTeam }) => {
  const [, second, , fourth, , sixth] = IndianTeam;

  return (
    <ul>
      <li>Second: {second.name}</li>
      <li>Fourth: {fourth.name}</li>
      <li>Sixth: {sixth.name}</li>
    </ul>
  );
};

export default EvenPlayers;
