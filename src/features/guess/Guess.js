import React from "react";
import propTypes from "prop-types";

const Guess = props => {
  return (
    <div>
      <form>
        <label>Guess the secret word!</label>
        <input />
        <button>Submit</button>
      </form>
    </div>
  );
};

Guess.propTypes = {};

export default Guess;
