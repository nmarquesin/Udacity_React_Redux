import React from "react";
import { useHistory } from "react-router-dom";
import Avatar from "./Avatar";

import styles from "./QuestionCard.module.scss";

const QuestionCard = (props) => {
  let history = useHistory();
  const handleClick = (value) => {
    props.onHandleClick(value);
    const path = "/question/" + value;
    history.push(path);
    return;
  };
  const renderButton = (answered, id) => {
    const buttonText = answered ? "View poll" : "Answer question";
    return (
      <button
        className={styles["btn"]}
        value={id}
        onClick={(e) => handleClick(e.target.value)}
      >
        {buttonText}
      </button>
    );
  };
  const { id, author, answered, qText, showUnansweredQ, name } = props;
  return (
    <div>
      {!answered === showUnansweredQ ? (
        <div className={styles["card-container"]}>
          <div className={styles["card-title"]}>{name} asks:</div>
          <div className={styles["card-body"]}>
            <div className={styles["avatar"]}>
              <Avatar id={author} />
            </div>
            <div className={styles["question-area"]}>
              <div className={styles["question-text"]}>
                Would you rather {qText} or...
              </div>
              <div>{renderButton(answered, id)}</div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default QuestionCard;
