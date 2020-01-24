import React, { Component } from "react";
import propTypes from "prop-types";

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
        <button data-test="submit-button" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
    return <div data-test="component-guess">{form}</div>;
  }
}

Guess.propTypes = {};

export default Guess;
