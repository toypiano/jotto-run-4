import { FETCH_WORD_FAIL, FETCH_WORD_SUCCESS } from "./AppActions";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_WORD_FAIL:
      return action.error.response.data.message;
    case FETCH_WORD_SUCCESS:
      return null;
    default:
      return state;
  }
};
