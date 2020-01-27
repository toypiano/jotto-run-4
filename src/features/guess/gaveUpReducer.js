import { GAVE_UP } from "./GuessActions";
import { GAME_RESET } from "../newWord/NewWordActions";

export default (state = false, action) => {
  switch (action.type) {
    case GAVE_UP:
      return true;
    case GAME_RESET:
      return false;
    default:
      return state;
  }
};
