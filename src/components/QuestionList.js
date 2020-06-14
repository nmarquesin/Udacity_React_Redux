import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";
import { setSelectedQuestion } from "../actions/selectedQ";
import {
  getAuthor,
  getAuthorsName,
  getText,
  answeredByUser,
} from "../utils/commonFunctions";

import styles from "./QuestionList.module.scss";

class QuestionList extends Component {
  state = {
    showUnansweredQ: true,
  };
  selectQuestionGroup(value) {
    switch (value) {
      case "answered":
        return this.setState(() => ({
          showUnansweredQ: false,
        }));
      default:
        return this.setState(() => ({
          showUnansweredQ: true,
        }));
    }
  }
  handleClick = (value) => {
    this.props.dispatch(setSelectedQuestion(value));
    return;
  };
  render() {
    const { questionIds, questions, users, activeUser } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles["inner-container"]}>
          {this.state.showUnansweredQ ? (
            <div>
              <button
                value="unanswered"
                onClick={(e) => this.selectQuestionGroup(e.target.value)}
                className={styles["active-tab"]}
              >
                Unanswered Questions
              </button>
              <button
                value="answered"
                onClick={(e) => this.selectQuestionGroup(e.target.value)}
                className={styles["inactive-tab"]}
              >
                Answered Questions
              </button>
            </div>
          ) : (
            <div>
              <button
                value="unanswered"
                onClick={(e) => this.selectQuestionGroup(e.target.value)}
                className={styles["inactive-tab"]}
              >
                Unanswered Questions
              </button>
              <button
                value="answered"
                onClick={(e) => this.selectQuestionGroup(e.target.value)}
                className={styles["active-tab"]}
              >
                Answered Questions
              </button>
            </div>
          )}
          <div>
            <ul className={styles["list-area"]}>
              {questionIds.map((id) => (
                <li key={id} style={{ listStyleType: "none" }}>
                  <QuestionCard
                    id={id}
                    author={getAuthor(questions, id)}
                    name={getAuthorsName(users, questions, id)}
                    qText={getText(1, questions, id)}
                    answered={answeredByUser(id, users, activeUser)}
                    showUnansweredQ={this.state.showUnansweredQ}
                    onHandleClick={this.handleClick}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, activeUser, selectedQuestion }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    selectedQuestion,
    questions,
    users,
    activeUser,
  };
}

export default connect(mapStateToProps)(QuestionList);
