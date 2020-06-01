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
      <button value={id} onClick={(e) => handleClick(e.target.value)}>
        {buttonText}
      </button>
    );
  };
  const { id, author, avatar, answered, qText, showUnansweredQ } = props;
  return (
    <div>
      {!answered === showUnansweredQ ? (
        <div className={styles.div1}>
          <div className={styles.div2}>{author} asks:</div>
          <div className={styles.div3}>
            <div>
              <img
                width="100px"
                height="100px"
                src={avatar}
                alt="user avatar"
                className={styles.image}
              />
            </div>
            <div className={styles.div5}>
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
