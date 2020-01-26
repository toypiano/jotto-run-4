import { fetchSecretWord } from "../../app/actions";

const actionTypes = {
  GAME_RESET: "newWord/getReset"
};

export const resetGame = () => {
  return dispatch => {
    dispatch({ type: actionTypes.GAME_RESET });
    return fetchSecretWord()(dispatch);
  };
};
