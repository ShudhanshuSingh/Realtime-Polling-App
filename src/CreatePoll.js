import React from "react";
import "./CreatePoll.css";
import db from "./firebase";
import { CopyToClipboard } from "react-copy-to-clipboard";

function CreatePoll() {
  var QRCode = require("qrcode.react");
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");
  const [input3, setInput3] = React.useState("");
  const [input4, setInput4] = React.useState("");
  const [question, setQuestion] = React.useState("");
  const [pollOptions, setPollOptions] = React.useState([]);
  const [created, setCreated] = React.useState(false);
  const [copy, setCopy] = React.useState(false);
  const [code, setCode] = React.useState("");

  var randomCode = "";
  const createPoll = (e) => {
    e.preventDefault();
    if (input1 || input2 || input3 || input4 & (question !== "")) {
      for (var i = 1; i <= 3; i++) {
        randomCode += Math.floor(Math.random() * 101);
      }
      setCode(randomCode);
      let allOptions = [];
      if (input1 !== "") {
        allOptions.push({ label: input1, votes: 0 });
      }
      if (input2 !== "") {
        allOptions.push({ label: input2, votes: 0 });
      }
      if (input3 !== "") {
        allOptions.push({ label: input3, votes: 0 });
      }
      if (input4 !== "") {
        allOptions.push({ label: input4, votes: 0 });
      }
      setPollOptions(allOptions);
      setInput1("");
      setInput2("");
      setInput3("");
      setInput4("");
      setQuestion("");
      setCreated(true);

      db.collection("polls").doc(randomCode).set({
        Question: question,
      });
      allOptions.map(({ label, votes }) =>
        db.collection("polls").doc(randomCode).collection("Options").add({
          label: label,
          votes: votes,
        })
      );
    }
    else{
      alert("Please enter a Question and atleast an answer for Question to create the POLL.")
    }
  };

  React.useState(() => {
    setCode(randomCode);
  }, [randomCode]);

  const resetPoll = (e) => {
    e.preventDefault();
    setInput1("");
    setInput2("");
    setInput3("");
    setInput4("");
    setQuestion("");
  };

  return (
    <div className="create">
      {created ? (
        <div className="pollInfo">
          <div className="codeDisplay">
            <h3>Your poll code is {code}</h3>
          </div>
          <div className="qrCode">
            <QRCode value={`https://polls-3a0cb.web.app/join/${code}`} />
            <h3>You can also scan above QR Code to get shareable link</h3>
          </div>
          <h3>--or--</h3>
          <div className="copyLink">
            <CopyToClipboard
              className="copyLink"
              text={`https://polls-3a0cb.web.app/join/${code}`}
              onCopy={() => {
                setCopy(true);
              }}
            >
              <button>{`https://polls-3a0cb.web.app/join/${code}`}</button>
            </CopyToClipboard>
            {copy ? (
              <h3>Link Copied</h3>
            ) : (
              <h3>Click above button to copy Link </h3>
            )}
          </div>
        </div>
      ) : (
        <div className="createPoll">
          <h2>Create your poll </h2>
          <div className="pollQuestion">
            <div className="inputBox">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Enter a Question for poll"
              />
            </div>
          </div>

          <div className="Options">
            <div className="left">
              <div className="inputBox">
                <input
                  type="text"
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                  placeholder="Enter poll Answer 1"
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                  placeholder="Enter poll Answer 2"
                />
              </div>
            </div>
            <div className="right">
              <div className="inputBox">
                <input
                  type="text"
                  value={input3}
                  onChange={(e) => setInput3(e.target.value)}
                  placeholder="Enter poll Answer 3"
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  value={input4}
                  onChange={(e) => setInput4(e.target.value)}
                  placeholder="Enter poll Answer 4"
                />
              </div>
            </div>
          </div>
          <h3>
            *It is not necessary to fill all options.The number of options you
            fill,only that many options will be available during poll voting.{" "}
          </h3>
          <div className="button">
            <button onClick={createPoll}>Create</button>
            <button onClick={resetPoll}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreatePoll;
