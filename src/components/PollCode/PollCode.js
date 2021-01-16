import React from "react";
import "./PollCode.css";
import db from "../../firebase";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function PollCode() {
  const [input, setInput] = React.useState("");
  // const [code, setCode] = React.useState("");
  const [ids, setIds] = React.useState("");
  let history = useHistory()

  const Submit = (e) => {
    e.preventDefault();
    // setCode(input);
    ids.includes(input) ?(
      history.push(`/join/${input}`)
    ):(
      alert("Invalid code")
    )

    
  };

  React.useEffect(() => {
    db.collection("polls").onSnapshot((snapshot) => {
      setIds(snapshot.docs.map((doc) => doc.id));
    });
  }, []);
  return (
    <Link to="/join">
      <div className="pollCode">
        <div className="pollInput">
          <div className="inputBox">
            <input
              type="text"
              placeholder="Enter a join code"
              onChange={(e) => setInput(e.target.value)}
              maxLength="8"
            />
          </div>
          <button onClick={Submit}>JOIN</button>
        </div>
      </div>
    </Link>
  );
}

export default PollCode;
