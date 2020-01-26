import { FETCH_WORD_SUCCESS, FETCH_WORD_FAIL } from "./AppActions";

const serverErrorReducer = (state = false, action) => {
  switch (action.type) {
    case FETCH_WORD_FAIL:
      return true;
    case FETCH_WORD_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default serverErrorReducer;
