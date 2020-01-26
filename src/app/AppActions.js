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
      .get("http://localhost:3030")
      .then(res => {
        dispatch({
          type: FETCH_WORD_SUCCESS,
          secretWord: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_WORD_FAIL,
          error: err
        });
      });
  };
};
