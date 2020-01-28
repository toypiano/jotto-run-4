import {
  USER_ENTERING,
  USER_SUBMITTED
} from "./EnterWordButtonActions";

import { GAME_RESET } from "../../features/newWord/NewWordActions";

export default (status = null, action) => {
  switch (action.type) {
    case USER_ENTERING:
      return "inProgress";
    case USER_SUBMITTED:
      return "submitted";
    case GAME_RESET:
      return null;
    default:
      return status;
  }
};
