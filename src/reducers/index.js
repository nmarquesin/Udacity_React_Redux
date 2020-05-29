import { combineReducers } from "redux";
import activeUser from "./activeUser";
import users from "./users";
import questions from "./questions";
import selectedQuestion from "./selectedQuestion";

export default combineReducers({
  activeUser,
  users,
  questions,
  selectedQuestion,
});
