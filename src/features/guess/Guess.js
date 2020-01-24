import React, { Component } from "react";
import PropTypes from "prop-types";

class Guess extends Component {
  state = {
    inputValue: ""
  };

  render() {
    const form = this.props.success ? null : (
      <form className="form-group">
        <label for="word">Guess the secret word!</label>
        <input
          data-test="input-control"
          id="word"
          className="form-control"
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mt-2"
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-guess">{form}</div>;
  }
}

Guess.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Guess;
