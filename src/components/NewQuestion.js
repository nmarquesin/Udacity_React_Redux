import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/getData";

import styles from "./NewQuestion.module.scss";

class NewQuestion extends Component {
  state = {
    optionTwoText: "",
    optionOneText: "",
    sendToHome: false,
  };
  handleChangeTxtOne = (e) => {
    const textOne = e.target.value;

    this.setState(() => ({
      optionOneText: textOne,
      author: this.props.activeUser,
    }));
  };
  handleChangeTxtTwo = (e) => {
    const textTwo = e.target.value;

    this.setState(() => ({
      optionTwoText: textTwo,
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    if (optionOneText === "" || optionTwoText === "") {
      return;
    }
    const { dispatch } = this.props;
    dispatch(handleAddQuestion(optionOneText, optionTwoText));
    this.setState(() => ({
      optionOneText: "",
      optionTwoText: "",
      sendToHome: true,
    }));
  };
  render() {
    return (
      <div className={styles.container}>
        {this.state.sendToHome ? (
          <Redirect to="/" />
        ) : (
          <div className={styles.card}>
            <div className={styles["card-title"]}>
              <h3>Create New Question</h3>
            </div>
            <div className={styles["card-body"]}>
              <form
                className={styles["form-area"]}
                onSubmit={this.handleSubmit}
              >
                <div className={styles["text"]}>Complete the question:</div>
                <div className={styles["question-prompt"]}>
                  Would you rather ...
                </div>
                <div className={styles["input-area"]}>
                  <input
                    type="text"
                    name="optionOneX"
                    id="optionOne"
                    value={this.state.optionOneText}
                    onChange={this.handleChangeTxtOne}
                    className={styles.input}
                    placeholder="Enter option one here"
                  />
                </div>
                <p>or</p>
                <div className={styles["input-area"]}>
                  <input
                    type="text"
                    name="optionTwoX"
                    id="optionTwo"
                    value={this.state.optionTwoText}
                    onChange={this.handleChangeTxtTwo}
                    className={styles.input}
                    placeholder="Enter option two here"
                  />
                </div>
                <div className={styles.button}>
                  <input className={styles.btn} type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ activeUser }) {
  return activeUser;
}

export default connect(mapStateToProps)(NewQuestion);
