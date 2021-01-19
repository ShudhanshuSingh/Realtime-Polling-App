import React from "react";
import { useHistory } from "react-router-dom";
import db from "../../firebase";
import { useParams } from "react-router-dom";
import Poll from "../Poll/Poll";
import CloudDisplay from "../CloudDisplay/CloudDisplay";

function CheckPollCode() {
  const [allPollCode, setAllPollCode] = React.useState([]);
  let { pollId } = useParams();
  React.useEffect(() => {
    db.collection("polls").onSnapshot((snapshot) => {
      setAllPollCode(snapshot.docs.map((doc) => doc.id));
    });
  }, []);
  return (
    <div className="checkPollCode">
      {allPollCode.includes(pollId) ? (
        pollId.includes("W")?(
          <CloudDisplay codeId={pollId}/>
        ):(
        <Poll codeId={pollId} />
        )
      ) : (
        <h3>Its seems you entered wrong code</h3>
      )}
    </div>
  );
}

export default CheckPollCode;
