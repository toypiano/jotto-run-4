import { connect } from "react-redux";
import { guessWord, giveUp } from "./GuessActions";
import Guess from "./Guess";

const mapState = ({ success }) => ({ success });
const actionCreators = { guessWord, giveUp };
export default connect(mapState, actionCreators)(Guess);
