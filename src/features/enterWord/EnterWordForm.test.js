import React from "react";
import { shallow } from "enzyme";

import EnterWordForm from "./EnterWordForm";
import { findByTestAttr, checkProps } from "../../../test/testUtils";

const defaultProps = {
  submitUserWord: () => {}
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<EnterWordForm {...setupProps} />);
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("renders without error", () => {
    const component = findByTestAttr(
      wrapper,
      "component-enter-word-form"
    );
    expect(component.length).toBe(1);
  });
  test("renders instructions", () => {
    const instructions = findByTestAttr(
      wrapper,
      "enter-word-instructions"
    );
    expect(instructions.text().length).toBeGreaterThan(0);
  });
  test("render submit button", () => {
    const submitButton = findByTestAttr(
      wrapper,
      "word-submit-button"
    );
    expect(submitButton.length).toBe(1);
  });
  test("renders input control", () => {
    const inputControl = findByTestAttr(
      wrapper,
      "submit-word-input-control"
    );
    expect(inputControl.length).toBe(1);
  });
});

test("does not throw warning with expected props", () => {
  const expectedProps = defaultProps;
  const error = checkProps(EnterWordForm, expectedProps);
  expect(error).toBe(undefined);
});

describe("submitUserWord action", () => {
  let wrapper, submitUserWordMock;
  const userSecretWord = "dance";

  beforeEach(() => {
    submitUserWordMock = jest.fn();
    wrapper = shallow(
      <EnterWordForm submitUserWord={submitUserWordMock} />
    );
    // EnterWordForm class component has instance property, 'inputControl'
    // which is a ref passed to the 'input-control' element.
    // React assigns 'current' props with the DOM element when
    // the component mounts, and assigns it back to 'null' when it un-mounts.
    wrapper.instance().inputControl.current = {
      value: userSecretWord
    };
    const form = findByTestAttr(wrapper, "component-enter-word-form");
    // provide fake event obj into event handler callback
    // to prevent ref error when e.preventDefault is called.
    form.simulate("submit", { preventDefault: () => {} });
  });
  test("'submitUserWord' was called on submit", () => {
    expect(submitUserWordMock.mock.calls.length).toBe(1);
  });
  test("'submitUserWord' was called with input value as argument", () => {
    expect(submitUserWordMock.mock.calls[0][0]).toBe(userSecretWord);
  });
});
