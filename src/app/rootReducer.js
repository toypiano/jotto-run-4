import { combineReducers } from "redux";
import guessedWordsReducer from "../features/guess/guessedWordsReducer";
import successReducer from "../features/guess/successReducer";

export default combineReducers({
  success: successReducer,
  guessedWordsReducer
});
