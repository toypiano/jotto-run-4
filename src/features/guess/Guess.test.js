import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../test/testUtils";
import guessWord from "./actions";
import Guess from "./Guess";

const setup = preloadedState => {
  return shallow();
};

describe("render", () => {
  describe("word has not been successfully guessed", () => {
    test("renders without error", () => {});
    test("renders input control", () => {});
    test("renders submit button", () => {});
  });

  describe("word has been successfully guessed", () => {
    test("renders without error", () => {});
    test("does not render input control", () => {});
    test("does not render submit button", () => {});
  });
});

describe("redux props", () => {
  test("has success piece of state as prop", () => {});
  test("'guessWord' action creator is a function prop", () => {});
});

describe("'guessWord' action creator call", () => {
  test("'guessWord' action creator runs on form submit", () => {});
  test("calls 'guessWord' with input value as argument", () => {});
  test("clears input control value upon submit", () => {});
});
