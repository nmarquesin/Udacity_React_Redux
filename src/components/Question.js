import React from "react";
import { useParams } from "react-router";
import Answer from "./Answer";

const Question = (props) => {
  const { id } = useParams();
  return (
    <div>
      <Answer qId={id} />
    </div>
  );
};

export default Question;
