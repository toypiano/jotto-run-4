import React from "react";
import { shallow } from "enzyme";

import {
  findByTestAttr,
  checkProps,
  storeFactory
} from "../../../test/testUtils";
import guessWord from "./actions";
import GuessContainer from "./GuessContainer";
import Guess from "./Guess";

/**
 * Factory function to create a ShallowWrapper for the Guess component
 * @function setup
 * @param {Object} preloadedState - state specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = preloadedState => {
  const store = storeFactory(preloadedState);
  // dive into the returning JSX element of Guess
  const wrapper = shallow(<GuessContainer store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("render", () => {
  describe("word has not been successfully guessed", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: false });
    });
    test("renders without error", () => {
      const component = findByTestAttr(wrapper, "component-guess");
      expect(component.length).toBe(1);
    });
    test("renders input control", () => {
      const inputControl = findByTestAttr(wrapper, "input-control");
      expect(inputControl.length).toBe(1);
    });
    test("renders submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });

  describe("word has been successfully guessed", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    });
    test("renders without error", () => {
      const component = findByTestAttr(wrapper, "component-guess");
      expect(component.length).toBe(1);
    });
    test("does not render input control", () => {
      const inputControl = findByTestAttr(wrapper, "input-control");
      expect(inputControl.length).toBe(0);
    });
    test("does not render submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  const error = checkProps(Guess, expectedProps);
  expect(error).toBe(undefined);
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
