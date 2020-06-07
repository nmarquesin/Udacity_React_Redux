import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/getData";
import {
  getAvatar,
  getAuthorsName,
  getText,
  getVotes,
  answeredByUser,
  votedByUser,
} from "../utils/commonFunctions";

import styles from "./Answer.module.scss";

class Answer extends Component {
  handleClick = (event) => {
    const { dispatch, qId } = this.props;
    dispatch(handleSaveAnswer(qId, event.target.value));
  };

  askQuestion = () => {
    const { questions, qId } = this.props;
    return (
      <div className={styles["question-area"]}>
        <div className={styles["question-prompt"]}>Would you rather...</div>
        <div className={styles.button}>
          <button
            className={styles.btn}
            value="optionOne"
            onClick={this.handleClick}
          >
            {getText(1, questions, qId)}
          </button>
        </div>
        <div className={styles.button}>
          <button
            className={styles.btn}
            value="optionTwo"
            onClick={this.handleClick}
          >
            {getText(2, questions, qId)}
          </button>
        </div>
      </div>
    );
  };

  getPercentage = (arg) => {
    const { questions, qId } = this.props;
    return (
      (getVotes(arg, questions, qId) * 100) /
      (getVotes(1, questions, qId) + getVotes(2, questions, qId))
    );
  };

  getTotal = () => {
    const { questions, qId } = this.props;
    return getVotes(1, questions, qId) + getVotes(2, questions, qId);
  };
  ss;
  showPoll = () => {
    const { questions, qId, users, activeUser } = this.props;
    return (
      <div className={styles.qArea}>
        <p>Results for question: </p>

        <div className={styles.aArea}>
          {votedByUser(qId, users, activeUser) === "optionOne" ? (
            <div className={styles.aBadge}>your vote</div>
          ) : (
            ""
          )}
          <p>Would you rather {getText(1, questions, qId)}?</p>
          <p>{this.getPercentage(1)}% of votes</p>
          <p>
            {getVotes(1, questions, qId)} out of {this.getTotal()} votes
          </p>
        </div>
        <div className={styles.aArea}>
          {votedByUser(qId, users, activeUser) === "optionTwo" ? (
            <div className={styles.aBadge}>your vote</div>
          ) : (
            ""
          )}
          <p>Would you rather {getText(2, questions, qId)}?</p>
          <p>{this.getPercentage(2)}% of votes</p>
          <p>
            {getVotes(2, questions, qId)} out of {this.getTotal()} votes
          </p>
        </div>
      </div>
    );
  };

  render() {
    const { users, questions, qId, activeUser } = this.props;
    console.log("active user =====> ", activeUser["id"]);
    console.log("users [active user] =====> ", users[activeUser["id"]]);
    return (
      <div>
        <div className={styles.container}>
          <div className={styles["question-card"]}>
            <div className={styles["card-title"]}>
              {getAuthorsName(users, questions, qId)} asks:
            </div>
            <div className={styles["card-body"]}>
              <div className={styles.img}>
                <img
                  width="100px"
                  height="100px"
                  src={getAvatar(users, questions, qId)}
                  alt="user avatar"
                  className={styles.avatar}
                />
              </div>
              {answeredByUser(qId, users, activeUser)
                ? this.showPoll()
                : this.askQuestion()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ activeUser, questions, users }) {
  return {
    activeUser,
    users,
    questions,
  };
}
export default connect(mapStateToProps)(Answer);
