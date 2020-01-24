import { actionTypes } from "./actions";

const successReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.GUESS_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default successReducer;
