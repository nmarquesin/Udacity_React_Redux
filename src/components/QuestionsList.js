import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";
import { setSelectedQuestion } from "../actions/selectedQ";
import {
  getAuthor,
  getAvatar,
  getText,
  answeredByUser,
} from "../utils/commonFunctions";

class QuestionsList extends Component {
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
      <div>
        <h3>Questions</h3>
        Selected:{" "}
        {this.state.showUnansweredQ ? (
          <div>Unanswered Questions</div>
        ) : (
          <div>Answered Questions</div>
        )}
        <div>
          <button
            value="unanswered"
            onClick={(e) => this.selectQuestionGroup(e.target.value)}
          >
            Unanswered Questions
          </button>
          <button
            value="answered"
            onClick={(e) => this.selectQuestionGroup(e.target.value)}
          >
            Answered Questions
          </button>
        </div>
        <ul>
          {questionIds.map((id) => (
            <li key={id} style={{ listStyleType: "none" }}>
              <QuestionCard
                id={id}
                author={getAuthor(questions, id)}
                avatar={getAvatar(users, questions, id)}
                qText={getText(1, questions, id)}
                answered={answeredByUser(id, users, activeUser)}
                showUnansweredQ={this.state.showUnansweredQ}
                onHandleClick={this.handleClick}
              />
            </li>
          ))}
        </ul>
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

export default connect(mapStateToProps)(QuestionsList);
