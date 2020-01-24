/**
 *
 * @param {string} secretWord - Secret word.
 * @param {string} guessedWord - Guessed word.
 * @returns {number} - Number of letters matched between secretWord and guessedWord
 */
export const getLetterMatchCount = (secretWord, guessedWord) => {
  const secretWordLetterSet = new Set(secretWord.split(""));
  return [...secretWordLetterSet].filter(letter =>
    guessedWord.includes(letter)
  ).length;
};
