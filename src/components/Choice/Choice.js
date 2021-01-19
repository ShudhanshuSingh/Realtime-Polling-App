import React from "react";
import "./Choice.css";
import Pollicon from "./Poll.png";
import wordcloud from "./wordcloud.png";
import { Link, useHistory } from "react-router-dom";

function Choice() {
  return (
    <div className="choice">
      <Link to="/create">
        <div className="choose vote-poll">
          <img src={Pollicon} alt="pollicon" />
          <h3>Vote Poll</h3>
        </div>
      </Link>
      <Link to="/wordcloud">
        <div className="choose word-cloud">
          <img src={wordcloud} alt="pollicon" />
          <h3>Word Cloud</h3>
        </div>
      </Link>
    </div>
  );
}

export default Choice;
