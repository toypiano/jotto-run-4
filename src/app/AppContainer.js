import { connect } from "react-redux";

import App from "./App";
import { fetchSecretWord } from "./actions";

const mapState = ({ success, guessedWords }) => ({
  success,
  guessedWords
});

export default connect(mapState, { fetchSecretWord })(App);
