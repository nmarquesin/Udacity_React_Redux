import { SET_ACTIVE_USER } from "../actions/activeUser";

export default function activeUser(state = null, action) {
  switch (action.type) {
    case SET_ACTIVE_USER:
      const { id } = action;
      return {
        id,
      };
    default:
      return state;
  }
}
