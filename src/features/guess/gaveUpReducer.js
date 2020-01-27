import { GAVE_UP } from "./GuessActions";

export default (state = false, action) => {
  switch (action.type) {
    case GAVE_UP:
      return true;
    default:
      return state;
  }
};
