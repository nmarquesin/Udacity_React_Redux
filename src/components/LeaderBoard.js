import React, { Component } from "react";
import { connect } from "react-redux";
import UserScoreCard from "./UserScoreCard";

import styles from "./LeaderBoard.module.scss";

class LeaderBoard extends Component {
  calcQ = (user) => {
    return user.questions.length;
  };

  calcA = (user) => {
    return Object.keys(user.answers).length;
  };

  calcScore = (user) => {
    return this.calcQ(user) + this.calcA(user);
  };

  usersByScore = () => {
    const obj = this.props.userIds.reduce(
      (o, key) => ({
        ...o,
        [key]: this.calcScore(this.props.users[key]),
      }),
      {}
    );
    return obj;
  };

  usersOrderedByScore = () => {
    const obj = this.usersByScore();
    return Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  };

  render() {
    const { userIds, users } = this.props;
    return (
      <div className={styles.container}>
        Leaderboard
        <div>
          {this.usersOrderedByScore().map((user) => (
            <UserScoreCard
              name={users[user].name}
              answers={this.calcA(users[user])}
              questions={this.calcQ(users[user])}
              score={this.calcScore(users[user])}
              avatar={users[user].avatarURL}
            />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),
    users,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
