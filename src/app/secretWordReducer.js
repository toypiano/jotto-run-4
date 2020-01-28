import { FETCH_WORD_SUCCESS } from "./AppActions";
import { USER_SUBMITTED } from "../features/enterWord/EnterWordButtonActions";

const secretWordReducer = (state = "", action) => {
  switch (action.type) {
    case FETCH_WORD_SUCCESS:
      return action.secretWord;
    case USER_SUBMITTED:
      return action.word;
    default:
      return state;
  }
};

export default secretWordReducer;
