export const SET_SELECTED_QUESTION = "SET_SELECTED_QUESTION ";

export function setSelectedQuestion(id) {
  return {
    type: SET_SELECTED_QUESTION,
    id,
  };
}
