import React from "react";
import db from "../../firebase";
import "./WordCloud.css";

function WordCloud() {
  const [wordCloudQuestion, setWordCloudQuestion] = React.useState("");
  var randomCode = 'W'
    
  const addWordCloud = () =>{
    for (var i = 1; i <= 3; i++) {
      randomCode += Math.floor(Math.random() * 101);
    }  
    db.collection("polls").doc(randomCode).set({
      Question: wordCloudQuestion,
    });
  }
  return (
    <div className="word-cloud">
      <h3>
        Create your own wordcloud with us, just type your question and rest we
        will handle!!
      </h3>
      <input
        className="word-cloud-input"
        placeholder="type your question"
        autoFocus={true}
        onChange={(e) => {
          setWordCloudQuestion(e.target.value);
        }}
      />
      <button className="create-word-cloud">Create</button>
    </div>
  );
}

export default WordCloud;
