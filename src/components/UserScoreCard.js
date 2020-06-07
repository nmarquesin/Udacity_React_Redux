import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

import styles from "./UserScoreCard.module.scss";

class UserScoreCard extends Component {
  state = {};
  render() {
    const { name, answers, questions, score, avatar, pos } = this.props;
    console.log("Position ===> ", pos);
    return (
      <div className={styles["card-container"]}>
        <div className={styles.area1}>
          {pos === 1 ? <div className={styles["pos-gold"]}></div> : ""}
          {pos === 2 ? <div className={styles["pos-silver"]}></div> : ""}
          {pos === 3 ? <div className={styles["pos-bronze"]}></div> : ""}
          <div className={styles["pos-icon"]}>
            <FontAwesomeIcon icon={faMedal} />
          </div>
        </div>
        <div className={styles.area2}>
          <div>
            <img className={styles.avatar} src={avatar} alt="player avatar" />
          </div>
          <div className={styles.info}>
            <h2 className={styles.username}>{name}</h2>
            <div className={styles.item}>
              <div className={styles["item-text"]}>Answered questions </div>
              <div>{answers}</div>
            </div>
            <div className={styles.item}>
              <div className={styles["item-text"]}>Created questions</div>
              <div>{questions}</div>
            </div>
          </div>
          <div className={styles["score-card"]}>
            <p className={styles["score-title"]}>Score</p>
            <div className={styles["score-body"]}>
              <div className={styles.score}>{score}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserScoreCard;
