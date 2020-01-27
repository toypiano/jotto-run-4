import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../test/testUtils";
import GuessedWords from "./GuessedWords";

// Need to setup defaultProps if that prop is required in the propTypes
// Otherwise, any tests calling setup function will throw propType warning/
const defaultProps = { guessedWords: [] };
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  // check that shallow-wrapped GuessedWords component
  // doesn't throw propTypes warning with defaultProps passed in.
  const wrapper = setup();
  const err = checkProps(wrapper, defaultProps);
  expect(err).toBe(undefined);
});

describe("no words guessed previously", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("renders without error", () => {
    const component = findByTestAttr(
      wrapper,
      "component-guessed-words"
    );
    expect(component.length).toBe(1);
  });
  test("renders an instructions to guess a word", () => {
    const instructions = findByTestAttr(
      wrapper,
      "guess-instructions"
    );
    expect(instructions.length).toBeGreaterThan(0);
  });
});

describe("some words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "polly", letterMatchCount: 2 }
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("renders without error", () => {
    const component = findByTestAttr(
      wrapper,
      "component-guessed-words"
    );
    expect(component.length).toBe(1);
  });
  test("renders 'guessedWords' section", () => {
    const guessedWordsSection = findByTestAttr(
      wrapper,
      "guessed-words"
    );
    expect(guessedWordsSection.length).toBe(1);
  });
  test("renders correct number of guessed words", () => {});
  test("renders 'guess index' column", () => {});
  test("renders correct index next to guessed word", () => {});
});
