import { SET_SELECTED_QUESTION } from "../actions/selectedQ";

export default function selectedQuestion(state = null, action) {
  switch (action.type) {
    case SET_SELECTED_QUESTION:
      return action.id;
    default:
      return state;
  }
}
