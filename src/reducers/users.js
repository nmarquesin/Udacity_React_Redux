import {
  RECEIVE_USERS,
  ADD_QUESTION_BY_USER,
  ADD_ANSWER_BY_USER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ADD_QUESTION_BY_USER:
      const { question, user } = action;
      return {
        ...state,
        [user.id]: {
          ...user,
          questions: user.questions.concat([question.id]),
        },
      };

    case ADD_ANSWER_BY_USER:
      const { qid, answer, authedUser } = action;
      console.log("Reducer: ", qid);
      console.log("Reducer: ", answer);
      console.log("Reducer: ", authedUser);
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };

    default:
      return state;
  }
}
