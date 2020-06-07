import React, { Component } from "react";

import styles from "./UserScoreCard.module.scss";

class UserScoreCard extends Component {
  state = {};
  render() {
    const { name, answers, questions, score, avatar } = this.props;
    return (
      <div className={styles["card-container"]}>
        <img className={styles.avatar} src={avatar} alt="player avatar" />
        <div className={styles.info}>
          <h2 className={styles.username}>{name}</h2>
          <div className={styles.item}>
            <div>Answered questions </div>
            <div>{answers}</div>
          </div>
          <div className={styles.item}>
            <div>Created questions</div>
            <div>{questions}</div>
          </div>
        </div>
        <div className={styles["score-card"]}>
          <p className={styles["score-title"]}>Score</p>
          <div className={styles["score-body"]}>
            <p className={styles.score}>{score}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserScoreCard;
