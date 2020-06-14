import React, { Component } from "react";
import { connect } from "react-redux";
import { setActiveUser } from "../actions/activeUser";

import styles from "./Login.module.scss";

class Login extends Component {
  state = {
    user: "",
    userId: "",
  };
  change = (event) => {
    const { users } = this.props;
    for (let user in users) {
      if (users[user].name === event.target.value) {
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
  };
  render() {
    const { users } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.title}>
              Welcome to the <span>Would You Rather App</span>
            </div>
            <div className={styles.subtitle}>Please sign in to continue</div>
          </div>
          <div className={styles.select}>
            <input
              type="text"
              name="user"
              list="users"
              onChange={this.change}
              value={this.state.user}
              className={styles["input-field"]}
              placeholder="Select user"
            />
            <datalist id="users">
              {Object.keys(users).map((user) => (
                <option value={users[user].name} key={users[user].id}>
                  {users[user].name}
                </option>
              ))}
            </datalist>
          </div>
          <div className={styles.button}>
            <button
              className={styles.btn}
              onClick={(event) => this.click(event)}
            >
              Select User
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, activeUser }) {
  return { users, activeUser };
}

export default connect(mapStateToProps)(Login);
