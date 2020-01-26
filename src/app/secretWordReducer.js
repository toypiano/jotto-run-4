import { FETCH_WORD_SUCCESS } from "./AppActions";

const secretWordReducer = (state = "", action) => {
  switch (action.type) {
    case FETCH_WORD_SUCCESS:
      return action.secretWord;
    default:
      return state;
  }
};

export default secretWordReducer;
