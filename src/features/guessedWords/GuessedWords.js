import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
  const guessedWordRows = props.guessedWords.map((v, i) => {
    return (
      <tr data-test="guessed-word" key={v.guessedWord + i}>
        <td data-test="guess-index">{i + 1}</td>
        <td>{v.guessedWord}</td>
        <td>{v.letterMatchCount}</td>
      </tr>
    );
  });

  const table = (
    <table className="table table-sm">
      <thead className="thead-light">
        <tr>
          <th>#</th>
          <th>Guess</th>
          <th>Matching Letters</th>
        </tr>
      </thead>
      <tbody>{guessedWordRows}</tbody>
    </table>
  );

  const content =
    props.guessedWords.length > 0 ? (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        {table}
      </div>
    ) : !props.gaveUp ? (
      <div data-test="guess-instructions">
        Please guess a five-letter word!
      </div>
    ) : null;

  return <div data-test="component-guessed-words">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
