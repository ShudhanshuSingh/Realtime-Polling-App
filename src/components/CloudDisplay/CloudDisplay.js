import React from "react";
import db from "../../firebase";
import "./CloudDisplay.css";
import firebase from "firebase";
function CloudDisplay({ codeId }) {
  const [answered,setAnswered] = React.useState(true);
  const [question,setQuestion] = React.useState([]);
  const [options,setOptions]  = React.useState([]);
  const [input,setInput] = React.useState('');
  const [alreadyOption,setAlreadyOption] = React.useState(null)

  React.useEffect(() => {
    db.collection("polls")
      .doc(codeId)
      .onSnapshot((snapshot) => {
        setQuestion(snapshot.data());
      });
  }, [codeId]);
  
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
  console.log(options)
  
  
  var id = "";
  const addAnswer = () =>{
    options.map((option)=>(
      (option.options.label ==="ABCD")?id = option.id:id = null
    ))
    setAlreadyOption(id);
    console.log(alreadyOption);
    alreadyOption != null?(
      db
      .collection("polls")
      .doc(codeId)
      .collection("Options")
      .doc(alreadyOption)
      .update({
        votes: firebase.firestore.FieldValue.increment(1),
      })

    ):(
      db.collection("polls").doc(codeId).collection("Options").add({
        label: input,
        votes: 0,
      })
    )
    id="";
    setInput('');
  }
  return (
    <div className="cloud-display">
      <h3>
        {question.Question}
      </h3>
      <input
        className="word-cloud-input"
        placeholder="type your answer"
        autoFocus={true}
        onChange={(e)=>setInput(e.target.value)}
      />
      <button className="create-word-cloud" onClick={addAnswer}>Go</button>
    </div>
  );
}

export default CloudDisplay;
