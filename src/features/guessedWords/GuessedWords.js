import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
  const guessedWordRows = props.guessedWords.map((v, i) => {
    return (
      <tr key={v.guessedWord + i}>
        <td>{v.guessedWord}</td>
        <id>{v.letterMatchingCount}</id>
      </tr>
    );
  });

  const table = (
    <table className="table table-sm">
      <thead className="thead-light">
        <tr>
          <td>Guess</td>
          <td>Matching Letters</td>
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
    ) : (
      <div data-test="guess-instructions">
        Please guess a five-letter word!
      </div>
    );

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
