import React, { Component } from "react";

class UserScoreCard extends Component {
  state = {};
  render() {
    const { name, answers, questions, score, avatar } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <img src={avatar} alt="player avatar" />
        <div>
          <p>Questions Answered: {answers}</p>
          <p>Questions Asked: {questions}</p>
        </div>
        <div>
          <p>Total Score: {score}</p>
        </div>
      </div>
    );
  }
}

export default UserScoreCard;
