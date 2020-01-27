import React from "react";
import PropTypes from "prop-types";

const ShowSecretWord = props => {
  const message = (
    <p className="alert alert-info">
      The secret word is {props.secretWord}. Let's try again!
    </p>
  );
  return (
    <div data-test="component-show-secret-word">
      {props.show && message}
    </div>
  );
};

ShowSecretWord.propTypes = {
  show: PropTypes.bool.isRequired,
  secretWord: PropTypes.string.isRequired
};

export default ShowSecretWord;
