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

  askQuestionHeader = () => {
    const { users, questions, qId } = this.props;
    return (
      <div className={styles["card-title"]}>
        {getAuthorsName(users, questions, qId)} asks:
      </div>
    );
  };

  showPollHeader = () => {
    const { users, questions, qId } = this.props;
    return (
      <div className={styles["card-title"]}>
        Asked by {getAuthorsName(users, questions, qId)}
      </div>
    );
  };
  isWinningAnswer = (answer) => {
    const { questions, qId } = this.props;
    const winningAnswer =
      getVotes(1, questions, qId) >= getVotes(2, questions, qId) ? 1 : 2;
    return answer === winningAnswer;
  };
  percentageBar = (percentage) => {
    return (
      <div className={styles["progress-bar-area"]}>
        <progress
          className={styles["progress-bar"]}
          max="100"
          value={percentage}
        ></progress>
        <div className={styles["progress-bar-percentage"]}>
          {Math.round(percentage)}%
        </div>
      </div>
    );
  };
  showPoll = () => {
    const { questions, qId, users, activeUser } = this.props;
    return (
      <div className={styles.qArea}>
        <p className={styles.results}>Results: </p>

        <div
          className={
            this.isWinningAnswer(1)
              ? styles["answer-area-winner"]
              : styles["answer-area-loser"]
          }
        >
          {votedByUser(qId, users, activeUser) === "optionOne" ? (
            <div className={styles.badge}>your vote</div>
          ) : (
            ""
          )}
          <p>Would you rather {getText(1, questions, qId)}?</p>

          <p>{this.percentageBar(this.getPercentage(1))}</p>
          <p className={styles.centered}>
            {getVotes(1, questions, qId)} out of {this.getTotal()} votes
          </p>
        </div>
        <div
          className={
            this.isWinningAnswer(2)
              ? styles["answer-area-winner"]
              : styles["answer-area-loser"]
          }
        >
          {votedByUser(qId, users, activeUser) === "optionTwo" ? (
            <div className={styles.badge}>your vote</div>
          ) : (
            ""
          )}
          <p>Would you rather {getText(2, questions, qId)}?</p>
          <p>{this.percentageBar(this.getPercentage(2))}</p>
          <p className={styles.centered}>
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
            {answeredByUser(qId, users, activeUser)
              ? this.showPollHeader()
              : this.askQuestionHeader()}
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
