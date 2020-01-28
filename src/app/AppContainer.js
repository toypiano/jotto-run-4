import { connect } from "react-redux";

import App from "./App";
import { fetchSecretWord } from "./AppActions";
import { resetGame } from "../features/newWord/NewWordActions";
import {
  submitUserWord,
  enterWordForm
} from "../features/enterWord/EnterWordButtonActions";

const mapState = ({
  success,
  guessedWords,
  gaveUp,
  secretWord,
  serverError,
  errorMessage,
  enterWordStatus
}) => ({
  success,
  guessedWords,
  gaveUp,
  secretWord,
  serverError,
  errorMessage,
  enterWordStatus
});

const actionCreators = {
  fetchSecretWord,
  resetGame,
  submitUserWord,
  enterWordForm
};
export default connect(mapState, actionCreators)(App);
