import React from "react";
import PollOptions from "./PollOptions";
import "./Poll.css";
import db from "./firebase";
import VotePoll from "./VotePoll";
import { useHistory } from "react-router-dom";

function Poll({ codeId }) {
  const [options, setOptions] = React.useState([]);
  const [question, setQuestion] = React.useState([]);
  const [voted, setVoted] = React.useState(false);
  let pollHistory  = useHistory();

  React.useEffect(() => {
    db.collection("polls")
      .doc(codeId)
      .onSnapshot((snapshot) => {
        setQuestion(snapshot.data());
      });
  }, [codeId]);
  console.log(question);

  React.useEffect(() => {
    db.collection("polls")
      .doc(codeId)
      .collection("Options")
      .onSnapshot((snapshot) => {
        setOptions(
          snapshot.docs.map((doc) => ({
            options: doc.data(),
            id: doc.id,
          }))
        );
      });
  }, [codeId]);
  const max = Math.max(...options.map((option) => option.options.votes));
  let sum = 0;
  let arr = [];
  arr.push(options.map((option) => option.options.votes));

  for (let num of arr[0]) {
    sum = sum + num;
  }

  // console.log(votes);

  React.useEffect(() => {
    localStorage.getItem(codeId) === "voted" ? setVoted(true) : setVoted(false);
  }, []);

  const refresh =(e)=>{
      e.preventDefault();
      pollHistory.go(0);
  }
  return (
    <div className="votedOrNot">
      {voted ? (
        <div className="poll">
          <div className="pollHeader">
            <h2>{question.Question}</h2>
          </div>

          {options.map((option) => (
            <PollOptions
              label={option.options.label}
              votes={option.options.votes}
              max={max}
            />
          ))}
          <div className="pollFooter">
            <h2>Total Votes : {sum} </h2>
            <button onClick={refresh}>Refresh</button>
          </div>
        </div>
      ) : (
        <div className="votePoll">
          <h2>{question.Question}</h2>
          <div className="optionForm">
            {options.map(({ options, id }) => (
              <VotePoll
                label={options.label}
                key={id}
                optionId={id}
                code={codeId}
                voteOrNot={setVoted}
              />
            ))}
          </div>
          <h4>
            *You can vote only once, so be sure before clicking any option.
          </h4>
        </div>
      )}
    </div>
  );
}

export default Poll;
