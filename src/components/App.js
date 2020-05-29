import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/getData";
import QuestionsList from "./QuestionsList";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
    return;
  }

  render() {
    return (
      <div className="App">
        {this.props.loading ? null : (
          <NavBar />
          // <Login />
          // <LeaderBoard />
          // <React.Fragment>
          //   <NewQuestion />
          //   <QuestionsList />
          // </React.Fragment>
        )}
      </div>
    );
  }
}

function mapStateToProps({ activeUser }) {
  return {
    loading: activeUser === null,
  };
}

export default connect(mapStateToProps)(App);
