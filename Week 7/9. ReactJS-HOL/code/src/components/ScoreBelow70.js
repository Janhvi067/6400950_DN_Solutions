import React from "react";

const ScoreBelow70 = ({ players }) => {
  const filtered = players.filter((item) => item.score < 70);

  return (
    <ul>
      {filtered.map((item, index) => (
        <li key={index}>
          Mr. {item.name} - {item.score}
        </li>
      ))}
    </ul>
  );
};

export default ScoreBelow70;
