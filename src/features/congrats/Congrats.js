import React from "react";
import PropTypes from "prop-types";

const Congrats = props => {
  const message = props.success ? (
    <div className="alert alert-success">
      Congratulations! You guessed the word!
    </div>
  ) : null;
  return <div data-test="component-congrats">{message}</div>;
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
