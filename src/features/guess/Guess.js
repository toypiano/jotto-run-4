import React, { Component } from "react";
import PropTypes from "prop-types";

class Guess extends Component {
  state = {
    inputValue: ""
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.guessWord(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    const form = this.props.success ? null : (
      <form
        className="form-group"
        data-test="guess-form"
        onSubmit={this.handleSubmit}
      >
        <label>Guess the secret word!</label>
        <input
          data-test="input-control"
          id="word"
          className="form-control"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          data-test="submit-button"
          className="btn btn-primary mt-2"
        >
          Submit
        </button>
        <button
          type="button"
          data-test="give-up-button"
          className="btn btn-danger mt-2 ml-2"
          onClick={this.props.giveUp}
        >
          Give Up
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
