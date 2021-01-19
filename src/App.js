import React from "react";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
// import createBrowserHistory from 'history/createBrowserHistory';
import { createBrowserHistory } from "history";
import About from "./components/About/About";
import CheckPollCode from "./components/CheckPollCode/CheckPollCode";
import CreatePoll from "./components/CreatePoll/CreatePoll";
import Nav from "./components/Nav/Nav";
import PollCode from "./components/PollCode/PollCode";
import WordCloud from "./components/WordCloud/WordCloud";
import Choice from "./components/Choice/Choice";

function App() {
  const history = createBrowserHistory();
  const joinClick = (e) => {
    e.preventDefault();
    history.push("/join");
  };
  const createClick = (e) => {
    e.preventDefault();
    history.push("/choice");
  };

  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route path="/join/:pollId">
            <Nav backbutton="/" />
            <CheckPollCode />
          </Route>
          <Route path="/create">
            <Nav backbutton="/" />
            <CreatePoll />
          </Route>
          <Route path="/choice">
            <Nav backbutton="/" />
            <Choice />
          </Route>
          <Route path="/join">
            <Nav backbutton="/" />
            <PollCode />
          </Route>
          <Route path="/wordcloud">
            <Nav backbutton="/" />
            <WordCloud />
          </Route>
          <Route path="/about">
            <Nav backbutton="/" />

            <About />
          </Route>
          <Route path="/">
            <Nav />
            <h2 className="pollTag">A poll for a POLL.</h2>
            <div className="homeButton">
              <button type="submit" onClick={joinClick}>
                JOIN
              </button>
              <button type="submit" onClick={createClick}>
                CREATE
              </button>
            </div>
          </Route>
          <Route path="*" component={PollCode} />
        </Switch>
        <div className="texts">
          <h3 className="text">Awesome app for creating polls👏</h3>
          <h3 className="text">This is soo fast!⏩</h3>
          <h3 className="text">OMG!! I just loved it</h3>
          <h3 className="text">WordCloud also available now!!</h3>
          <h3 className="text">Damn,Easy to use...Loved it💖💖</h3>
          <h3 className="text">Better than most polling app</h3>
        </div>
        <footer className="footer">
          <h3>Made with 💖 by Shudhanshu</h3>
        </footer>
      </div>
    </Router>
  );
}

export default App;
