import { fetchSecretWord } from "../../app/AppActions";

export const GAME_RESET = "newWord/getReset";

export const resetGame = () => {
  return dispatch => {
    dispatch({ type: GAME_RESET });
    return fetchSecretWord()(dispatch);
  };
};
