import React from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import Answer from "./Answer";
import Login from "./Login";

const Question = (props) => {
  const { id } = useParams();
  const { loggedUser } = props;
  return <div>{loggedUser ? <Answer qId={id} /> : <Login />}</div>;
};

function mapStateToProps({ activeUser }) {
  const loading = activeUser === null;
  const loggedUser = loading ? null : activeUser.id;
  return {
    loggedUser,
  };
}

export default connect(mapStateToProps)(Question);
