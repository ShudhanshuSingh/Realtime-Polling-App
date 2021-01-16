import React from "react";
import "./VotePoll.css";
import firebase from "firebase";
import db from "../../firebase";
function VotePoll({ label, optionId, code,voteOrNot}) {
  //   console.log(ans);
  //   localStorage.setItem("code", "21408");
  //   console.log(localStorage);

  const voted = (e) => {
    e.preventDefault();
    console.log(optionId);
    optionId && code
      ? db
          .collection("polls")
          .doc(code)
          .collection("Options")
          .doc(optionId)
          .update({
            votes: firebase.firestore.FieldValue.increment(1),
          })
      : alert("error");

    localStorage.setItem(code, "voted");
    voteOrNot(true);
    console.log(localStorage.getItem(code))
  };

  return (
    <div className="voteOptions">
      <button value={label} onClick={voted}>
        {label}
      </button>
    </div>
  );
}

export default VotePoll;
