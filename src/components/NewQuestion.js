import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/getData";

class NewQuestion extends Component {
  state = {
    optionTwoText: "",
    optionOneText: "",
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
    const { dispatch } = this.props;
    dispatch(handleAddQuestion(optionOneText, optionTwoText));
    this.setState(() => ({
      optionOneText: "",
    }));
  };
  render() {
    return (
      <div>
        <h3>New Question</h3>
        <form onSubmit={this.handleSubmit}>
          <p>Would you rather...</p>
          <input
            type="text"
            name="optionOneX"
            id="optionOne"
            value={this.state.optionOneText}
            onChange={this.handleChangeTxtOne}
          />
          <p>or ...</p>
          <input
            type="text"
            name="optionTwoX"
            id="optionTwo"
            value={this.state.optionTwoText}
            onChange={this.handleChangeTxtTwo}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps({ activeUser }) {
  return activeUser;
}

export default connect(mapStateToProps)(NewQuestion);
