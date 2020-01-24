import { connect } from "react-redux";

import Guess from "./Guess";

const mapState = ({ success }) => ({ success });
export default connect(mapState)(Guess);
