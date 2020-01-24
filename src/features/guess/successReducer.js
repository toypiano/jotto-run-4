import { actionTypes } from "./actions";

const successReducer = (state = false, action) => {
  switch (action.state) {
    case actionTypes.GUESS_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default successReducer;
