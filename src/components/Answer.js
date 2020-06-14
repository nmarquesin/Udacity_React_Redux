import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/getData";
import {
  getAuthorsName,
  getAuthor,
  getText,
  getVotes,
  answeredByUser,
  votedByUser,
} from "../utils/commonFunctions";

import styles from "./Answer.module.scss";
import Avatar from "./Avatar";

class Answer extends Component {
  handleClick = (event) => {
    const { dispatch, qId } = this.props;
    dispatch(handleSaveAnswer(qId, event.target.value));
  };
  makeButton = (opt, option) => {
    const { questions, qId } = this.props;
    return (
      <div className={styles.button}>
        <button
          className={styles.btn}
          value={option}
          onClick={this.handleClick}
        >
          {getText(opt, questions, qId)}
        </button>
      </div>
    );
  };
  askQuestion = () => {
    return (
      <div className={styles["question-area"]}>
        <div className={styles["question-prompt"]}>Would you rather...</div>
        {this.makeButton(1, "optionOne")}
        {this.makeButton(2, "optionTwo")}
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
  showResultForQuestion(opt, option) {
    const { questions, qId, users, activeUser } = this.props;
    return (
      <div
        className={
          this.isWinningAnswer(opt)
            ? styles["answer-area-winner"]
            : styles["answer-area-loser"]
        }
      >
        {votedByUser(qId, users, activeUser) === option ? (
          <div className={styles["badge-area"]}>
            <div className={styles.badge}>your vote</div>
          </div>
        ) : (
          ""
        )}
        <div className={styles["question-prompt2"]}>
          Would you rather {getText(opt, questions, qId)}?
        </div>

        <div>{this.percentageBar(this.getPercentage(opt))}</div>
        <div className={styles.centered}>
          {getVotes(opt, questions, qId)} out of {this.getTotal()} votes
        </div>
      </div>
    );
  }
  showPoll = () => {
    return (
      <div className={styles["question-area"]}>
        <div className={styles.results}>Results: </div>
        {this.showResultForQuestion(1, "optionOne")}
        {this.showResultForQuestion(2, "optionTwo")}
      </div>
    );
  };

  render() {
    const { users, questions, qId, activeUser } = this.props;
    return (
      <div>
        <div className={styles.container}>
          <div className={styles["question-card"]}>
            {answeredByUser(qId, users, activeUser)
              ? this.showPollHeader()
              : this.askQuestionHeader()}
            <div className={styles["card-body"]}>
              <div className={styles.avatar}>
                <Avatar id={getAuthor(questions, qId)} />
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
