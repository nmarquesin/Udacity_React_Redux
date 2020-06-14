import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import Avatar from "./Avatar";

import styles from "./UserScoreCard.module.scss";

const UserScoreCard = (props) => {
  const { name, answers, questions, score, avatarId, pos } = props;
  const getMedal = () => {
    return (
      <div className={styles.area1}>
        {pos === 1 ? <div className={styles["pos-gold"]}></div> : ""}
        {pos === 2 ? <div className={styles["pos-silver"]}></div> : ""}
        {pos === 3 ? <div className={styles["pos-bronze"]}></div> : ""}
        <div className={styles["pos-icon"]}>
          <FontAwesomeIcon icon={faMedal} />
        </div>
      </div>
    );
  };
  const getAvatar = () => {
    return (
      <div className={styles.avatar}>
        <Avatar id={avatarId} />
      </div>
    );
  };
  const getPlayersName = () => {
    return <h2 className={styles.username}>{name}</h2>;
  };
  const getAnsQuestions = () => {
    return (
      <div className={styles.item}>
        <div className={styles["item-text"]}>Answered questions </div>
        <div>{answers}</div>
      </div>
    );
  };
  const getCreQuestions = () => {
    return (
      <div className={styles.item}>
        <div className={styles["item-text"]}>Created questions</div>
        <div>{questions}</div>
      </div>
    );
  };
  const getScore = () => {
    return (
      <div className={styles["score-card"]}>
        <p className={styles["score-title"]}>Score</p>
        <div className={styles["score-body"]}>
          <div className={styles.score}>{score}</div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles["card-container"]}>
      {getMedal()}
      <div className={styles.area2}>
        {getAvatar()}
        <div className={styles.info}>
          {getPlayersName()}
          {getAnsQuestions()}
          {getCreQuestions()}
        </div>
        {getScore()}
      </div>
    </div>
  );
};

export default UserScoreCard;
