import React, { Component } from "react";
import propTypes from "prop-types";

class Guess extends Component {
  state = {
    inputValue: ""
  };

  render() {
    return (
      <div>
        <form>
          <label>Guess the secret word!</label>
          <input />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

Guess.propTypes = {};

export default Guess;
