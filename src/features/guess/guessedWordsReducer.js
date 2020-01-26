import { GUESS_SUBMITTED } from "./GuessActions";
import { GAME_RESET } from "../newWord/NewWordActions";

const guessSubmitted = (state, action) => {
  return [...state, action.guessedWord];
};

const guessedWordsReducer = (state = [], action) => {
  switch (action.type) {
    case GUESS_SUBMITTED:
      return guessSubmitted(state, action);
    case GAME_RESET:
      return [];
    default:
      return state;
  }
};

export default guessedWordsReducer;
