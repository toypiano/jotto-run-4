import React, { Component } from "react";
import PropTypes from "prop-types";

// Conditionally rendered in App component
// because it replaces some other components
class EnterWordForm extends Component {
  constructor(props) {
    super(props);
    this.inputControl = React.createRef();
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.submitUserWord(this.inputControl.current.value);
  };

  render() {
    return (
      <form
        data-test="component-enter-word-form"
        onSubmit={this.handleSubmit}
        className="form-group"
      >
        <label data-test="enter-word-instructions">
          Please enter your secret word to guess!
        </label>
        <input
          data-test="submit-word-input-control"
          type="text"
          ref={this.inputControl}
          className="form-control mb-2"
          placeholder="enter 5-letter secret word"
        />
        <button
          data-test="word-submit-button"
          type="submit"
          className="btn btn-primary"
        >
          Submit and Play
        </button>
      </form>
    );
  }
}

EnterWordForm.propTypes = {
  submitUserWord: PropTypes.func.isRequired
};
export default EnterWordForm;
