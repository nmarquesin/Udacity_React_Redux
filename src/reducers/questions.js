import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ADD_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      const { question } = action;

      return {
        ...state,
        [question.id]: question,
      };
    case ADD_ANSWER:
      const { qid, answer, authedUser } = action;
      console.log("============> qid: ", qid);
      console.log("============> qid2: ", answer);
      console.log("============> qid3: ", authedUser);
      console.log("============> qid4: ", state);
      console.log("============> qid5: ", state[qid]);
      console.log(
        "============> qid6: ",
        state[qid][answer].votes.concat([authedUser])
      );
      const x = state[qid][answer].votes.concat([authedUser]);
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer]["votes"].concat([authedUser]),
          },
        },
      };
    default:
      return state;
  }
}
