import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import Answer from "./Answer";

class QuestionsList extends Component {
  state = {
    showUnansweredQuestions: true,
  };
  handleClick(value) {
    switch (value) {
      case "answered":
        return this.setState(() => ({
          showUnansweredQuestions: false,
        }));
      default:
        return this.setState(() => ({
          showUnansweredQuestions: true,
        }));
    }
  }

  render() {
    const { selectedQuestion } = this.props;
    // console.log(this.props);
    return (
      <div>
        {selectedQuestion === "" ? (
          <Fragment>
            <h3>Questions</h3>
            Selected:{" "}
            {this.state.showUnansweredQuestions ? (
              <div>Unanswered Questions</div>
            ) : (
              <div>Answered Questions</div>
            )}
            <div>
              <button
                value="unanswered"
                onClick={(e) => this.handleClick(e.target.value)}
              >
                Unanswered Questions
              </button>
              <button
                value="answered"
                onClick={(e) => this.handleClick(e.target.value)}
              >
                Answered Questions
              </button>
            </div>
            <ul>
              {this.props.questionIds.map((id) => (
                <li key={id} style={{ listStyleType: "none" }}>
                  <Question
                    id={id}
                    showUnansweredQuestions={this.state.showUnansweredQuestions}
                  />
                </li>
              ))}
            </ul>
          </Fragment>
        ) : (
          <div>
            <Answer
              showUnansweredQuestions={this.state.showUnansweredQuestions}
            />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, selectedQuestion }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    selectedQuestion,
  };
}

export default connect(mapStateToProps)(QuestionsList);
