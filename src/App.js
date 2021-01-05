import React from "react";
import "./App.css";
import PollCode from "./PollCode";
import CreatePoll from "./CreatePoll";
import instaProfile from "instagram-profile-data";

import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
// import createBrowserHistory from 'history/createBrowserHistory';
import { createBrowserHistory } from 'history';
import CheckPollCode from "./CheckPollCode";

function App() {
  const history = createBrowserHistory();
  const joinClick = (e) => {
    e.preventDefault();
    history.push("/join");
  };
  const createClick = (e)=>{
    e.preventDefault();
    history.push("/create");
  }
  
  return (
    <Router history={history} >
      <div className="App">
        <Switch>
          <Route path="/join/:pollId">
            <CheckPollCode />
          </Route>
          <Route path="/create">
            <CreatePoll />
          </Route>
          <Route path="/join">
            <PollCode />
          </Route>
          <Route path="/">
            <h2 className="pollTag">A poll for a POLL.</h2>
            <div className="homeButton">
              <button type="submit" onClick={joinClick}>JOIN</button>
              <button type="submit" onClick={createClick}>CREATE</button>
              <instaProfile username={"shudhanshu_08"}/>
            </div>
          </Route>
          <Route path="*" component={PollCode} />
        </Switch>

        <footer className="footer">
          <h3>Made with 💖 by Shudhanshu</h3>
        </footer>
      </div>
    </Router>
  );
}

export default App;
