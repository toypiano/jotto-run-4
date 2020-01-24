import { actionTypes } from "./actions";

const serverErrorReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WORD_FAIL:
      return true;
    case actionTypes.FETCH_WORD_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default serverErrorReducer;
