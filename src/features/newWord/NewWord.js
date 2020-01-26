import React from "react";
import PropTypes from "prop-types";

const NewWord = props => {
  return (
    <div data-test="component-new-word">
      {props.show && (
        <button
          data-test="new-word-button"
          type="button"
          onClick={props.getNewWord}
          className="btn btn-success mb-2"
        >
          New Word
        </button>
      )}
    </div>
  );
};

NewWord.propTypes = {
  show: PropTypes.bool.isRequired,
  getNewWord: PropTypes.func
};

export default NewWord;
