import React from "react";
import PropTypes from "prop-types";

const EnterWordButton = props => {
  const content = props.show ? (
    <button
      data-test="component-enter-word-button"
      className="btn btn-outline-success"
      onClick={props.enterWordForm}
    >
      Enter Word
    </button>
  ) : (
    <div data-test="component-enter-word-button"></div>
  );

  return content;
};

EnterWordButton.propTypes = {
  show: PropTypes.bool.isRequired
};

export default EnterWordButton;
