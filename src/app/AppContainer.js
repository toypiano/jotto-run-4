import { connect } from "react-redux";

import App from "./App";
import { fetchSecretWord } from "./AppActions";
import { resetGame } from "../features/newWord/NewWordActions";

const mapState = ({
  success,
  guessedWords,
  gaveUp,
  secretWord,
  serverError,
  errorMessage
}) => ({
  success,
  guessedWords,
  gaveUp,
  secretWord,
  serverError,
  errorMessage
});

const actionCreators = {
  fetchSecretWord,
  resetGame
};
export default connect(mapState, actionCreators)(App);
