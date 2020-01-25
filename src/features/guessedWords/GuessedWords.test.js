import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../test/testUtils";
import GuessedWords from "./GuessedWords";

test("does not throw warning with expected props", () => {});

describe("no words guessed previously", () => {
  test("renders without error", () => {});
  test("renders an instructions to guess a word", () => {});
});

describe("some words guessed previously", () => {
  test("renders without error", () => {});
  test("renders 'guessedWords' section", () => {});
});
