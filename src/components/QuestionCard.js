import React from "react";
import { useHistory } from "react-router-dom";

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
  const { id, author, avatar, answered, qText, showUnansweredQ } = props;
  console.log("styles ", styles);
  return (
    <div>
      {!answered === showUnansweredQ ? (
        <div className={styles["card-container"]}>
          <div className={styles["card-title"]}>{author} asks:</div>
          <div className={styles["card-body"]}>
            <div>
              <img
                width="100px"
                height="100px"
                src={avatar}
                alt="user avatar"
                className={styles["card-avatar"]}
              />
            </div>
            <div className={styles["question-area"]}>
              Would you rather {qText} or ... ?
              {answered ? (
                <div className={styles.div4}>
                  <span>Question Answered!</span>
                </div>
              ) : (
                ""
              )}
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