import { actionTypes } from "./actions";

const guessSubmitted = (state, action) => {
  return [...state, action.guessedWord];
};

const guessedWordsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_SUBMITTED:
      return guessSubmitted(state, action);
    default:
      return state;
  }
};

export default guessedWordsReducer;
