import axios from "axios";

// action types
export const FETCH_WORD_SUCCESS = "app/fetchWordSuccess";
export const FETCH_WORD_FAIL = "app/fetchWordFail";

/**
 * Returns Redux thunk function that dispatches FETCH_WORD_SUCCESS
 * or FETCH_WORD_FAIL
 * @function fetchSecretWord
 * @returns {Function} - Redux thunk function
 */
export const fetchSecretWord = () => {
  return dispatch => {
    return axios
      .get(
        "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=200&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=uq83m5wz8kd5av5wnpbgsjox6piw2widav43epjzhlqd4m8ro"
      )
      .then(res => {
        const word = res.data.word.toLowerCase();
        if (/[^a-z]/.test(word)) {
          console.log("non-letter: re-fetch");
          dispatch(fetchSecretWord());
        } else {
          dispatch({
            type: FETCH_WORD_SUCCESS,
            secretWord: res.data.word
          });
        }
      })
      .catch(err => {
        dispatch({
          type: FETCH_WORD_FAIL,
          error: err
        });
      });
  };
};
