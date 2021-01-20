import React from "react";
import db from "../../firebase";
import "./WordCloud.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

function WordCloud() {
  var QRCode = require("qrcode.react");

  const [wordCloudQuestion, setWordCloudQuestion] = React.useState("");
  const [code, setCode] = React.useState("");
  const [created, setCreated] = React.useState(false);
  const [copy, setCopy] = React.useState(false);

  var randomCode = "W";

  const addWordCloud = () => {
    for (var i = 1; i <= 3; i++) {
      randomCode += Math.floor(Math.random() * 101);
    }
    db.collection("polls").doc(randomCode).set({
      Question: wordCloudQuestion,
    });
    setCode(randomCode);
    setCreated(true);
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
        <div className="word-cloud">
          <h3>
            Create your own wordcloud with us, just type your question and rest
            we will handle!!
          </h3>
          <input
            className="word-cloud-input"
            placeholder="type your question"
            autoFocus={true}
            onChange={(e) => {
              setWordCloudQuestion(e.target.value);
            }}
          />
          <button className="create-word-cloud" onClick={addWordCloud}>Create</button>
        </div>
      )}
    </div>
  );
}
export default WordCloud;
