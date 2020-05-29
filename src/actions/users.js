export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_BY_USER = "ADD_QUESTION_BY_USER";
export const ADD_ANSWER_BY_USER = "ADD_ANSWER_BY_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addQuestionByUser(question, user) {
  return {
    type: ADD_QUESTION_BY_USER,
    question,
    user,
  };
}

export function addAnswerByUser(qid, answer, authedUser) {
  return {
    type: ADD_ANSWER_BY_USER,
    qid,
    answer,
    authedUser,
  };
}
