import { actionTypes } from "./actions";

const secretWordReducer = (state = "", action) => {
  switch (action.type) {
    case actionTypes.FETCH_WORD_SUCCESS:
      return action.secretWord;
    default:
      return state;
  }
};

export default secretWordReducer;
