import React from "react";
import { shallow } from "enzyme";

import {
  findByTestAttr,
  checkProps,
  storeFactory
} from "../../../test/testUtils";
import guessWord from "./GuessActions";
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

// test whether the container receives specified prop
describe("redux props", () => {
  test("has success piece of state as prop", () => {
    const success = true; // arbitrary value. could be false.
    const wrapper = setup({ success }); // create wrapper setting success value to true. (success prop must exist in store via reducer)
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(true);
  });
  test("'guessWord' action creator is a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("'guessWord' action creator call", () => {
  let wrapper, guessWordSpy;
  const guessedWord = "piano";
  const requiredProps = { success: false };

  beforeEach(() => {
    guessWordSpy = jest.fn();
    wrapper = shallow(
      <Guess {...requiredProps} guessWord={guessWordSpy} />
    );
    wrapper.setState({ inputValue: guessedWord }); // simulate input
    const guessForm = findByTestAttr(wrapper, "guess-form");
    // 2nd arg: mock event to pass into event handler callbacks
    guessForm.simulate("submit", { preventDefault: () => {} }); // simulate submit
  });
  test("'guessWord' action creator runs on form submit", () => {
    const guessWordCallCount = guessWordSpy.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });
  test("calls 'guessWord' with input value as argument", () => {
    const guessWordArg = guessWordSpy.mock.calls[0][0]; // 1st call, 1st arg
    expect(guessWordArg).toBe(guessedWord);
  });
  test("clears input control value upon submit", () => {
    const inputValue = wrapper.state("inputValue");
    expect(inputValue).toBe("");
  });
});
