import { getLetterMatchCount } from "../../common/utils/";

export const actionTypes = {
  GUESS_SUBMITTED: "guess/guessSubmitted",
  GUESS_SUCCESS: "guess/guessSuccess"
};

/**
 * Returns Redux Thunk function that dispatches GUESS_SUBMITTED action
 * with guessedWord as payload
 * and (conditionally) GUESS_SUCCESS action.
 * @function guessWord
 * @param {string} guessedWord - Guessed word
 * @returns {Function} - Redux thunk function
 */
export const guessWord = guessedWord => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(
      secretWord,
      guessedWord
    );
    dispatch({
      type: actionTypes.GUESS_SUBMITTED,
      guessedWord: {
        guessedWord,
        letterMatchCount
      }
    });
    if (secretWord === guessedWord) {
      dispatch({
        type: actionTypes.GUESS_SUCCESS
      });
    }
  };
};
