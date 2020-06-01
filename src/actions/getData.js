import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";
import { receiveQuestions, addQuestion, addAnswer } from "./questions";
import { receiveUsers, addQuestionByUser, addAnswerByUser } from "./users";
import { setActiveUser } from "./activeUser";
import { setSelectedQuestion } from "./selectedQ";

const ACTIVE_ID = "";
const SELECTED_QUESTION = "";

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
        dispatch(setActiveUser(ACTIVE_ID));
        dispatch(setSelectedQuestion(SELECTED_QUESTION));
      }
    );
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { activeUser, users } = getState();
    const user = users[activeUser.id];
    const author = activeUser.id;
    const question = { optionOneText, optionTwoText, author };
    return _saveQuestion(question).then((savedQuestion) => {
      dispatch(addQuestion(savedQuestion));
      dispatch(addQuestionByUser(savedQuestion, user));
    });
  };
}

export function handleSaveAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { activeUser, users } = getState();
    const authedUser = activeUser.id;
    console.log("console.log activeuser ==========> ", activeUser);
    const newAnswer = { authedUser, qid, answer };
    console.log("console.log newAnswer ==========> ", newAnswer);
    return _saveQuestionAnswer(newAnswer).then(() => {
      dispatch(addAnswer(qid, answer, activeUser));
      dispatch(addAnswerByUser(qid, answer, authedUser));
      dispatch(setSelectedQuestion(qid));
    });
  };
}
