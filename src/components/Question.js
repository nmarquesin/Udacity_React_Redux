import React, { Component } from "react";
import { connect } from "react-redux";
import { setSelectedQuestion } from "../actions/selectedQ";

class Question extends Component {
  handleClick = (value) => {
    return this.props.dispatch(setSelectedQuestion(value));
  };
  render() {
    const {
      answeredByUser,
      question,
      authorName,
      authorAvatar,
      id,
    } = this.props;
    // console.log("Hello: ", this.props);
    return (
      <div>
        {!answeredByUser == this.props.showUnansweredQuestions ? (
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
              <div style={{ backgroundColor: "green", textAlign: "center" }}>
                Would you rather {question.text} or ... ?
                <p>Answered by user? {answeredByUser ? "true" : "false"}</p>
                {answeredByUser ? (
                  <div>
                    <div
                      style={{
                        textAlign: "center",
                        width: "80px",
                        height: "80px",
                        borderRadius: "40px",
                        backgroundColor: "yellow",
                        transform: "rotate(20deg)",
                        marginTop: "-50px",
                        marginLeft: "500px",
                      }}
                    >
                      <span>Question Answered</span>
                    </div>
                    <div>
                      <button
                        value={id}
                        onClick={(e) => this.handleClick(e.target.value)}
                      >
                        View poll
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <button
                      value={id}
                      onClick={(e) => this.handleClick(e.target.value)}
                    >
                      Answer question
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps({ activeUser, questions, users }, { id }) {
  const question = questions[id];
  const answeredByUser = Object.keys(users[activeUser]["answers"]).includes(id);
  const author = questions[id]["author"];
  const authorAvatar = users[author]["avatarURL"];
  const authorName = users[author]["name"];
  return {
    answeredByUser,
    question: { author: question.author, text: question.optionOne.text },
    authorName,
    authorAvatar,
    id,
  };
}

export default connect(mapStateToProps)(Question);
