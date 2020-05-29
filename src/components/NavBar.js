import React, { Component } from "react";
import { connect } from "react-redux";
import { setActiveUser } from "../actions/activeUser";

class NavBar extends Component {
  state = {};
  componentDidMount() {
    console.log("activeUser ====> ", this.props.loggedUser);
  }
  click = () => {
    const { dispatch } = this.props;
    dispatch(setActiveUser(""));
  };
  render() {
    const { loggedUser, users } = this.props;
    console.log("ActiveUser ====> ", loggedUser);
    return (
      <div>
        <h2>NavBar</h2>
        {loggedUser ? (
          <div>
            <nav>
              <ul>
                <li>Home</li>
                <li>New Question</li>
                <li>Leader Board</li>
              </ul>
            </nav>
            <p> Welcome, {users[loggedUser].name}!</p>
            <button onClick={this.click}>Logout</button>
          </div>
        ) : (
          <div>
            <nav>
              <ul>
                <li>Home</li>
                <li>New Question</li>
                <li>Leader Board</li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ activeUser, users }) {
  console.log("HeyHo: ", activeUser.id);
  const loggedUser = activeUser.id;
  return { loggedUser, users };
}

export default connect(mapStateToProps)(NavBar);
