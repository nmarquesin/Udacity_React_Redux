import React, { Component } from "react";
import { connect } from "react-redux";
import selectedQuestion from "../reducers/selectedQuestion";
import { handleSaveAnswer } from "../actions/getData";

class Answer extends Component {
  state = {};

  handleClick1 = () => {
    // answer.preventDefault();
    console.log("Answer ======> 1");
    const { dispatch, questionId } = this.props;
    const qid = questionId.id;
    dispatch(handleSaveAnswer(qid, "optionOne"));
  };
  handleClick2 = () => {
    // answer.preventDefault();
    console.log("Answer ======> 2");
    const { dispatch, questionId } = this.props;
    const qid = questionId.id;
    dispatch(handleSaveAnswer(qid, "optionTwo"));
  };

  askQuestion(text1, text2) {
    return (
      <div style={{ backgroundColor: "pink", textAlign: "center" }}>
        <p>Would you rather...</p>
        <button onClick={this.handleClick1}>{text1}</button>
        <button onClick={this.handleClick2}>{text2}</button>
      </div>
    );
  }
  showPoll(text1, text2, votes1, votes2, vote) {
    return (
      <div style={{ backgroundColor: "purple", textAlign: "center" }}>
        <p>Results for question: </p>

        <div
          style={{ border: "solid green", borderRadius: "5px", margin: "15px" }}
        >
          {vote === "optionOne" ? (
            <div style={{ color: "yellow" }}>your vote</div>
          ) : (
            ""
          )}
          <p>Would you rather {text1}?</p>
          <p>{(votes1 * 100) / (votes1 + votes2)}%</p>
          <p>
            {votes1} out of {votes1 + votes2} votes
          </p>
        </div>
        <div
          style={{ border: "solid green", borderRadius: "5px", margin: "15px" }}
        >
          {vote === "optionTwo" ? (
            <div style={{ color: "yellow" }}>your vote</div>
          ) : (
            ""
          )}
          <p>Would you rather {text2}?</p>
          <p>{(votes2 * 100) / (votes1 + votes2)}%</p>
          <p>
            {votes2} out of {votes1 + votes2} votes
          </p>
        </div>
      </div>
    );
  }
  render() {
    const {
      answeredByUser,
      questionId,
      authorName,
      authorAvatar,
      text1,
      text2,
      votes1,
      votes2,
      vote,
    } = this.props;

    return (
      <div>
        <div
          style={{
            margin: "10px",
            border: "solid grey",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              backgroundColor: "grey",
              color: "white",
              padding: "10px 20px",
              fontStyle: "italic",
            }}
          >
            {authorName} asks:
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <img
                width="100px"
                height="100px"
                src={authorAvatar}
                alt="user avatar"
                style={{ borderRight: "solid grey" }}
              />
            </div>

            {answeredByUser
              ? this.showPoll(text1, text2, votes1, votes2, vote, questionId)
              : this.askQuestion(text1, text2)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ activeUser, questions, users, selectedQuestion }) {
  const questionId = questions[selectedQuestion];
  const answeredByUser = Object.keys(users[activeUser]["answers"]).includes(
    selectedQuestion
  );
  const author = questions[selectedQuestion]
    ? questions[selectedQuestion]["author"]
    : "";
  const authorAvatar = users[author] ? users[author]["avatarURL"] : "";
  const authorName = users[author] ? users[author]["name"] : "";

  const votes1 = questions[selectedQuestion]
    ? questions[selectedQuestion]["optionOne"]["votes"].length
    : "";
  const votes2 = questions[selectedQuestion]
    ? questions[selectedQuestion]["optionTwo"]["votes"].length
    : "";
  const text1 = questions[selectedQuestion]
    ? questions[selectedQuestion]["optionOne"]["text"]
    : "";
  const text2 = questions[selectedQuestion]
    ? questions[selectedQuestion]["optionTwo"]["text"]
    : "";

  function getVote() {
    for (let [key, value] of Object.entries(users[activeUser]["answers"])) {
      if (key === selectedQuestion) return value;
    }
    return "";
  }
  const vote = getVote();

  return {
    answeredByUser,
    votes1,
    questionId,
    votes2,
    text1,
    text2,
    authorAvatar,
    authorName,
    answeredByUser,
    vote,
  };
}
export default connect(mapStateToProps)(Answer);
