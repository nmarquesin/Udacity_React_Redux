import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { setActiveUser } from "../actions/activeUser";

class Login extends Component {
  state = {
    user: "",
    userId: "",
  };

  change = (event) => {
    const { users } = this.props;
    let selectedUser = "";
    for (let user in users) {
      if (users[user].name === event.target.value) {
        selectedUser = user;
        this.setState(() => ({
          userId: users[user].id,
        }));
      }
    }
    return this.setState({ user: event.target.value });
  };
  click = () => {
    const { dispatch } = this.props;
    dispatch(setActiveUser(this.state.userId));

    // console.log("state II ", this.state.user);
    // console.log("state III ", this.state.userId);
  };
  render() {
    const { users, activeUser } = this.props;
    return (
      <div>
        <h3>Login</h3>
        {/* <div>
          <select id="users" onChange={this.change} value={this.state.user}>
            {Object.keys(users).map((user) => (
              <option value={users[user].name}>{users[user].name}</option>
            ))}
          </select>
        </div> */}
        <div>
          <input
            type="text"
            name="user"
            list="users"
            onChange={this.change}
            value={this.state.user}
          />
          <datalist id="users">
            {Object.keys(users).map((user) => (
              <option value={users[user].name} key={users[user].id}>
                {users[user].name}
              </option>
            ))}
          </datalist>
          <button onClick={(event) => this.click(event)}> Select User</button>
        </div>
        {/* <form id="users" action="">
          <DropdownButton id="dropdown-basic-button" title=>
          </DropdownButton>
          <input
            id="users"
            type="submit"
            value="Select User"
            onSubmit={(e) => this.handleClick(e)}
          />
        </form> */}
      </div>
    );
  }
}

function mapStateToProps({ users, activeUser }) {
  return { users, activeUser };
}

export default connect(mapStateToProps)(Login);
