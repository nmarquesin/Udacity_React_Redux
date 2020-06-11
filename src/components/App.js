import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { handleInitialData } from "../actions/getData";
import QuestionList from "./QuestionList";
import Question from "./Question";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import Avatar from "./Avatar";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
    return;
  }

  render() {
    const { loggedUser } = this.props;

    return (
      <div className="App">
        {this.props.loading ? null : (
          <React.Fragment>
            <NavBar />
            <Switch>
              <Route exact path="/newquestion">
                {loggedUser ? <NewQuestion /> : <Redirect to="/login" />}
              </Route>

              <Route exact path="/leaderboard">
                <LeaderBoard />
              </Route>

              <Route exact path="/login">
                {loggedUser ? <Redirect to="/" /> : <Login />}
              </Route>

              <Route path="/question/:id" children={<Question />} />

              <Route exact path="/">
                {loggedUser ? <QuestionList /> : <Redirect to="/login" />}
              </Route>
            </Switch>
          </React.Fragment>
        )}
      </div>
    );
  }
}

function mapStateToProps({ activeUser }) {
  const loading = activeUser === null;
  const loggedUser = loading ? null : activeUser.id;
  return {
    loading,
    loggedUser,
  };
}

export default connect(mapStateToProps)(App);
