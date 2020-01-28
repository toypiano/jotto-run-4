import { combineReducers } from "redux";
import guessedWordsReducer from "../features/guess/guessedWordsReducer";
import successReducer from "../features/guess/successReducer";
import secretWordReducer from "./secretWordReducer";
import serverErrorReducer from "./serverErrorReducer";
import gaveUpReducer from "../features/guess/gaveUpReducer";
import errorMessageReducer from "./errorMessageReducer";

export default combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer,
  secretWord: secretWordReducer,
  serverError: serverErrorReducer,
  gaveUp: gaveUpReducer,
  errorMessage: errorMessageReducer
});
