import React from "react";
import "./PollOptions.css";

function PollOptions({ votes, label, max }) {
 
  var colors = [
    "#C70039",
    "#FFC300",
    "#FF5733",
    "#DAF7A6",
    "#C70039",
    "tan",
    "plum",
    "#581845",
    "#2281C5",
    "#D75C5E",
    "#33FF57",
    "#33FFBD",
  ];
  return (
    <div className="pollOptions">
      <div className="voteLabels">{label}</div>
      <div className="voteData">
        {max === 0 ? (
          <div
            className="bar"
            style={{
              maxWidth: `${(0*100)}% ` ,
              backgroundColor:
                colors[Math.floor(Math.random() * colors.length)],
            }}
          >
            <h2>0%</h2>
          </div>
        ) : (
          <div
            className="bar"
            style={{
              maxWidth: `${(votes / max) * 100}%`,
              backgroundColor:
                colors[Math.floor(Math.random() * colors.length)],
            }}
          >
            <h2>{Math.round((votes / max) * 100)}%</h2>
          </div>
        )}
        <h3 className="voteCount">{votes}</h3>
      </div>
    </div>
  );
}

export default PollOptions;
