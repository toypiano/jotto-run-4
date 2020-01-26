import { GUESS_SUCCESS } from "../guess/GuessActions";
import { GAME_RESET } from "../newWord/NewWordActions";

const successReducer = (state = false, action) => {
  switch (action.type) {
    case GUESS_SUCCESS:
      return true;
    case GAME_RESET:
      return false;
    default:
      return state;
  }
};

export default successReducer;
