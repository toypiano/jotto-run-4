import { GAME_RESET } from "../newWord/NewWordActions";

export const USER_ENTERING = "enterWord/entering";
export const USER_SUBMITTED = "enterWord/submitted";

export const submitUserWord = word => {
  return dispatch => {
    dispatch({ type: USER_SUBMITTED, word });
    dispatch({ type: GAME_RESET });
  };
};

export const enterWordForm = () => {
  return {
    type: USER_ENTERING
  };
};
